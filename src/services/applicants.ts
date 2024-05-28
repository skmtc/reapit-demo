import { applicantModelPagedResult } from '@/models/applicantModelPagedResult.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateApplicantModel } from '@/models/createApplicantModel.ts'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'
import { applicantModel } from '@/models/applicantModel.ts'
import { UpdateApplicantModel } from '@/models/updateApplicantModel.ts'
import { applicantContactRelationshipModelPagedResult } from '@/models/applicantContactRelationshipModelPagedResult.ts'
import { InsertApplicantContactRelationshipModel } from '@/models/insertApplicantContactRelationshipModel.ts'
import { applicantContactRelationshipModel } from '@/models/applicantContactRelationshipModel.ts'

export type UseGetApiApplicantsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'areas'
        | 'department'
        | 'documents'
        | 'negotiators'
        | 'offers'
        | 'offices'
        | 'solicitor'
        | 'source'
      >
    | undefined
  id?: Array<string> | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined
  contactDetail?: Array<string> | undefined
  emailAddresses?: Array<string> | undefined
  furnishing?: Array<'furnished' | 'unfurnished' | 'partFurnished'> | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
    | undefined
  situation?:
    | Array<
        'garden' | 'land' | 'patio' | 'roofTerrace' | 'conservatory' | 'balcony' | 'communalGardens' | 'outsideSpace'
      >
    | undefined
  style?:
    | Array<
        | 'terraced'
        | 'endTerrace'
        | 'detached'
        | 'semiDetached'
        | 'linkDetached'
        | 'mews'
        | 'basement'
        | 'lowerGroundFloor'
        | 'groundFloor'
        | 'firstFloor'
        | 'upperFloor'
        | 'upperFloorWithLift'
        | 'penthouse'
        | 'duplex'
      >
    | undefined
  type?:
    | Array<
        | 'house'
        | 'bungalow'
        | 'flatApartment'
        | 'maisonette'
        | 'land'
        | 'farm'
        | 'cottage'
        | 'studio'
        | 'townhouse'
        | 'developmentPlot'
      >
    | undefined
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | undefined
  address?: string | undefined
  departmentId?: string | undefined
  marketingMode?: Array<'buying' | 'renting'> | undefined
  name?: string | undefined
  nameType?: Array<'surname' | 'initials' | 'full' | 'companyName'> | undefined
  priceFrom?: number | undefined
  priceTo?: number | undefined
  rentFrom?: number | undefined
  rentTo?: number | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined
  bedroomsFrom?: number | undefined
  bedroomsTo?: number | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  hasLastCall?: boolean | undefined
  lastCallFrom?: string | undefined
  lastCallTo?: string | undefined
  nextCallFrom?: string | undefined
  nextCallTo?: string | undefined
  hasNextCall?: boolean | undefined
  metadata?: Array<string> | undefined
  locationOptions?: string | undefined
}
export const getApiApplicantsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  age,
  contactDetail,
  emailAddresses,
  furnishing,
  locality,
  negotiatorId,
  officeId,
  parking,
  situation,
  style,
  type,
  market,
  address,
  departmentId,
  marketingMode,
  name,
  nameType,
  priceFrom,
  priceTo,
  rentFrom,
  rentTo,
  rentFrequency,
  bedroomsFrom,
  bedroomsTo,
  active,
  fromArchive,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  hasLastCall,
  lastCallFrom,
  lastCallTo,
  nextCallFrom,
  nextCallTo,
  hasNextCall,
  metadata,
  locationOptions,
}: UseGetApiApplicantsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, age, contactDetail, emailAddresses, furnishing, locality, negotiatorId, officeId, parking, situation, style, type, market, address, departmentId, marketingMode, name, nameType, priceFrom, priceTo, rentFrom, rentTo, rentFrequency, bedroomsFrom, bedroomsTo, active, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, hasLastCall, lastCallFrom, lastCallTo, nextCallFrom, nextCallTo, hasNextCall, metadata, locationOptions }, options: defaultQuerySerialiserOptions })}`,
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

  return applicantModelPagedResult.parse(data)
}
export const useGetApiApplicants = (args: UseGetApiApplicantsArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateApplicantArgs = { body: CreateApplicantModel }
export const createApplicantFn = async ({ body }: UseCreateApplicantArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
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
export const useCreateApplicant = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApplicantFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    },
  })
}
export type UseGetApiApplicantsIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'areas'
        | 'department'
        | 'documents'
        | 'negotiators'
        | 'offers'
        | 'offices'
        | 'solicitor'
        | 'source'
      >
    | undefined
}
export const getApiApplicantsIdFn = async ({ id, embed }: UseGetApiApplicantsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return applicantModel.parse(data)
}
export const useGetApiApplicantsId = (args: UseGetApiApplicantsIdArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdFn(args),
  })

  return result
}
export type UsePatchApiApplicantsIdArgs = { 'If-Match'?: string; id: string; body: UpdateApplicantModel }
export const patchApiApplicantsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiApplicantsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
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
export const usePatchApiApplicantsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiApplicantsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    },
  })
}
export type UseGetApiApplicantsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiApplicantsIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiApplicantsIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return applicantContactRelationshipModelPagedResult.parse(data)
}
export const useGetApiApplicantsIdRelationships = (args: UseGetApiApplicantsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateApplicantRelationshipArgs = { id: string; body: InsertApplicantContactRelationshipModel }
export const createApplicantRelationshipFn = async ({ id, body }: UseCreateApplicantRelationshipArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${id}/relationships${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
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
export const useCreateApplicantRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApplicantRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    },
  })
}
export type UseGetApiApplicantsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiApplicantsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiApplicantsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return applicantContactRelationshipModel.parse(data)
}
export const useGetApiApplicantsIdRelationshipsRelationshipId = (
  args: UseGetApiApplicantsIdRelationshipsRelationshipIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdRelationshipsRelationshipIdFn(args),
  })

  return result
}
export type UseDeleteApiApplicantsIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const deleteApiApplicantsIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseDeleteApiApplicantsIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, relationshipId }),
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
export const useDeleteApiApplicantsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiApplicantsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    },
  })
}
