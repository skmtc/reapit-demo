import { CreateOfferModel } from '@/schemas/createOfferModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { offerModelPagedResult } from '@/schemas/offerModelPagedResult.generated.tsx'

export type CreateApiOffersFnArgs = { body: CreateOfferModel }
export const createApiOffersFn = async ({ body }: CreateApiOffersFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiOffers = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiOffersFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    },
  })
}
export type GetApiOffersFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | null | undefined
  id?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  status?:
    | Array<'pending' | 'withdrawn' | 'rejected' | 'accepted' | 'noteOfInterest' | 'noteOfInterestWithdrawn'>
    | null
    | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  amountFrom?: number | null | undefined
  amountTo?: number | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
}
export const getApiOffersFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  applicantId,
  propertyId,
  status,
  address,
  name,
  amountFrom,
  amountTo,
  dateFrom,
  dateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: GetApiOffersFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, applicantId, propertyId, status, address, name, amountFrom, amountTo, dateFrom, dateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return offerModelPagedResult.parse(data)
}
export const useGetApiOffers = (args: GetApiOffersFnArgs) => {
  const result = useQuery({
    queryKey: ['Offers'],
    queryFn: () => getApiOffersFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
