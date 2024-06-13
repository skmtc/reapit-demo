import { CreatePropertyModel } from '@/schemas/createPropertyModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateCertificateModel } from '@/schemas/createCertificateModel.generated.tsx'
import { CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'
import { CreateKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'
import { CheckInKeyModel } from '@/schemas/checkInKeyModel.generated.tsx'
import { CreatePropertyCheckModel } from '@/schemas/createPropertyCheckModel.generated.tsx'
import { CreatePropertyAppraisalModel } from '@/schemas/createPropertyAppraisalModel.generated.tsx'
import { propertyModelPagedResult } from '@/schemas/propertyModelPagedResult.generated.tsx'
import { certificateModelPagedResult } from '@/schemas/certificateModelPagedResult.generated.tsx'
import { keysModelPagedResult } from '@/schemas/keysModelPagedResult.generated.tsx'
import { keyMovementModelPagedResult } from '@/schemas/keyMovementModelPagedResult.generated.tsx'
import { propertyCheckModelPagedResult } from '@/schemas/propertyCheckModelPagedResult.generated.tsx'
import { propertyAppraisalModelPagedResult } from '@/schemas/propertyAppraisalModelPagedResult.generated.tsx'

export type CreateApiPropertiesFnArgs = { body: CreatePropertyModel }
export const createApiPropertiesFn = async ({ body }: CreateApiPropertiesFnArgs) => {
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
export const useCreateApiProperties = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiPropertiesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type CreateApiPropertiesIdCertificatesFnArgs = { id: string; body: CreateCertificateModel }
export const createApiPropertiesIdCertificatesFn = async ({ id, body }: CreateApiPropertiesIdCertificatesFnArgs) => {
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
export const useCreateApiPropertiesIdCertificates = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiPropertiesIdCertificatesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type CreateApiPropertiesIdKeysFnArgs = { id: string; body: CreateKeyModel }
export const createApiPropertiesIdKeysFn = async ({ id, body }: CreateApiPropertiesIdKeysFnArgs) => {
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
export const useCreateApiPropertiesIdKeys = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiPropertiesIdKeysFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type CreateApiPropertiesIdKeysKeyIdMovementsFnArgs = { id: string; keyId: string; body: CreateKeyMovementModel }
export const createApiPropertiesIdKeysKeyIdMovementsFn = async ({
  id,
  keyId,
  body,
}: CreateApiPropertiesIdKeysKeyIdMovementsFnArgs) => {
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
export const useCreateApiPropertiesIdKeysKeyIdMovements = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiPropertiesIdKeysKeyIdMovementsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type UpdateApiPropertiesIdKeysKeyIdMovementsMovementIdFnArgs = {
  id: string
  keyId: string
  movementId: string
  body: CheckInKeyModel
}
export const updateApiPropertiesIdKeysKeyIdMovementsMovementIdFn = async ({
  id,
  keyId,
  movementId,
  body,
}: UpdateApiPropertiesIdKeysKeyIdMovementsMovementIdFnArgs) => {
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
export const useUpdateApiPropertiesIdKeysKeyIdMovementsMovementId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateApiPropertiesIdKeysKeyIdMovementsMovementIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type CreateApiPropertiesIdChecksFnArgs = { id: string; body: CreatePropertyCheckModel }
export const createApiPropertiesIdChecksFn = async ({ id, body }: CreateApiPropertiesIdChecksFnArgs) => {
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
export const useCreateApiPropertiesIdChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiPropertiesIdChecksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type CreateApiPropertiesIdAppraisalsFnArgs = { id: string; body: CreatePropertyAppraisalModel }
export const createApiPropertiesIdAppraisalsFn = async ({ id, body }: CreateApiPropertiesIdAppraisalsFnArgs) => {
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
export const useCreateApiPropertiesIdAppraisals = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiPropertiesIdAppraisalsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
export type GetApiPropertiesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
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
    | null
    | undefined
  id?: Array<string> | null | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | null | undefined
  agentRole?:
    | Array<
        'managed' | 'rentCollection' | 'collectFirstPayment' | 'collectRentToDate' | 'lettingOnly' | 'introducingTenant'
      >
    | null
    | undefined
  areaId?: Array<string> | null | undefined
  excludeAreaId?: Array<string> | null | undefined
  landlordId?: Array<string> | null | undefined
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
    | null
    | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | null | undefined
  marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | null | undefined
  masterId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
    | null
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
    | null
    | undefined
  situation?:
    | Array<
        'garden' | 'land' | 'patio' | 'roofTerrace' | 'conservatory' | 'balcony' | 'communalGardens' | 'outsideSpace'
      >
    | null
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
    | null
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
    | null
    | undefined
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | null | undefined
  address?: string | null | undefined
  countryId?: string | null | undefined
  departmentId?: string | null | undefined
  bedroomsFrom?: number | null | undefined
  bedroomsTo?: number | null | undefined
  priceFrom?: number | null | undefined
  priceTo?: number | null | undefined
  priceFiltersCurrency?: string | null | undefined
  rentFrom?: number | null | undefined
  rentTo?: number | null | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | null | undefined
  internetAdvertising?: boolean | null | undefined
  isExternal?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  availableFrom?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
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
}: GetApiPropertiesFnArgs) => {
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
export const useGetApiProperties = (args: GetApiPropertiesFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiPropertiesIdCertificatesFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | null | undefined
}
export const getApiPropertiesIdCertificatesFn = async ({
  id,
  pageSize,
  pageNumber,
  category,
}: GetApiPropertiesIdCertificatesFnArgs) => {
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
export const useGetApiPropertiesIdCertificates = (args: GetApiPropertiesIdCertificatesFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiPropertiesIdKeysFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiPropertiesIdKeysFn = async ({ id, pageSize, pageNumber }: GetApiPropertiesIdKeysFnArgs) => {
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
export const useGetApiPropertiesIdKeys = (args: GetApiPropertiesIdKeysFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiPropertiesIdKeysKeyIdMovementsFnArgs = {
  id: string
  keyId: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiPropertiesIdKeysKeyIdMovementsFn = async ({
  id,
  keyId,
  pageSize,
  pageNumber,
}: GetApiPropertiesIdKeysKeyIdMovementsFnArgs) => {
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
export const useGetApiPropertiesIdKeysKeyIdMovements = (args: GetApiPropertiesIdKeysKeyIdMovementsFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiPropertiesIdChecksFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  type?: string | null | undefined
}
export const getApiPropertiesIdChecksFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
}: GetApiPropertiesIdChecksFnArgs) => {
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
export const useGetApiPropertiesIdChecks = (args: GetApiPropertiesIdChecksFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiPropertiesCertificatesFnArgs = {
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
  sortBy?: string | null | undefined
  expiryDateFrom?: string | null | undefined
  expiryDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  categories?: Array<string> | null | undefined
  typeIds?: Array<string> | null | undefined
  propertyIds?: Array<string> | null | undefined
  embed?: Array<'property'> | null | undefined
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
}: GetApiPropertiesCertificatesFnArgs) => {
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
export const useGetApiPropertiesCertificates = (args: GetApiPropertiesCertificatesFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesCertificatesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiPropertiesIdAppraisalsFnArgs = {
  id: string
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
}
export const getApiPropertiesIdAppraisalsFn = async ({
  id,
  pageNumber,
  pageSize,
}: GetApiPropertiesIdAppraisalsFnArgs) => {
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
export const useGetApiPropertiesIdAppraisals = (args: GetApiPropertiesIdAppraisalsFnArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdAppraisalsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
