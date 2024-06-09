import { companyModelPagedResult } from '@/schemas/companyModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateCompanyModel } from '@/schemas/createCompanyModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiCompaniesFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'companyTypes' | 'relationships'> | undefined
  id?: Array<string> | undefined
  address?: string | undefined
  branch?: string | undefined
  name?: string | undefined
  typeId?: string | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
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
