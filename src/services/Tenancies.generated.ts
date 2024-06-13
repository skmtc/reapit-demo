import { CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateTenancyCheckModel } from '@/schemas/createTenancyCheckModel.generated.tsx'
import { CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'
import { CreateTenancyAllowanceModel } from '@/schemas/createTenancyAllowanceModel.generated.tsx'
import { CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'
import { CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'
import { CreateTenancyRenewalCheckModel } from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'
import { tenancyModelPagedResult } from '@/schemas/tenancyModelPagedResult.generated.tsx'
import { tenancyContactRelationshipModelPagedResult } from '@/schemas/tenancyContactRelationshipModelPagedResult.generated.tsx'
import { tenancyCheckModelPagedResult } from '@/schemas/tenancyCheckModelPagedResult.generated.tsx'
import { tenancyBreakClauseModelPagedResult } from '@/schemas/tenancyBreakClauseModelPagedResult.generated.tsx'
import { tenancyAllowanceModelPagedResult } from '@/schemas/tenancyAllowanceModelPagedResult.generated.tsx'
import { tenancyResponsibilityModelPagedResult } from '@/schemas/tenancyResponsibilityModelPagedResult.generated.tsx'
import { tenancyRenewalModelPagedResult } from '@/schemas/tenancyRenewalModelPagedResult.generated.tsx'
import { tenancyExtensionAlterationModelPagedResult } from '@/schemas/tenancyExtensionAlterationModelPagedResult.generated.tsx'
import { tenancyRenewalCheckModelPagedResult } from '@/schemas/tenancyRenewalCheckModelPagedResult.generated.tsx'

export type CreateTenancyFnArgs = { body: CreateTenancyModel }
export const createTenancyFn = async ({ body }: CreateTenancyFnArgs) => {
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
export type CreateTenancyCheckFnArgs = { id: string; body: CreateTenancyCheckModel }
export const createTenancyCheckFn = async ({ id, body }: CreateTenancyCheckFnArgs) => {
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
export type CreateTenancyBreakClauseFnArgs = { id: string; body: CreateTenancyBreakClauseModel }
export const createTenancyBreakClauseFn = async ({ id, body }: CreateTenancyBreakClauseFnArgs) => {
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
export type CreateTenancyAllowanceFnArgs = { id: string; body: CreateTenancyAllowanceModel }
export const createTenancyAllowanceFn = async ({ id, body }: CreateTenancyAllowanceFnArgs) => {
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
export type CreateTenancyResponsibilityFnArgs = { id: string; body: CreateTenancyResponsibilityModel }
export const createTenancyResponsibilityFn = async ({ id, body }: CreateTenancyResponsibilityFnArgs) => {
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
export type CreateTenancyRenewalNegotiationFnArgs = { id: string; body: CreateTenancyRenewalModel }
export const createTenancyRenewalNegotiationFn = async ({ id, body }: CreateTenancyRenewalNegotiationFnArgs) => {
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
export type CreateTenancyRenewalNegotiationCheckFnArgs = {
  id: string
  renewalId: string
  body: CreateTenancyRenewalCheckModel
}
export const createTenancyRenewalNegotiationCheckFn = async ({
  id,
  renewalId,
  body,
}: CreateTenancyRenewalNegotiationCheckFnArgs) => {
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
export type GetApiTenanciesIdRelationshipsFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdRelationshipsFnArgs) => {
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
export const useGetApiTenanciesIdRelationships = (args: GetApiTenanciesIdRelationshipsFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdChecksFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  type?: string | null | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | null | undefined
}
export const getApiTenanciesIdChecksFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
  status,
}: GetApiTenanciesIdChecksFnArgs) => {
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
export const useGetApiTenanciesIdChecks = (args: GetApiTenanciesIdChecksFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdBreakClausesFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdBreakClausesFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdBreakClausesFnArgs) => {
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
export const useGetApiTenanciesIdBreakClauses = (args: GetApiTenanciesIdBreakClausesFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdBreakClausesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdAllowancesFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdAllowancesFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdAllowancesFnArgs) => {
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
export const useGetApiTenanciesIdAllowances = (args: GetApiTenanciesIdAllowancesFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdAllowancesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdResponsibilitiesFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdResponsibilitiesFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdResponsibilitiesFnArgs) => {
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
export const useGetApiTenanciesIdResponsibilities = (args: GetApiTenanciesIdResponsibilitiesFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdResponsibilitiesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdRenewalNegotiationsFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdRenewalNegotiationsFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdRenewalNegotiationsFnArgs) => {
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
export const useGetApiTenanciesIdRenewalNegotiations = (args: GetApiTenanciesIdRenewalNegotiationsFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdExtensionsFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdExtensionsFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdExtensionsFnArgs) => {
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
export const useGetApiTenanciesIdExtensions = (args: GetApiTenanciesIdExtensionsFnArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdExtensionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiTenanciesIdRenewalNegotiationsRenewalIdChecksFnArgs = {
  id: string
  renewalId: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({
  id,
  renewalId,
  pageSize,
  pageNumber,
}: GetApiTenanciesIdRenewalNegotiationsRenewalIdChecksFnArgs) => {
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
  args: GetApiTenanciesIdRenewalNegotiationsRenewalIdChecksFnArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
