import { tenancyModelPagedResult } from '@/schemas/tenancyModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiTenanciesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  fromArchive?: boolean | null | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | null
    | undefined
  id?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | null
    | undefined
  email?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  endDateFrom?: string | null | undefined
  endDateTo?: string | null | undefined
  startDateFrom?: string | null | undefined
  startDateTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
}
export const getApiTenanciesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  fromArchive,
  embed,
  id,
  negotiatorId,
  applicantId,
  propertyId,
  name,
  nameType,
  status,
  email,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  endDateFrom,
  endDateTo,
  startDateFrom,
  startDateTo,
  metadata,
}: GetApiTenanciesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${querySerialiser({ args: { pageSize, pageNumber, sortBy, fromArchive, embed, id, negotiatorId, applicantId, propertyId, name, nameType, status, email, createdFrom, createdTo, modifiedFrom, modifiedTo, endDateFrom, endDateTo, startDateFrom, startDateTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyModelPagedResult.parse(data)
}
export const useGetApiTenancies = (args: GetApiTenanciesFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiTenanciesFnArgs = { body: CreateTenancyModel }
export const postApiTenanciesFn = async ({ body }: PostApiTenanciesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiTenancies = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
