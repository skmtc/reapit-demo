import {
  CreateCompanyModel,
  companyModelPagedResult,
  companyRoleModelPagedResult,
  companyModel,
  UpdateCompanyModel,
  staffModelPagedResult,
} from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateCompanyArgs = { body: CreateCompanyModel }
export const createCompanyFn = async ({ body }: UseCreateCompanyArgs) => {
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
export const useCreateCompany = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createCompanyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    },
  })
}
export type UseGetApiCompaniesArgs = {
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
}: UseGetApiCompaniesArgs) => {
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
export const useGetApiCompanies = (args: UseGetApiCompaniesArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiCompaniesIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiCompaniesIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiCompaniesIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return companyRoleModelPagedResult.parse(data)
}
export const useGetApiCompaniesIdRelationships = (args: UseGetApiCompaniesIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiCompaniesIdArgs = { id: string; embed?: Array<'companyTypes' | 'relationships'> | undefined }
export const getApiCompaniesIdFn = async ({ id, embed }: UseGetApiCompaniesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return companyModel.parse(data)
}
export const useGetApiCompaniesId = ({ id, embed }: UseGetApiCompaniesIdArgs) => {
  const result = useQuery({
    queryKey: ['Companies', id, embed],
    queryFn: () => getApiCompaniesIdFn({ id, embed }),
  })

  return result
}
export type UsePatchApiCompaniesIdArgs = { 'If-Match'?: string; id: string; body: UpdateCompanyModel }
export const patchApiCompaniesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiCompaniesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
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
export const usePatchApiCompaniesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiCompaniesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    },
  })
}
export type UseGetApiCompaniesIdStaffMembersArgs = { id: string }
export const getApiCompaniesIdStaffMembersFn = async ({ id }: UseGetApiCompaniesIdStaffMembersArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}/staffMembers${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return staffModelPagedResult.parse(data)
}
export const useGetApiCompaniesIdStaffMembers = ({ id }: UseGetApiCompaniesIdStaffMembersArgs) => {
  const result = useQuery({
    queryKey: ['Companies', id],
    queryFn: () => getApiCompaniesIdStaffMembersFn({ id }),
  })

  return result
}
