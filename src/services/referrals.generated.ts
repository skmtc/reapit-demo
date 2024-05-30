import {
  referralModelPagedResult,
  CreateReferralModel,
  referralModel,
  UpdateReferralModel,
  referralTypeModelPagedResult,
  referralTypeModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiReferralsArgs = {
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  referralTypeId?: Array<string> | undefined
  status?: Array<'sent' | 'inProgress' | 'succeeded' | 'cancelled' | 'failed' | 'paid' | 'declined'> | undefined
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | undefined
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export const getApiReferralsFn = async ({
  id,
  propertyId,
  applicantId,
  contactId,
  negotiatorId,
  referralTypeId,
  status,
  embed,
  pageSize,
  pageNumber,
  sortBy,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiReferralsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${querySerialiser({ args: { id, propertyId, applicantId, contactId, negotiatorId, referralTypeId, status, embed, pageSize, pageNumber, sortBy, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return referralModelPagedResult.parse(data)
}
export const useGetApiReferrals = (args: UseGetApiReferralsArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateReferralArgs = { body: CreateReferralModel }
export const createReferralFn = async ({ body }: UseCreateReferralArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateReferral = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createReferralFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    },
  })
}
export type UseGetApiReferralsIdArgs = {
  id: string
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | undefined
}
export const getApiReferralsIdFn = async ({ id, embed }: UseGetApiReferralsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return referralModel.parse(data)
}
export const useGetApiReferralsId = (args: UseGetApiReferralsIdArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsIdFn(args),
  })

  return result
}
export type UsePatchApiReferralsIdArgs = { 'If-Match'?: string; id: string; body: UpdateReferralModel }
export const patchApiReferralsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiReferralsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiReferralsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiReferralsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    },
  })
}
export type UseGetApiReferralsTypesArgs = {
  id?: Array<string> | undefined
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
}
export const getApiReferralsTypesFn = async ({ id, pageSize, pageNumber, sortBy }: UseGetApiReferralsTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/types${querySerialiser({ args: { id, pageSize, pageNumber, sortBy }, options: defaultQuerySerialiserOptions })}`,
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

  return referralTypeModelPagedResult.parse(data)
}
export const useGetApiReferralsTypes = (args: UseGetApiReferralsTypesArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsTypesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiReferralsTypesIdArgs = { id: string }
export const getApiReferralsTypesIdFn = async ({ id }: UseGetApiReferralsTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/referrals/types/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return referralTypeModel.parse(data)
}
export const useGetApiReferralsTypesId = (args: UseGetApiReferralsTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsTypesIdFn(args),
  })

  return result
}
