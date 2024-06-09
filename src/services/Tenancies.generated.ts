import { tenancyModelPagedResult } from '@/schemas/tenancyModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiTenanciesFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  fromArchive?: boolean | undefined
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
    | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  name?: string | undefined
  nameType?: string | undefined
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | undefined
  email?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  endDateFrom?: string | undefined
  endDateTo?: string | undefined
  startDateFrom?: string | undefined
  startDateTo?: string | undefined
  metadata?: Array<string> | undefined
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
