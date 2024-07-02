import { applicantModelPagedResult } from '@/schemas/applicantModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateApplicantModel } from '@/schemas/createApplicantModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiApplicantsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
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
    | null
    | undefined
  id?: Array<string> | null | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | null | undefined
  contactDetail?: Array<string> | null | undefined
  emailAddresses?: Array<string> | null | undefined
  furnishing?: Array<'furnished' | 'unfurnished' | 'partFurnished'> | null | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
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
  departmentId?: string | null | undefined
  marketingMode?: Array<'buying' | 'renting'> | null | undefined
  name?: string | null | undefined
  nameType?: Array<'surname' | 'initials' | 'full' | 'companyName'> | null | undefined
  priceFrom?: number | null | undefined
  priceTo?: number | null | undefined
  rentFrom?: number | null | undefined
  rentTo?: number | null | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | null | undefined
  bedroomsFrom?: number | null | undefined
  bedroomsTo?: number | null | undefined
  active?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  hasLastCall?: boolean | null | undefined
  lastCallFrom?: string | null | undefined
  lastCallTo?: string | null | undefined
  nextCallFrom?: string | null | undefined
  nextCallTo?: string | null | undefined
  hasNextCall?: boolean | null | undefined
  metadata?: Array<string> | null | undefined
  locationOptions?: string | null | undefined
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
}: GetApiApplicantsFnArgs) => {
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
export const useGetApiApplicants = (args: GetApiApplicantsFnArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type CreateApiApplicantsFnArgs = { body: CreateApplicantModel }
export const createApiApplicantsFn = async ({ body }: CreateApiApplicantsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/applicants/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateApiApplicants = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApiApplicantsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    },
  })
}
