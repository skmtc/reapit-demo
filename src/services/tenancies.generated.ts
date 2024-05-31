import {
  tenancyModelPagedResult,
  CreateTenancyModel,
  tenancyModel,
  UpdateTenancyModel,
  tenancyContactRelationshipModelPagedResult,
  tenancyContactRelationshipModel,
  tenancyCheckModelPagedResult,
  CreateTenancyCheckModel,
  tenancyCheckModel,
  UpdateTenancyCheckModel,
  tenancyBreakClauseModelPagedResult,
  CreateTenancyBreakClauseModel,
  tenancyBreakClauseModel,
  UpdateTenancyBreakClauseModel,
  tenancyAllowanceModelPagedResult,
  CreateTenancyAllowanceModel,
  tenancyAllowanceModel,
  UpdateTenancyAllowanceModel,
  tenancyResponsibilityModelPagedResult,
  CreateTenancyResponsibilityModel,
  tenancyResponsibilityModel,
  UpdateTenancyResponsibilityModel,
  tenancyRenewalModelPagedResult,
  CreateTenancyRenewalModel,
  UpdateTenancyRenewalModel,
  tenancyExtensionAlterationModelPagedResult,
  tenancyRenewalCheckModelPagedResult,
  CreateTenancyRenewalCheckModel,
  tenancyRenewalCheckModel,
  UpdateTenancyRenewalCheckModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiTenanciesArgs = {
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
}: UseGetApiTenanciesArgs) => {
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
export const useGetApiTenancies = (args: UseGetApiTenanciesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyArgs = { body: CreateTenancyModel }
export const createTenancyFn = async ({ body }: UseCreateTenancyArgs) => {
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
export const useCreateTenancy = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdArgs = {
  id: string
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
}
export const getApiTenanciesIdFn = async ({ id, embed }: UseGetApiTenanciesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyModel.parse(data)
}
export const useGetApiTenanciesId = ({ id, embed }: UseGetApiTenanciesIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, embed],
    queryFn: () => getApiTenanciesIdFn({ id, embed }),
  })

  return result
}
export type UsePatchApiTenanciesIdArgs = { 'If-Match'?: string; id: string; body: UpdateTenancyModel }
export const patchApiTenanciesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiTenanciesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyContactRelationshipModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdRelationships = (args: UseGetApiTenanciesIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTenanciesIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiTenanciesIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiTenanciesIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyContactRelationshipModel.parse(data)
}
export const useGetApiTenanciesIdRelationshipsRelationshipId = ({
  id,
  relationshipId,
}: UseGetApiTenanciesIdRelationshipsRelationshipIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, relationshipId],
    queryFn: () => getApiTenanciesIdRelationshipsRelationshipIdFn({ id, relationshipId }),
  })

  return result
}
export type UseGetApiTenanciesIdChecksArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined
}
export const getApiTenanciesIdChecksFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
  status,
}: UseGetApiTenanciesIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks${querySerialiser({ args: { pageSize, pageNumber, type, status }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyCheckModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdChecks = (args: UseGetApiTenanciesIdChecksArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyCheckArgs = { id: string; body: CreateTenancyCheckModel }
export const createTenancyCheckFn = async ({ id, body }: UseCreateTenancyCheckArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateTenancyCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdChecksCheckIdArgs = { id: string; checkId: string }
export const getApiTenanciesIdChecksCheckIdFn = async ({ id, checkId }: UseGetApiTenanciesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyCheckModel.parse(data)
}
export const useGetApiTenanciesIdChecksCheckId = ({ id, checkId }: UseGetApiTenanciesIdChecksCheckIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, checkId],
    queryFn: () => getApiTenanciesIdChecksCheckIdFn({ id, checkId }),
  })

  return result
}
export type UseDeleteApiTenanciesIdChecksCheckIdArgs = { id: string; checkId: string }
export const deleteApiTenanciesIdChecksCheckIdFn = async ({
  id,
  checkId,
}: UseDeleteApiTenanciesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
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
export const useDeleteApiTenanciesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  checkId: string
  body: UpdateTenancyCheckModel
}
export const patchApiTenanciesIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  checkId,
  body,
}: UsePatchApiTenanciesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdBreakClausesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdBreakClausesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdBreakClausesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyBreakClauseModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdBreakClauses = (args: UseGetApiTenanciesIdBreakClausesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdBreakClausesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyBreakClauseArgs = { id: string; body: CreateTenancyBreakClauseModel }
export const createTenancyBreakClauseFn = async ({ id, body }: UseCreateTenancyBreakClauseArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateTenancyBreakClause = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyBreakClauseFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdBreakClausesClauseIdArgs = { id: string; clauseId: string }
export const getApiTenanciesIdBreakClausesClauseIdFn = async ({
  id,
  clauseId,
}: UseGetApiTenanciesIdBreakClausesClauseIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyBreakClauseModel.parse(data)
}
export const useGetApiTenanciesIdBreakClausesClauseId = ({
  id,
  clauseId,
}: UseGetApiTenanciesIdBreakClausesClauseIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, clauseId],
    queryFn: () => getApiTenanciesIdBreakClausesClauseIdFn({ id, clauseId }),
  })

  return result
}
export type UseDeleteApiTenanciesIdBreakClausesClauseIdArgs = { id: string; clauseId: string }
export const deleteApiTenanciesIdBreakClausesClauseIdFn = async ({
  id,
  clauseId,
}: UseDeleteApiTenanciesIdBreakClausesClauseIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
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
export const useDeleteApiTenanciesIdBreakClausesClauseId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdBreakClausesClauseIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdBreakClausesClauseIdArgs = {
  'If-Match'?: string
  id: string
  clauseId: string
  body: UpdateTenancyBreakClauseModel
}
export const patchApiTenanciesIdBreakClausesClauseIdFn = async ({
  'If-Match': IfMatch,
  id,
  clauseId,
  body,
}: UsePatchApiTenanciesIdBreakClausesClauseIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesIdBreakClausesClauseId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdBreakClausesClauseIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdAllowancesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdAllowancesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdAllowancesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyAllowanceModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdAllowances = (args: UseGetApiTenanciesIdAllowancesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdAllowancesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyAllowanceArgs = { id: string; body: CreateTenancyAllowanceModel }
export const createTenancyAllowanceFn = async ({ id, body }: UseCreateTenancyAllowanceArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateTenancyAllowance = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyAllowanceFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdAllowancesAllowanceIdArgs = { id: string; allowanceId: string }
export const getApiTenanciesIdAllowancesAllowanceIdFn = async ({
  id,
  allowanceId,
}: UseGetApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyAllowanceModel.parse(data)
}
export const useGetApiTenanciesIdAllowancesAllowanceId = ({
  id,
  allowanceId,
}: UseGetApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, allowanceId],
    queryFn: () => getApiTenanciesIdAllowancesAllowanceIdFn({ id, allowanceId }),
  })

  return result
}
export type UseDeleteApiTenanciesIdAllowancesAllowanceIdArgs = { id: string; allowanceId: string }
export const deleteApiTenanciesIdAllowancesAllowanceIdFn = async ({
  id,
  allowanceId,
}: UseDeleteApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
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
export const useDeleteApiTenanciesIdAllowancesAllowanceId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdAllowancesAllowanceIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdAllowancesAllowanceIdArgs = {
  'If-Match'?: string
  id: string
  allowanceId: string
  body: UpdateTenancyAllowanceModel
}
export const patchApiTenanciesIdAllowancesAllowanceIdFn = async ({
  'If-Match': IfMatch,
  id,
  allowanceId,
  body,
}: UsePatchApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesIdAllowancesAllowanceId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdAllowancesAllowanceIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdResponsibilitiesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdResponsibilitiesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdResponsibilitiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyResponsibilityModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdResponsibilities = (args: UseGetApiTenanciesIdResponsibilitiesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdResponsibilitiesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyResponsibilityArgs = { id: string; body: CreateTenancyResponsibilityModel }
export const createTenancyResponsibilityFn = async ({ id, body }: UseCreateTenancyResponsibilityArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateTenancyResponsibility = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyResponsibilityFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs = { id: string; responsibilityId: string }
export const getApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({
  id,
  responsibilityId,
}: UseGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyResponsibilityModel.parse(data)
}
export const useGetApiTenanciesIdResponsibilitiesResponsibilityId = ({
  id,
  responsibilityId,
}: UseGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, responsibilityId],
    queryFn: () => getApiTenanciesIdResponsibilitiesResponsibilityIdFn({ id, responsibilityId }),
  })

  return result
}
export type UseDeleteApiTenanciesIdResponsibilitiesResponsibilityIdArgs = { id: string; responsibilityId: string }
export const deleteApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({
  id,
  responsibilityId,
}: UseDeleteApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
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
export const useDeleteApiTenanciesIdResponsibilitiesResponsibilityId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdResponsibilitiesResponsibilityIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdResponsibilitiesResponsibilityIdArgs = {
  'If-Match'?: string
  id: string
  responsibilityId: string
  body: UpdateTenancyResponsibilityModel
}
export const patchApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({
  'If-Match': IfMatch,
  id,
  responsibilityId,
  body,
}: UsePatchApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesIdResponsibilitiesResponsibilityId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdResponsibilitiesResponsibilityIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRenewalNegotiationsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdRenewalNegotiationsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdRenewalNegotiationsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyRenewalModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiations = (args: UseGetApiTenanciesIdRenewalNegotiationsArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyRenewalNegotiationArgs = { id: string; body: CreateTenancyRenewalModel }
export const createTenancyRenewalNegotiationFn = async ({ id, body }: UseCreateTenancyRenewalNegotiationArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateTenancyRenewalNegotiation = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyRenewalNegotiationFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs = { id: string; renewalId: string }
export const getApiTenanciesIdRenewalNegotiationsRenewalIdFn = async ({
  id,
  renewalId,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyRenewalModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiationsRenewalId = ({
  id,
  renewalId,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, renewalId],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdFn({ id, renewalId }),
  })

  return result
}
export type UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdArgs = {
  'If-Match'?: string
  id: string
  renewalId: string
  body: UpdateTenancyRenewalModel
}
export const patchApiTenanciesIdRenewalNegotiationsRenewalIdFn = async ({
  'If-Match': IfMatch,
  id,
  renewalId,
  body,
}: UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesIdRenewalNegotiationsRenewalId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdExtensionsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdExtensionsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdExtensionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/extensions${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyExtensionAlterationModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdExtensions = (args: UseGetApiTenanciesIdExtensionsArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdExtensionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTenanciesIdExtensionsExtensionIdArgs = { id: string; extensionId: string }
export const getApiTenanciesIdExtensionsExtensionIdFn = async ({
  id,
  extensionId,
}: UseGetApiTenanciesIdExtensionsExtensionIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/extensions/${extensionId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyExtensionAlterationModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdExtensionsExtensionId = ({
  id,
  extensionId,
}: UseGetApiTenanciesIdExtensionsExtensionIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, extensionId],
    queryFn: () => getApiTenanciesIdExtensionsExtensionIdFn({ id, extensionId }),
  })

  return result
}
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({
  id,
  renewalId,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return tenancyRenewalCheckModelPagedResult.parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  args: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateTenancyRenewalNegotiationCheckArgs = {
  id: string
  renewalId: string
  body: CreateTenancyRenewalCheckModel
}
export const createTenancyRenewalNegotiationCheckFn = async ({
  id,
  renewalId,
  body,
}: UseCreateTenancyRenewalNegotiationCheckArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateTenancyRenewalNegotiationCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyRenewalNegotiationCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  id: string
  renewalId: string
  checkId: string
}
export const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({
  id,
  renewalId,
  checkId,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return tenancyRenewalCheckModel.parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = ({
  id,
  renewalId,
  checkId,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies', id, renewalId, checkId],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn({ id, renewalId, checkId }),
  })

  return result
}
export type UseDeleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  renewalId: string
  checkId: string
}
export const deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  renewalId,
  checkId,
}: UseDeleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
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
export const useDeleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  renewalId: string
  checkId: string
  body: UpdateTenancyRenewalCheckModel
}
export const patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  renewalId,
  checkId,
  body,
}: UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
