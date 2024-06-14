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

export type CreateApiTenanciesFnArgs = { body: CreateTenancyModel }
export const createApiTenanciesFn = async ({ body }: CreateApiTenanciesFnArgs) => {
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
export const useCreateApiTenancies = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type CreateApiTenanciesIdChecksFnArgs = { id: string; body: CreateTenancyCheckModel }
export const createApiTenanciesIdChecksFn = async ({ id, body }: CreateApiTenanciesIdChecksFnArgs) => {
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
export const useCreateApiTenanciesIdChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesIdChecksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type CreateApiTenanciesIdBreakClausesFnArgs = { id: string; body: CreateTenancyBreakClauseModel }
export const createApiTenanciesIdBreakClausesFn = async ({ id, body }: CreateApiTenanciesIdBreakClausesFnArgs) => {
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
export const useCreateApiTenanciesIdBreakClauses = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesIdBreakClausesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type CreateApiTenanciesIdAllowancesFnArgs = { id: string; body: CreateTenancyAllowanceModel }
export const createApiTenanciesIdAllowancesFn = async ({ id, body }: CreateApiTenanciesIdAllowancesFnArgs) => {
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
export const useCreateApiTenanciesIdAllowances = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesIdAllowancesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type CreateApiTenanciesIdResponsibilitiesFnArgs = { id: string; body: CreateTenancyResponsibilityModel }
export const createApiTenanciesIdResponsibilitiesFn = async ({
  id,
  body,
}: CreateApiTenanciesIdResponsibilitiesFnArgs) => {
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
export const useCreateApiTenanciesIdResponsibilities = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesIdResponsibilitiesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type CreateApiTenanciesIdRenewalNegotiationsFnArgs = { id: string; body: CreateTenancyRenewalModel }
export const createApiTenanciesIdRenewalNegotiationsFn = async ({
  id,
  body,
}: CreateApiTenanciesIdRenewalNegotiationsFnArgs) => {
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
export const useCreateApiTenanciesIdRenewalNegotiations = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesIdRenewalNegotiationsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type CreateApiTenanciesIdRenewalNegotiationsRenewalIdChecksFnArgs = {
  id: string
  renewalId: string
  body: CreateTenancyRenewalCheckModel
}
export const createApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({
  id,
  renewalId,
  body,
}: CreateApiTenanciesIdRenewalNegotiationsRenewalIdChecksFnArgs) => {
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
export const useCreateApiTenanciesIdRenewalNegotiationsRenewalIdChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn,
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
