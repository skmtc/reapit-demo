import { CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { UpdateTenancyModel } from '@/schemas/updateTenancyModel.generated.tsx'
import { CreateTenancyCheckModel } from '@/schemas/createTenancyCheckModel.generated.tsx'
import { UpdateTenancyCheckModel } from '@/schemas/updateTenancyCheckModel.generated.tsx'
import { CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'
import { UpdateTenancyBreakClauseModel } from '@/schemas/updateTenancyBreakClauseModel.generated.tsx'
import { CreateTenancyAllowanceModel } from '@/schemas/createTenancyAllowanceModel.generated.tsx'
import { UpdateTenancyAllowanceModel } from '@/schemas/updateTenancyAllowanceModel.generated.tsx'
import { CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'
import { UpdateTenancyResponsibilityModel } from '@/schemas/updateTenancyResponsibilityModel.generated.tsx'
import { CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'
import { UpdateTenancyRenewalModel } from '@/schemas/updateTenancyRenewalModel.generated.tsx'
import { CreateTenancyRenewalCheckModel } from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'
import { UpdateTenancyRenewalCheckModel } from '@/schemas/updateTenancyRenewalCheckModel.generated.tsx'
import { tenancyModelPagedResult } from '@/schemas/tenancyModelPagedResult.generated.tsx'
import { tenancyContactRelationshipModelPagedResult } from '@/schemas/tenancyContactRelationshipModelPagedResult.generated.tsx'
import { tenancyCheckModelPagedResult } from '@/schemas/tenancyCheckModelPagedResult.generated.tsx'
import { tenancyBreakClauseModelPagedResult } from '@/schemas/tenancyBreakClauseModelPagedResult.generated.tsx'
import { tenancyAllowanceModelPagedResult } from '@/schemas/tenancyAllowanceModelPagedResult.generated.tsx'
import { tenancyResponsibilityModelPagedResult } from '@/schemas/tenancyResponsibilityModelPagedResult.generated.tsx'
import { tenancyRenewalModelPagedResult } from '@/schemas/tenancyRenewalModelPagedResult.generated.tsx'
import { tenancyExtensionAlterationModelPagedResult } from '@/schemas/tenancyExtensionAlterationModelPagedResult.generated.tsx'
import { tenancyRenewalCheckModelPagedResult } from '@/schemas/tenancyRenewalCheckModelPagedResult.generated.tsx'

export type UsePostApiTenanciesArgs = {body: CreateTenancyModel};
export const postApiTenanciesFn = async ({body}: UsePostApiTenanciesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenancies = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdArgs = {'If-Match'?: string, id: string, body: UpdateTenancyModel};
export const patchApiTenanciesIdFn = async ({'If-Match': IfMatch, id, body}: UsePatchApiTenanciesIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePostApiTenanciesIdChecksArgs = {id: string, body: CreateTenancyCheckModel};
export const postApiTenanciesIdChecksFn = async ({id, body}: UsePostApiTenanciesIdChecksArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenanciesIdChecks = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesIdChecksFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdChecksCheckIdArgs = {'If-Match'?: string, id: string, checkId: string, body: UpdateTenancyCheckModel};
export const patchApiTenanciesIdChecksCheckIdFn = async ({'If-Match': IfMatch, id, checkId, body}: UsePatchApiTenanciesIdChecksCheckIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesIdChecksCheckId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdChecksCheckIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePostApiTenanciesIdBreakClausesArgs = {id: string, body: CreateTenancyBreakClauseModel};
export const postApiTenanciesIdBreakClausesFn = async ({id, body}: UsePostApiTenanciesIdBreakClausesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenanciesIdBreakClauses = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesIdBreakClausesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdBreakClausesClauseIdArgs = {'If-Match'?: string, id: string, clauseId: string, body: UpdateTenancyBreakClauseModel};
export const patchApiTenanciesIdBreakClausesClauseIdFn = async ({'If-Match': IfMatch, id, clauseId, body}: UsePatchApiTenanciesIdBreakClausesClauseIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesIdBreakClausesClauseId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdBreakClausesClauseIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePostApiTenanciesIdAllowancesArgs = {id: string, body: CreateTenancyAllowanceModel};
export const postApiTenanciesIdAllowancesFn = async ({id, body}: UsePostApiTenanciesIdAllowancesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenanciesIdAllowances = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesIdAllowancesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdAllowancesAllowanceIdArgs = {'If-Match'?: string, id: string, allowanceId: string, body: UpdateTenancyAllowanceModel};
export const patchApiTenanciesIdAllowancesAllowanceIdFn = async ({'If-Match': IfMatch, id, allowanceId, body}: UsePatchApiTenanciesIdAllowancesAllowanceIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesIdAllowancesAllowanceId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdAllowancesAllowanceIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePostApiTenanciesIdResponsibilitiesArgs = {id: string, body: CreateTenancyResponsibilityModel};
export const postApiTenanciesIdResponsibilitiesFn = async ({id, body}: UsePostApiTenanciesIdResponsibilitiesArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenanciesIdResponsibilities = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesIdResponsibilitiesFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdResponsibilitiesResponsibilityIdArgs = {'If-Match'?: string, id: string, responsibilityId: string, body: UpdateTenancyResponsibilityModel};
export const patchApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({'If-Match': IfMatch, id, responsibilityId, body}: UsePatchApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesIdResponsibilitiesResponsibilityId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdResponsibilitiesResponsibilityIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePostApiTenanciesIdRenewalNegotiationsArgs = {id: string, body: CreateTenancyRenewalModel};
export const postApiTenanciesIdRenewalNegotiationsFn = async ({id, body}: UsePostApiTenanciesIdRenewalNegotiationsArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenanciesIdRenewalNegotiations = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesIdRenewalNegotiationsFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdArgs = {'If-Match'?: string, id: string, renewalId: string, body: UpdateTenancyRenewalModel};
export const patchApiTenanciesIdRenewalNegotiationsRenewalIdFn = async ({'If-Match': IfMatch, id, renewalId, body}: UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesIdRenewalNegotiationsRenewalId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePostApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {id: string, renewalId: string, body: CreateTenancyRenewalCheckModel};
export const postApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({id, renewalId, body}: UsePostApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePostApiTenanciesIdRenewalNegotiationsRenewalIdChecks = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: postApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {'If-Match'?: string, id: string, renewalId: string, checkId: string, body: UpdateTenancyRenewalCheckModel};
export const patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({'If-Match': IfMatch, id, renewalId, checkId, body}: UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
        const res = await fetch(
          `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return z.void().parse(data)
    };
export const usePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = () => {
      const queryClient = useQueryClient()
      const { handleFetchError } = useFetchError()
    
      return useMutation({
        mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
        onError: handleFetchError,
        onSuccess: () => {
          // Invalidate and refetch
          void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
        }
      })
    };
export type UseGetApiTenanciesArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, sortBy?: string | undefined, fromArchive?: boolean | undefined, embed?: Array<'appointments' | 'applicant' | 'extensions' | 'documents' | 'negotiator' | 'property' | 'source' | 'tasks' | 'type'> | undefined, id?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, applicantId?: Array<string> | undefined, propertyId?: Array<string> | undefined, name?: string | undefined, nameType?: string | undefined, status?: Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'> | undefined, email?: Array<string> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, endDateFrom?: string | undefined, endDateTo?: string | undefined, startDateFrom?: string | undefined, startDateTo?: string | undefined, metadata?: Array<string> | undefined};
export const getApiTenanciesFn = async ({pageSize, pageNumber, sortBy, fromArchive, embed, id, negotiatorId, applicantId, propertyId, name, nameType, status, email, createdFrom, createdTo, modifiedFrom, modifiedTo, endDateFrom, endDateTo, startDateFrom, startDateTo, metadata}: UseGetApiTenanciesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${querySerialiser({args:{ pageSize, pageNumber, sortBy, fromArchive, embed, id, negotiatorId, applicantId, propertyId, name, nameType, status, email, createdFrom, createdTo, modifiedFrom, modifiedTo, endDateFrom, endDateTo, startDateFrom, startDateTo, metadata}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyModelPagedResult.parse(data)
    };
export const useGetApiTenancies = (args: UseGetApiTenanciesArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdRelationshipsArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdRelationshipsFn = async ({id, pageSize, pageNumber}: UseGetApiTenanciesIdRelationshipsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/relationships${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyContactRelationshipModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdRelationships = (args: UseGetApiTenanciesIdRelationshipsArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdRelationshipsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdChecksArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined, type?: string | undefined, status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined};
export const getApiTenanciesIdChecksFn = async ({id, pageSize, pageNumber, type, status}: UseGetApiTenanciesIdChecksArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks${querySerialiser({args:{ pageSize, pageNumber, type, status}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyCheckModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdChecks = (args: UseGetApiTenanciesIdChecksArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdChecksFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdBreakClausesArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdBreakClausesFn = async ({id, pageSize, pageNumber}: UseGetApiTenanciesIdBreakClausesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyBreakClauseModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdBreakClauses = (args: UseGetApiTenanciesIdBreakClausesArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdBreakClausesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdAllowancesArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdAllowancesFn = async ({id, pageSize, pageNumber}: UseGetApiTenanciesIdAllowancesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyAllowanceModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdAllowances = (args: UseGetApiTenanciesIdAllowancesArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdAllowancesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdResponsibilitiesArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdResponsibilitiesFn = async ({id, pageSize, pageNumber}: UseGetApiTenanciesIdResponsibilitiesArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyResponsibilityModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdResponsibilities = (args: UseGetApiTenanciesIdResponsibilitiesArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdResponsibilitiesFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdRenewalNegotiationsArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdRenewalNegotiationsFn = async ({id, pageSize, pageNumber}: UseGetApiTenanciesIdRenewalNegotiationsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyRenewalModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdRenewalNegotiations = (args: UseGetApiTenanciesIdRenewalNegotiationsArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdRenewalNegotiationsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs = {id: string, renewalId: string};
export const getApiTenanciesIdRenewalNegotiationsRenewalIdFn = async ({id, renewalId}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
    

      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyRenewalModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdRenewalNegotiationsRenewalId = ({id, renewalId}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies', id, renewalId],
        queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdFn({id, renewalId})
      })

      return result
    };
export type UseGetApiTenanciesIdExtensionsArgs = {id: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdExtensionsFn = async ({id, pageSize, pageNumber}: UseGetApiTenanciesIdExtensionsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/extensions${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyExtensionAlterationModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdExtensions = (args: UseGetApiTenanciesIdExtensionsArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdExtensionsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };
export type UseGetApiTenanciesIdExtensionsExtensionIdArgs = {id: string, extensionId: string};
export const getApiTenanciesIdExtensionsExtensionIdFn = async ({id, extensionId}: UseGetApiTenanciesIdExtensionsExtensionIdArgs) => {
    

      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/extensions/${extensionId}${querySerialiser({args:{ }, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyExtensionAlterationModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdExtensionsExtensionId = ({id, extensionId}: UseGetApiTenanciesIdExtensionsExtensionIdArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies', id, extensionId],
        queryFn: () => getApiTenanciesIdExtensionsExtensionIdFn({id, extensionId})
      })

      return result
    };
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {id: string, renewalId: string, pageSize?: number | undefined, pageNumber?: number | undefined};
export const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({id, renewalId, pageSize, pageNumber}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks${querySerialiser({args:{ pageSize, pageNumber}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return tenancyRenewalCheckModelPagedResult.parse(data)
    };
export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks = (args: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs) => {
      const result = useQuery({
        queryKey: ['Tenancies'],
        queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };