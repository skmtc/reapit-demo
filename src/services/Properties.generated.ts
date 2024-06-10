import { propertyModelPagedResult } from '@/schemas/propertyModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreatePropertyModel } from '@/schemas/createPropertyModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

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
export type PostApiPropertiesFnArgs = { body: CreatePropertyModel }
export const postApiPropertiesFn = async ({ body }: PostApiPropertiesFnArgs) => {
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
export const usePostApiProperties = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertiesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    },
  })
}
