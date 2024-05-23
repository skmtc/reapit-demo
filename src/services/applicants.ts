import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiApplicantsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
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
    | null
  id?: Array<string> | undefined | null
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined | null
  contactDetail?: Array<string> | undefined | null
  emailAddresses?: Array<string> | undefined | null
  furnishing?: Array<'furnished' | 'unfurnished' | 'partFurnished'> | undefined | null
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
    | undefined
    | null
  situation?:
    | Array<
        'garden' | 'land' | 'patio' | 'roofTerrace' | 'conservatory' | 'balcony' | 'communalGardens' | 'outsideSpace'
      >
    | undefined
    | null
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
    | null
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
    | null
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | undefined | null
  address?: string | undefined | null
  departmentId?: string | undefined | null
  marketingMode?: Array<'buying' | 'renting'> | undefined | null
  name?: string | undefined | null
  nameType?: Array<'surname' | 'initials' | 'full' | 'companyName'> | undefined | null
  priceFrom?: number | undefined | null
  priceTo?: number | undefined | null
  rentFrom?: number | undefined | null
  rentTo?: number | undefined | null
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined | null
  bedroomsFrom?: number | undefined | null
  bedroomsTo?: number | undefined | null
  active?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  hasLastCall?: boolean | undefined | null
  lastCallFrom?: string | undefined | null
  lastCallTo?: string | undefined | null
  nextCallFrom?: string | undefined | null
  nextCallTo?: string | undefined | null
  hasNextCall?: boolean | undefined | null
  metadata?: Array<string> | undefined | null
  locationOptions?: string | undefined | null
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            marketingMode: z.string().nullable().optional(),
            currency: z.string().nullable().optional(),
            active: z.boolean().nullable().optional(),
            notes: z.string().nullable().optional(),
            sellingStatus: z.string().nullable().optional(),
            sellingPosition: z.string().nullable().optional(),
            statusId: z.string().nullable().optional(),
            lastCall: z.string().nullable().optional(),
            nextCall: z.string().nullable().optional(),
            departmentId: z.string().nullable().optional(),
            solicitorId: z.string().nullable().optional(),
            potentialClient: z.boolean().nullable().optional(),
            type: z.array(z.string()).nullable().optional(),
            style: z.array(z.string()).nullable().optional(),
            situation: z.array(z.string()).nullable().optional(),
            parking: z.array(z.string()).nullable().optional(),
            age: z.array(z.string()).nullable().optional(),
            locality: z.array(z.string()).nullable().optional(),
            specialFeatures: z.array(z.string()).nullable().optional(),
            unmappedRequirements: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            bedroomsMin: z.number().int().nullable().optional(),
            bedroomsMax: z.number().int().nullable().optional(),
            receptionsMin: z.number().int().nullable().optional(),
            receptionsMax: z.number().int().nullable().optional(),
            bathroomsMin: z.number().int().nullable().optional(),
            bathroomsMax: z.number().int().nullable().optional(),
            parkingSpacesMin: z.number().int().nullable().optional(),
            parkingSpacesMax: z.number().int().nullable().optional(),
            locationType: z.string().nullable().optional(),
            locationOptions: z.array(z.string()).nullable().optional(),
            archivedOn: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            buying: z
              .object({
                priceFrom: z.number().int().nullable().optional(),
                priceTo: z.number().int().nullable().optional(),
                decoration: z.array(z.string()).nullable().optional(),
                reasonId: z.string().nullable().optional(),
                positionId: z.string().nullable().optional(),
                tenure: z.array(z.string()).nullable().optional(),
                mortgageExpiry: z.string().nullable().optional(),
                leaseRemaining: z
                  .object({ min: z.number().int().nullable().optional(), max: z.number().int().nullable().optional() })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
            renting: z
              .object({
                moveDate: z.string().nullable().optional(),
                term: z.string().nullable().optional(),
                rentFrom: z.number().nullable().optional(),
                rentTo: z.number().nullable().optional(),
                rentFrequency: z.string().nullable().optional(),
                furnishing: z.array(z.string()).nullable().optional(),
                positionId: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            externalArea: z
              .object({
                type: z.string().nullable().optional(),
                amountFrom: z.number().nullable().optional(),
                amountTo: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            internalArea: z
              .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
              .nullable()
              .optional(),
            source: z
              .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
              .nullable()
              .optional(),
            commercial: z
              .object({
                useClass: z.array(z.string()).nullable().optional(),
                floorLevel: z.array(z.string()).nullable().optional(),
              })
              .nullable()
              .optional(),
            regional: z
              .object({
                ggy: z
                  .object({ market: z.array(z.string()).nullable().optional() })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
            officeIds: z.array(z.string()).nullable().optional(),
            negotiatorIds: z.array(z.string()).nullable().optional(),
            related: z
              .array(
                z.object({
                  id: z.string().nullable().optional(),
                  name: z.string().nullable().optional(),
                  title: z.string().nullable().optional(),
                  forename: z.string().nullable().optional(),
                  surname: z.string().nullable().optional(),
                  dateOfBirth: z.string().nullable().optional(),
                  type: z.string().nullable().optional(),
                  homePhone: z.string().nullable().optional(),
                  workPhone: z.string().nullable().optional(),
                  mobilePhone: z.string().nullable().optional(),
                  email: z.string().nullable().optional(),
                  marketingConsent: z.string().nullable().optional(),
                  fromArchive: z.boolean().nullable().optional(),
                  primaryAddress: z
                    .object({
                      buildingName: z.string().nullable().optional(),
                      buildingNumber: z.string().nullable().optional(),
                      line1: z.string().nullable().optional(),
                      line2: z.string().nullable().optional(),
                      line3: z.string().nullable().optional(),
                      line4: z.string().nullable().optional(),
                      postcode: z.string().nullable().optional(),
                      countryId: z.string().nullable().optional(),
                    })
                    .nullable()
                    .optional(),
                  additionalContactDetails: z
                    .array(
                      z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }),
                    )
                    .nullable()
                    .optional(),
                }),
              )
              .nullable()
              .optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiApplicants = (args: UseGetApiApplicantsArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateApplicantArgs = {
  body: /** Request body used to create a new applicant */
  {
    marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ string
    currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
    string | undefined | null
    active?: /** A flag determining whether or not the applicant is actively looking for a property */
    boolean | undefined | null
    notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined | null
    statusId?: /** The status id of the applicant */ string | undefined | null
    sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    string | undefined | null
    sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
    string | undefined | null
    lastCall?: /** The date when the applicant was last contacted */ string | undefined | null
    nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined | null
    departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
    solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined | null
    potentialClient?: /** A flag determining whether or not the applicant is a potential client */
    boolean | undefined | null
    type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    bedroomsMin?: /** The minimum number of bedrooms the applicant requires */ number | undefined | null
    bedroomsMax?: /** The maximum number of bedrooms the applicant requires */ number | undefined | null
    receptionsMin?: /** The minimum number of reception rooms the applicant requires */ number | undefined | null
    receptionsMax?: /** The maximum number of reception rooms the applicant requires */ number | undefined | null
    bathroomsMin?: /** The minimum number of bathrooms the applicant requires */ number | undefined | null
    bathroomsMax?: /** The maximum number of bathrooms the applicant requires */ number | undefined | null
    parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */ number | undefined | null
    parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */ number | undefined | null
    locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined | null
    locationOptions?: /** The applicant's location options */ Array<string> | undefined | null
    buying?: /** The details specific to applicants with a marketingMode of buying */
    | {
          reasonId?: /** The identifier of the applicant's buying reason */ string | undefined | null
          positionId?: /** The identifier of the applicant's selling position */ string | undefined | null
          priceFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
          number | undefined | null
          priceTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
          number | undefined | null
          decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
          Array<string> | undefined | null
          tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
          Array<string> | undefined | null
          mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */
          string | undefined | null
          leaseRemaining?: /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
          | {
                min?: /** The minimum number of years that must remain on the lease of a leasehold property */
                number | undefined | null
                max?: /** The maximum number of years that must remain on the lease of a leasehold property */
                number | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    renting?: /** The details specific to applicants with a marketingMode of renting */
    | {
          moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined | null
          term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined | null
          rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
          number | undefined | null
          rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
          number | undefined | null
          rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
          string | undefined | null
          furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
          Array<string> | undefined | null
          positionId?: /** The identifier of the applicant's renting position */ string | undefined | null
        }
      | undefined
      | null
    externalArea?: /** The applicant's outdoor space requirements */
    | {
          type?: /** The unit of area that each amount corresponds to (acres/hectares) */ string | undefined | null
          amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */
          number | undefined | null
          amountTo?: /** The maximum unit value of outside space that the applicant is looking for */
          number | undefined | null
        }
      | undefined
      | null
    internalArea?: /** The applicant's indoor space requirements */
    | {
          type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
          string | undefined | null
          amount?: /** The unit value of inside space that the applicant is looking for */ number | undefined | null
        }
      | undefined
      | null
    source?: /** An applicant's source of enquiry */
    | {
          id?: /** The unique identifier of the applicant's source */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    regional?: /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          ggy?: /** Details of regional information specific to Guernsey */
          | {
                market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
                Array<string> | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    Array<string>
    related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a relationship between an applicant and a contact or company */
    {
      associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
      associatedType?: /** The type of relationship to create (contact/company) */ string | undefined | null
    }>
    metadata?: /** App specific metadata to set against the applicant */
    Record<string, Record<string, never>> | undefined | null
  }
}
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
    | null
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

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      marketingMode: z.string().nullable().optional(),
      currency: z.string().nullable().optional(),
      active: z.boolean().nullable().optional(),
      notes: z.string().nullable().optional(),
      sellingStatus: z.string().nullable().optional(),
      sellingPosition: z.string().nullable().optional(),
      statusId: z.string().nullable().optional(),
      lastCall: z.string().nullable().optional(),
      nextCall: z.string().nullable().optional(),
      departmentId: z.string().nullable().optional(),
      solicitorId: z.string().nullable().optional(),
      potentialClient: z.boolean().nullable().optional(),
      type: z.array(z.string()).nullable().optional(),
      style: z.array(z.string()).nullable().optional(),
      situation: z.array(z.string()).nullable().optional(),
      parking: z.array(z.string()).nullable().optional(),
      age: z.array(z.string()).nullable().optional(),
      locality: z.array(z.string()).nullable().optional(),
      specialFeatures: z.array(z.string()).nullable().optional(),
      unmappedRequirements: z
        .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      bedroomsMin: z.number().int().nullable().optional(),
      bedroomsMax: z.number().int().nullable().optional(),
      receptionsMin: z.number().int().nullable().optional(),
      receptionsMax: z.number().int().nullable().optional(),
      bathroomsMin: z.number().int().nullable().optional(),
      bathroomsMax: z.number().int().nullable().optional(),
      parkingSpacesMin: z.number().int().nullable().optional(),
      parkingSpacesMax: z.number().int().nullable().optional(),
      locationType: z.string().nullable().optional(),
      locationOptions: z.array(z.string()).nullable().optional(),
      archivedOn: z.string().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      buying: z
        .object({
          priceFrom: z.number().int().nullable().optional(),
          priceTo: z.number().int().nullable().optional(),
          decoration: z.array(z.string()).nullable().optional(),
          reasonId: z.string().nullable().optional(),
          positionId: z.string().nullable().optional(),
          tenure: z.array(z.string()).nullable().optional(),
          mortgageExpiry: z.string().nullable().optional(),
          leaseRemaining: z
            .object({ min: z.number().int().nullable().optional(), max: z.number().int().nullable().optional() })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
      renting: z
        .object({
          moveDate: z.string().nullable().optional(),
          term: z.string().nullable().optional(),
          rentFrom: z.number().nullable().optional(),
          rentTo: z.number().nullable().optional(),
          rentFrequency: z.string().nullable().optional(),
          furnishing: z.array(z.string()).nullable().optional(),
          positionId: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      externalArea: z
        .object({
          type: z.string().nullable().optional(),
          amountFrom: z.number().nullable().optional(),
          amountTo: z.number().nullable().optional(),
        })
        .nullable()
        .optional(),
      internalArea: z
        .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
        .nullable()
        .optional(),
      source: z
        .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
        .nullable()
        .optional(),
      commercial: z
        .object({
          useClass: z.array(z.string()).nullable().optional(),
          floorLevel: z.array(z.string()).nullable().optional(),
        })
        .nullable()
        .optional(),
      regional: z
        .object({
          ggy: z
            .object({ market: z.array(z.string()).nullable().optional() })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
      officeIds: z.array(z.string()).nullable().optional(),
      negotiatorIds: z.array(z.string()).nullable().optional(),
      related: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            title: z.string().nullable().optional(),
            forename: z.string().nullable().optional(),
            surname: z.string().nullable().optional(),
            dateOfBirth: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            marketingConsent: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            primaryAddress: z
              .object({
                buildingName: z.string().nullable().optional(),
                buildingNumber: z.string().nullable().optional(),
                line1: z.string().nullable().optional(),
                line2: z.string().nullable().optional(),
                line3: z.string().nullable().optional(),
                line4: z.string().nullable().optional(),
                postcode: z.string().nullable().optional(),
                countryId: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
          }),
        )
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiApplicantsId = (args: UseGetApiApplicantsIdArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdFn(args),
  })

  return result
}
export type UsePatchApiApplicantsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing applicant */
  {
    marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
    string | undefined | null
    currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
    string | undefined | null
    active?: /** A flag determining whether or not the applicant is actively looking for a property */
    boolean | undefined | null
    notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined | null
    statusId?: /** The status id of the applicant */ string | undefined | null
    sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    string | undefined | null
    sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
    string | undefined | null
    lastCall?: /** The date when the applicant was last contacted */ string | undefined | null
    nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined | null
    departmentId?: /** The unique identifier of the department that the applicant requirements are associated with. The applicant will only match to properties with the same value */
    string | undefined | null
    solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined | null
    potentialClient?: /** A flag determining whether or not the applicant is a potential client */
    boolean | undefined | null
    type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    bedroomsMin?: /** The minimum number of bedrooms the applicant requires */ number | undefined | null
    bedroomsMax?: /** The maximum number of bedrooms the applicant requires */ number | undefined | null
    receptionsMin?: /** The minimum number of reception rooms the applicant requires */ number | undefined | null
    receptionsMax?: /** The maximum number of reception rooms the applicant requires */ number | undefined | null
    bathroomsMin?: /** The minimum number of bathrooms the applicant requires */ number | undefined | null
    bathroomsMax?: /** The maximum number of bathrooms the applicant requires */ number | undefined | null
    parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */ number | undefined | null
    parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */ number | undefined | null
    locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined | null
    locationOptions?: /** The applicant's location options */ Array<string> | undefined | null
    buying?: /** The details specific to applicants with a marketingMode of buying */
    | {
          reasonId?: /** The identifier of the applicant's buying reason */ string | undefined | null
          positionId?: /** The identifier of the applicant's selling position */ string | undefined | null
          priceFrom?: /** The lower bound of the applicant's budget */ number | undefined | null
          priceTo?: /** The upper bound of the applicant's budget */ number | undefined | null
          decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
          Array<string> | undefined | null
          tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
          Array<string> | undefined | null
          mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */
          string | undefined | null
          leaseRemaining?: /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
          | {
                min?: /** The minimum number of years that must remain on the lease of a leasehold property */
                number | undefined | null
                max?: /** The maximum number of years that must remain on the lease of a leasehold property */
                number | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    renting?: /** The details specific to applicants with a marketingMode of renting */
    | {
          moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined | null
          term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined | null
          rentFrom?: /** The lower bound of the applicant's budget */ number | undefined | null
          rentTo?: /** The upper bound of the applicant's budget */ number | undefined | null
          rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
          string | undefined | null
          furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
          Array<string> | undefined | null
          positionId?: /** The identifier of the applicant's renting position */ string | undefined | null
        }
      | undefined
      | null
    externalArea?: /** The applicant's outdoor space requirements */
    | {
          type?: /** The unit of area that each amount corresponds to (acres/hectares) */ string | undefined | null
          amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */
          number | undefined | null
          amountTo?: /** The maximum unit value of outside space that the applicant is looking for */
          number | undefined | null
        }
      | undefined
      | null
    internalArea?: /** The applicant's indoor space requirements */
    | {
          type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
          string | undefined | null
          amount?: /** The unit value of inside space that the applicant is looking for */ number | undefined | null
        }
      | undefined
      | null
    source?: /** An applicant's source of enquiry */
    | {
          id?: /** The unique identifier of the applicant's source */ string | undefined | null
          type?: /** The source type (office/source) */ string | undefined | null
        }
      | undefined
      | null
    regional?: /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          ggy?: /** Details of regional information specific to Guernsey */
          | {
                market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
                Array<string> | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined | null
    metadata?: /** App specific metadata to set against the applicant */
    Record<string, Record<string, never>> | undefined | null
  }
}
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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            applicantId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            isMain: z.boolean().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiApplicantsIdRelationships = (args: UseGetApiApplicantsIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateApplicantRelationshipArgs = {
  id: string
  body: /** Request body used to create or update a relationship between an applicant and a contact or company */
  {
    associatedId?: /** The unique identifier of the contact or company to create a relationship with */
    string | undefined | null
    associatedType?: /** The type of relationship to create (contact/company) */ string | undefined | null
    isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean | undefined | null
  }
}
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

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      applicantId: z.string().nullable().optional(),
      associatedType: z.string().nullable().optional(),
      associatedId: z.string().nullable().optional(),
      isMain: z.boolean().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
    })
    .parse(data)
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
