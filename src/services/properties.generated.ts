import {
  propertyModelPagedResult,
  CreatePropertyModel,
  propertyModel,
  UpdatePropertyModel,
  certificateModelPagedResult,
  CreateCertificateModel,
  certificateModel,
  UpdateCertificateModel,
  propertyCertificateResponsibilitiesModel,
  UpdateCertificateResponsibilitiesModel,
  keysModelPagedResult,
  CreateKeyModel,
  keysModel,
  keyMovementModelPagedResult,
  CreateKeyMovementModel,
  keyMovementModel,
  CheckInKeyModel,
  propertyCheckModelPagedResult,
  CreatePropertyCheckModel,
  propertyCheckModel,
  UpdatePropertyCheckModel,
  propertyAppraisalModelPagedResult,
  CreatePropertyAppraisalModel,
  propertyAppraisalModel,
  UpdatePropertyAppraisalModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiPropertiesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'area'
        | 'certificates'
        | 'department'
        | 'documents'
        | 'images'
        | 'keys'
        | 'landlord'
        | 'negotiator'
        | 'offers'
        | 'offices'
        | 'tenancies'
        | 'vendor'
      >
    | undefined
  id?: Array<string> | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined
  agentRole?:
    | Array<
        'managed' | 'rentCollection' | 'collectFirstPayment' | 'collectRentToDate' | 'lettingOnly' | 'introducingTenant'
      >
    | undefined
  areaId?: Array<string> | undefined
  excludeAreaId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  lettingStatus?:
    | Array<
        | 'valuation'
        | 'toLet'
        | 'toLetUnavailable'
        | 'underOffer'
        | 'underOfferUnavailable'
        | 'arrangingTenancyUnavailable'
        | 'arrangingTenancy'
        | 'tenancyCurrentUnavailable'
        | 'tenancyCurrent'
        | 'tenancyFinished'
        | 'tenancyCancelled'
        | 'sold'
        | 'letByOtherAgent'
        | 'letPrivately'
        | 'provisional'
        | 'withdrawn'
      >
    | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined
  marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | undefined
  masterId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
    | undefined
  sellingStatus?:
    | Array<
        | 'preAppraisal'
        | 'valuation'
        | 'paidValuation'
        | 'forSale'
        | 'forSaleUnavailable'
        | 'underOffer'
        | 'underOfferUnavailable'
        | 'reserved'
        | 'exchanged'
        | 'completed'
        | 'soldExternally'
        | 'withdrawn'
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
  countryId?: string | undefined
  departmentId?: string | undefined
  bedroomsFrom?: number | undefined
  bedroomsTo?: number | undefined
  priceFrom?: number | undefined
  priceTo?: number | undefined
  priceFiltersCurrency?: string | undefined
  rentFrom?: number | undefined
  rentTo?: number | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined
  internetAdvertising?: boolean | undefined
  isExternal?: boolean | undefined
  fromArchive?: boolean | undefined
  availableFrom?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiPropertiesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  age,
  agentRole,
  areaId,
  excludeAreaId,
  landlordId,
  lettingStatus,
  locality,
  marketingMode,
  masterId,
  negotiatorId,
  officeId,
  parking,
  sellingStatus,
  situation,
  style,
  type,
  market,
  address,
  countryId,
  departmentId,
  bedroomsFrom,
  bedroomsTo,
  priceFrom,
  priceTo,
  priceFiltersCurrency,
  rentFrom,
  rentTo,
  rentFrequency,
  internetAdvertising,
  isExternal,
  fromArchive,
  availableFrom,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
  extrasField,
}: UseGetApiPropertiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, age, agentRole, areaId, excludeAreaId, landlordId, lettingStatus, locality, marketingMode, masterId, negotiatorId, officeId, parking, sellingStatus, situation, style, type, market, address, countryId, departmentId, bedroomsFrom, bedroomsTo, priceFrom, priceTo, priceFiltersCurrency, rentFrom, rentTo, rentFrequency, internetAdvertising, isExternal, fromArchive, availableFrom, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField }, options: defaultQuerySerialiserOptions })}`,
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

  return propertyModelPagedResult.parse(data)
}
export const useGetApiProperties = (args: UseGetApiPropertiesArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreatePropertyArgs = { body: CreatePropertyModel }
export const createPropertyFn = async ({ body }: UseCreatePropertyArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateProperty = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'area'
        | 'certificates'
        | 'department'
        | 'documents'
        | 'images'
        | 'keys'
        | 'landlord'
        | 'negotiator'
        | 'offers'
        | 'offices'
        | 'tenancies'
        | 'vendor'
      >
    | undefined
  extrasField?: Array<string> | undefined
}
export const getApiPropertiesIdFn = async ({ id, embed, extrasField }: UseGetApiPropertiesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return propertyModel.parse(data)
}
export const useGetApiPropertiesId = ({ id, embed, extrasField }: UseGetApiPropertiesIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id, embed, extrasField],
    queryFn: () => getApiPropertiesIdFn({ id, embed, extrasField }),
  })

  return result
}
export type UsePatchApiPropertiesIdArgs = { 'If-Match'?: string; id: string; body: UpdatePropertyModel }
export const patchApiPropertiesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiPropertiesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdCertificatesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | undefined
}
export const getApiPropertiesIdCertificatesFn = async ({
  id,
  pageSize,
  pageNumber,
  category,
}: UseGetApiPropertiesIdCertificatesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates${querySerialiser({ args: { pageSize, pageNumber, category }, options: defaultQuerySerialiserOptions })}`,
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

  return certificateModelPagedResult.parse(data)
}
export const useGetApiPropertiesIdCertificates = (args: UseGetApiPropertiesIdCertificatesArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreatePropertyCertificateArgs = { id: string; body: CreateCertificateModel }
export const createPropertyCertificateFn = async ({ id, body }: UseCreatePropertyCertificateArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreatePropertyCertificate = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyCertificateFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdCertificatesCertificateIdArgs = { id: string; certificateId: string }
export const getApiPropertiesIdCertificatesCertificateIdFn = async ({
  id,
  certificateId,
}: UseGetApiPropertiesIdCertificatesCertificateIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates/${certificateId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return certificateModel.parse(data)
}
export const useGetApiPropertiesIdCertificatesCertificateId = ({
  id,
  certificateId,
}: UseGetApiPropertiesIdCertificatesCertificateIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id, certificateId],
    queryFn: () => getApiPropertiesIdCertificatesCertificateIdFn({ id, certificateId }),
  })

  return result
}
export type UsePatchApiPropertiesIdCertificatesCertificateIdArgs = {
  'If-Match'?: string
  id: string
  certificateId: string
  body: UpdateCertificateModel
}
export const patchApiPropertiesIdCertificatesCertificateIdFn = async ({
  'If-Match': IfMatch,
  id,
  certificateId,
  body,
}: UsePatchApiPropertiesIdCertificatesCertificateIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates/${certificateId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdCertificatesCertificateId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdCertificatesCertificateIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdCertificatesResponsibilitiesArgs = { id: string }
export const getApiPropertiesIdCertificatesResponsibilitiesFn = async ({
  id,
}: UseGetApiPropertiesIdCertificatesResponsibilitiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates/responsibilities${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return propertyCertificateResponsibilitiesModel.parse(data)
}
export const useGetApiPropertiesIdCertificatesResponsibilities = ({
  id,
}: UseGetApiPropertiesIdCertificatesResponsibilitiesArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id],
    queryFn: () => getApiPropertiesIdCertificatesResponsibilitiesFn({ id }),
  })

  return result
}
export type UsePatchApiPropertiesIdCertificatesResponsibilitiesArgs = {
  'If-Match'?: string
  id: string
  body: UpdateCertificateResponsibilitiesModel
}
export const patchApiPropertiesIdCertificatesResponsibilitiesFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiPropertiesIdCertificatesResponsibilitiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates/responsibilities${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdCertificatesResponsibilities = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdCertificatesResponsibilitiesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdKeysArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiPropertiesIdKeysFn = async ({ id, pageSize, pageNumber }: UseGetApiPropertiesIdKeysArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return keysModelPagedResult.parse(data)
}
export const useGetApiPropertiesIdKeys = (args: UseGetApiPropertiesIdKeysArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreatePropertyKeyArgs = { id: string; body: CreateKeyModel }
export const createPropertyKeyFn = async ({ id, body }: UseCreatePropertyKeyArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreatePropertyKey = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyKeyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdKeysKeyIdArgs = { id: string; keyId: string }
export const getApiPropertiesIdKeysKeyIdFn = async ({ id, keyId }: UseGetApiPropertiesIdKeysKeyIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return keysModel.parse(data)
}
export const useGetApiPropertiesIdKeysKeyId = ({ id, keyId }: UseGetApiPropertiesIdKeysKeyIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id, keyId],
    queryFn: () => getApiPropertiesIdKeysKeyIdFn({ id, keyId }),
  })

  return result
}
export type UseGetApiPropertiesIdKeysKeyIdMovementsArgs = {
  id: string
  keyId: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiPropertiesIdKeysKeyIdMovementsFn = async ({
  id,
  keyId,
  pageSize,
  pageNumber,
}: UseGetApiPropertiesIdKeysKeyIdMovementsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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

  return keyMovementModelPagedResult.parse(data)
}
export const useGetApiPropertiesIdKeysKeyIdMovements = (args: UseGetApiPropertiesIdKeysKeyIdMovementsArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreatePropertyKeyMovementArgs = { id: string; keyId: string; body: CreateKeyMovementModel }
export const createPropertyKeyMovementFn = async ({ id, keyId, body }: UseCreatePropertyKeyMovementArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreatePropertyKeyMovement = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyKeyMovementFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs = { id: string; keyId: string; movementId: string }
export const getApiPropertiesIdKeysKeyIdMovementsMovementIdFn = async ({
  id,
  keyId,
  movementId,
}: UseGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements/${movementId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return keyMovementModel.parse(data)
}
export const useGetApiPropertiesIdKeysKeyIdMovementsMovementId = ({
  id,
  keyId,
  movementId,
}: UseGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id, keyId, movementId],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsMovementIdFn({ id, keyId, movementId }),
  })

  return result
}
export type UseUpdatePropertyKeyMovementArgs = { id: string; keyId: string; movementId: string; body: CheckInKeyModel }
export const updatePropertyKeyMovementFn = async ({
  id,
  keyId,
  movementId,
  body,
}: UseUpdatePropertyKeyMovementArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements/${movementId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
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
export const useUpdatePropertyKeyMovement = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updatePropertyKeyMovementFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdChecksArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
}
export const getApiPropertiesIdChecksFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
}: UseGetApiPropertiesIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks${querySerialiser({ args: { pageSize, pageNumber, type }, options: defaultQuerySerialiserOptions })}`,
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

  return propertyCheckModelPagedResult.parse(data)
}
export const useGetApiPropertiesIdChecks = (args: UseGetApiPropertiesIdChecksArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreatePropertyCheckArgs = { id: string; body: CreatePropertyCheckModel }
export const createPropertyCheckFn = async ({ id, body }: UseCreatePropertyCheckArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreatePropertyCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdChecksCheckIdArgs = { id: string; checkId: string }
export const getApiPropertiesIdChecksCheckIdFn = async ({ id, checkId }: UseGetApiPropertiesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return propertyCheckModel.parse(data)
}
export const useGetApiPropertiesIdChecksCheckId = ({ id, checkId }: UseGetApiPropertiesIdChecksCheckIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id, checkId],
    queryFn: () => getApiPropertiesIdChecksCheckIdFn({ id, checkId }),
  })

  return result
}
export type UseDeleteApiPropertiesIdChecksCheckIdArgs = { id: string; checkId: string }
export const deleteApiPropertiesIdChecksCheckIdFn = async ({
  id,
  checkId,
}: UseDeleteApiPropertiesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useDeleteApiPropertiesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiPropertiesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UsePatchApiPropertiesIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  checkId: string
  body: UpdatePropertyCheckModel
}
export const patchApiPropertiesIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  checkId,
  body,
}: UsePatchApiPropertiesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesCertificatesArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  expiryDateFrom?: string | undefined
  expiryDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  categories?: Array<string> | undefined
  typeIds?: Array<string> | undefined
  propertyIds?: Array<string> | undefined
  embed?: Array<'property'> | undefined
}
export const getApiPropertiesCertificatesFn = async ({
  pageNumber,
  pageSize,
  sortBy,
  expiryDateFrom,
  expiryDateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  categories,
  typeIds,
  propertyIds,
  embed,
}: UseGetApiPropertiesCertificatesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/certificates${querySerialiser({ args: { pageNumber, pageSize, sortBy, expiryDateFrom, expiryDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, categories, typeIds, propertyIds, embed }, options: defaultQuerySerialiserOptions })}`,
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

  return certificateModelPagedResult.parse(data)
}
export const useGetApiPropertiesCertificates = (args: UseGetApiPropertiesCertificatesArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesCertificatesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiPropertiesIdAppraisalsArgs = {
  id: string
  pageNumber?: number | undefined
  pageSize?: number | undefined
}
export const getApiPropertiesIdAppraisalsFn = async ({
  id,
  pageNumber,
  pageSize,
}: UseGetApiPropertiesIdAppraisalsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals${querySerialiser({ args: { pageNumber, pageSize }, options: defaultQuerySerialiserOptions })}`,
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

  return propertyAppraisalModelPagedResult.parse(data)
}
export const useGetApiPropertiesIdAppraisals = (args: UseGetApiPropertiesIdAppraisalsArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdAppraisalsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreatePropertyAppraisalArgs = { id: string; body: CreatePropertyAppraisalModel }
export const createPropertyAppraisalFn = async ({ id, body }: UseCreatePropertyAppraisalArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreatePropertyAppraisal = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyAppraisalFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UseGetApiPropertiesIdAppraisalsAppraisalIdArgs = { id: string; appraisalId: string }
export const getApiPropertiesIdAppraisalsAppraisalIdFn = async ({
  id,
  appraisalId,
}: UseGetApiPropertiesIdAppraisalsAppraisalIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals/${appraisalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return propertyAppraisalModel.parse(data)
}
export const useGetApiPropertiesIdAppraisalsAppraisalId = ({
  id,
  appraisalId,
}: UseGetApiPropertiesIdAppraisalsAppraisalIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties', id, appraisalId],
    queryFn: () => getApiPropertiesIdAppraisalsAppraisalIdFn({ id, appraisalId }),
  })

  return result
}
export type UsePatchApiPropertiesIdAppraisalsAppraisalIdArgs = {
  'If-Match'?: string
  id: string
  appraisalId: string
  body: UpdatePropertyAppraisalModel
}
export const patchApiPropertiesIdAppraisalsAppraisalIdFn = async ({
  'If-Match': IfMatch,
  id,
  appraisalId,
  body,
}: UsePatchApiPropertiesIdAppraisalsAppraisalIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals/${appraisalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiPropertiesIdAppraisalsAppraisalId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdAppraisalsAppraisalIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
