import { companyModelPagedResult } from '@/schemas/companyModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateCompanyModel } from '@/schemas/createCompanyModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiCompaniesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'companyTypes' | 'relationships'> | null | undefined
  id?: Array<string> | null | undefined
  address?: string | null | undefined
  branch?: string | null | undefined
  name?: string | null | undefined
  typeId?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  contactDetail?: Array<string> | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
}
export const getApiCompaniesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  address,
  branch,
  name,
  typeId,
  negotiatorId,
  officeId,
  contactDetail,
  fromArchive,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: GetApiCompaniesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, address, branch, name, typeId, negotiatorId, officeId, contactDetail, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return companyModelPagedResult.parse(data)
}
export const useGetApiCompanies = (args: GetApiCompaniesFnArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiCompaniesFnArgs = { body: CreateCompanyModel }
export const postApiCompaniesFn = async ({ body }: PostApiCompaniesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiCompanies = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiCompaniesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    },
  })
}
