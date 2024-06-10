import { referralModelPagedResult } from '@/schemas/referralModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateReferralModel } from '@/schemas/createReferralModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiReferralsFnArgs = {
  id?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  referralTypeId?: Array<string> | null | undefined
  status?: Array<'sent' | 'inProgress' | 'succeeded' | 'cancelled' | 'failed' | 'paid' | 'declined'> | null | undefined
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | null | undefined
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
}
export const getApiReferralsFn = async ({
  id,
  propertyId,
  applicantId,
  contactId,
  negotiatorId,
  referralTypeId,
  status,
  embed,
  pageSize,
  pageNumber,
  sortBy,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiReferralsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${querySerialiser({ args: { id, propertyId, applicantId, contactId, negotiatorId, referralTypeId, status, embed, pageSize, pageNumber, sortBy, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return referralModelPagedResult.parse(data)
}
export const useGetApiReferrals = (args: GetApiReferralsFnArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiReferralsFnArgs = { body: CreateReferralModel }
export const postApiReferralsFn = async ({ body }: PostApiReferralsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiReferrals = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiReferralsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    },
  })
}
