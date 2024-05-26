import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            lastCall: z.string().nullable().optional(),
            nextCall: z.string().nullable().optional(),
            marketingMode: z.string().nullable().optional(),
            currency: z.string().nullable().optional(),
            alternateId: z.string().nullable().optional(),
            address: z
              .object({
                buildingName: z.string().nullable().optional(),
                buildingNumber: z.string().nullable().optional(),
                line1: z.string().nullable().optional(),
                line2: z.string().nullable().optional(),
                line3: z.string().nullable().optional(),
                line4: z.string().nullable().optional(),
                postcode: z.string().nullable().optional(),
                countryId: z.string().nullable().optional(),
                localTimeZone: z.string().nullable().optional(),
                geolocation: z
                  .object({ latitude: z.number().nullable().optional(), longitude: z.number().nullable().optional() })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
            areaId: z.string().nullable().optional(),
            strapline: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            longDescription: z.string().nullable().optional(),
            localAuthorityCompanyId: z.string().nullable().optional(),
            localAuthorityCompanyName: z.string().nullable().optional(),
            summary: z.string().nullable().optional(),
            departmentId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            bedrooms: z.number().int().nullable().optional(),
            bedroomsMax: z.number().int().nullable().optional(),
            receptions: z.number().int().nullable().optional(),
            receptionsMax: z.number().int().nullable().optional(),
            bathrooms: z.number().int().nullable().optional(),
            bathroomsMax: z.number().int().nullable().optional(),
            numberOfUnits: z.number().int().nullable().optional(),
            parkingSpaces: z.number().int().nullable().optional(),
            councilTax: z.string().nullable().optional(),
            disabledPortalIds: z.array(z.string()).nullable().optional(),
            internetAdvertising: z.boolean().nullable().optional(),
            isExternal: z.boolean().nullable().optional(),
            viewingArrangements: z.string().nullable().optional(),
            videoUrl: z.string().nullable().optional(),
            videoCaption: z.string().nullable().optional(),
            video2Url: z.string().nullable().optional(),
            video2Caption: z.string().nullable().optional(),
            notes: z.string().nullable().optional(),
            boardStatus: z.string().nullable().optional(),
            boardNotes: z.string().nullable().optional(),
            featuredImageUrl: z.string().nullable().optional(),
            url: z.string().nullable().optional(),
            urlCaption: z.string().nullable().optional(),
            groundRent: z.number().nullable().optional(),
            groundRentComment: z.string().nullable().optional(),
            groundRentReviewDate: z.string().nullable().optional(),
            groundRentIncrease: z.number().nullable().optional(),
            serviceCharge: z.number().nullable().optional(),
            serviceChargeComment: z.string().nullable().optional(),
            floorLevel: z.number().int().nullable().optional(),
            internalFloors: z.number().int().nullable().optional(),
            totalFloors: z.number().int().nullable().optional(),
            boardUpdated: z.string().nullable().optional(),
            valuation: z.string().nullable().optional(),
            archivedOn: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            rural: z
              .object({
                tenureId: z.string().nullable().optional(),
                buildingsDescription: z.string().nullable().optional(),
                landDescription: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            externalArea: z
              .object({
                type: z.string().nullable().optional(),
                min: z.number().nullable().optional(),
                max: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            internalArea: z
              .object({
                type: z.string().nullable().optional(),
                min: z.number().nullable().optional(),
                max: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            epc: z
              .object({
                exempt: z.boolean().nullable().optional(),
                eer: z.number().int().nullable().optional(),
                eerRating: z.string().nullable().optional(),
                eerPotential: z.number().int().nullable().optional(),
                eerPotentialRating: z.string().nullable().optional(),
                eir: z.number().int().nullable().optional(),
                eirRating: z.string().nullable().optional(),
                eirPotential: z.number().int().nullable().optional(),
                eirPotentialRating: z.string().nullable().optional(),
                fullDocumentUrl: z.string().nullable().optional(),
                firstPageDocumentUrl: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            selling: z
              .object({
                instructed: z.string().nullable().optional(),
                price: z.number().nullable().optional(),
                priceTo: z.number().nullable().optional(),
                reservationFee: z.number().int().nullable().optional(),
                qualifier: z.string().nullable().optional(),
                status: z.string().nullable().optional(),
                disposal: z.string().nullable().optional(),
                completed: z.string().nullable().optional(),
                exchanged: z.string().nullable().optional(),
                accountPaid: z.string().nullable().optional(),
                tenure: z
                  .object({ type: z.string().nullable().optional(), expiry: z.string().nullable().optional() })
                  .nullable()
                  .optional(),
                vendorId: z.string().nullable().optional(),
                agency: z.string().nullable().optional(),
                agencyId: z.string().nullable().optional(),
                agreementExpiry: z.string().nullable().optional(),
                fee: z
                  .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
                  .nullable()
                  .optional(),
                exchangedCompanyFee: z.number().nullable().optional(),
                recommendedPrice: z.number().int().nullable().optional(),
                valuationPrice: z.number().int().nullable().optional(),
                brochureId: z.string().nullable().optional(),
                publicBrochureUrl: z.string().nullable().optional(),
                exchangedPrice: z.number().int().nullable().optional(),
                exchangedOfficeId: z.string().nullable().optional(),
                decoration: z.array(z.string()).nullable().optional(),
                sharedOwnership: z
                  .object({
                    sharedPercentage: z.number().nullable().optional(),
                    rent: z.number().nullable().optional(),
                    rentFrequency: z.string().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
                subAgentTerms: z
                  .object({
                    feeAvailable: z.boolean().nullable().optional(),
                    type: z.string().nullable().optional(),
                    amount: z.number().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
            letting: z
              .object({
                instructed: z.string().nullable().optional(),
                availableFrom: z.string().nullable().optional(),
                availableTo: z.string().nullable().optional(),
                agreementSigned: z.string().nullable().optional(),
                rent: z.number().nullable().optional(),
                rentFrequency: z.string().nullable().optional(),
                rentIncludes: z.string().nullable().optional(),
                furnishing: z.array(z.string()).nullable().optional(),
                term: z.string().nullable().optional(),
                status: z.string().nullable().optional(),
                agentRole: z.string().nullable().optional(),
                landlordId: z.string().nullable().optional(),
                worksOrderNote: z.string().nullable().optional(),
                minimumTerm: z.number().int().nullable().optional(),
                propertyManagerId: z.string().nullable().optional(),
                managementCompanyIds: z.array(z.string()).nullable().optional(),
                brochureId: z.string().nullable().optional(),
                publicBrochureUrl: z.string().nullable().optional(),
                managementFee: z
                  .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
                  .nullable()
                  .optional(),
                lettingFee: z
                  .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
                  .nullable()
                  .optional(),
                qualifier: z.string().nullable().optional(),
                utilities: z
                  .object({
                    hasGas: z.boolean().nullable().optional(),
                    gasCompanyId: z.string().nullable().optional(),
                    gasMeterPoint: z.string().nullable().optional(),
                    electricityCompanyId: z.string().nullable().optional(),
                    electricityMeterPoint: z.string().nullable().optional(),
                    waterCompanyId: z.string().nullable().optional(),
                    waterMeterPoint: z.string().nullable().optional(),
                    telephoneCompanyId: z.string().nullable().optional(),
                    internetCompanyId: z.string().nullable().optional(),
                    cableTvCompanyId: z.string().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
                deposit: z
                  .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
                  .nullable()
                  .optional(),
                rentInsurance: z
                  .object({
                    status: z.string().nullable().optional(),
                    referenceNumber: z.string().nullable().optional(),
                    start: z.string().nullable().optional(),
                    end: z.string().nullable().optional(),
                    cancelledReasonId: z.string().nullable().optional(),
                    cancelledComment: z.string().nullable().optional(),
                    autoRenew: z.boolean().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
                licencing: z
                  .object({
                    licenceRequired: z.boolean().nullable().optional(),
                    licenceType: z.string().nullable().optional(),
                    households: z.number().int().nullable().optional(),
                    occupants: z.number().int().nullable().optional(),
                    aboveCommercialPremises: z.boolean().nullable().optional(),
                    application: z
                      .object({
                        status: z.string().nullable().optional(),
                        referenceNumber: z.string().nullable().optional(),
                        date: z.string().nullable().optional(),
                        granted: z.string().nullable().optional(),
                        expiry: z.string().nullable().optional(),
                      })
                      .nullable()
                      .optional(),
                  })
                  .nullable()
                  .optional(),
              })
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
                irl: z
                  .object({
                    buildingEnergyRating: z
                      .object({
                        exempt: z.boolean().nullable().optional(),
                        rating: z.string().nullable().optional(),
                        refNumber: z.string().nullable().optional(),
                        epi: z.string().nullable().optional(),
                      })
                      .nullable()
                      .optional(),
                  })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
            type: z.array(z.string()).nullable().optional(),
            style: z.array(z.string()).nullable().optional(),
            situation: z.array(z.string()).nullable().optional(),
            parking: z.array(z.string()).nullable().optional(),
            age: z.array(z.string()).nullable().optional(),
            locality: z.array(z.string()).nullable().optional(),
            specialFeatures: z.array(z.string()).nullable().optional(),
            unmappedAttributes: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            availableServicesIds: z.array(z.string()).nullable().optional(),
            rooms: z
              .array(
                z.object({
                  name: z.string().nullable().optional(),
                  dimensions: z.string().nullable().optional(),
                  dimensionsAlt: z.string().nullable().optional(),
                  description: z.string().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
            roomDetailsApproved: z.boolean().nullable().optional(),
            officeIds: z.array(z.string()).nullable().optional(),
            lostInstructionDate: z.string().nullable().optional(),
            lostInstructionNote: z.string().nullable().optional(),
            developmentSiteType: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            keywords: z.array(z.string()).nullable().optional(),
            extrasField: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
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
export const useGetApiProperties = (args: UseGetApiPropertiesArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertiesArgs = {
  body: /** Request body used to create a new property */
  {
    lastCall?: /** The date the owner of the property was last called */ string | undefined
    nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
    marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string
    departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
    strapline?: /** The strapline description containing a short summary about the property */ string | undefined
    description?: /** The brief description of the property */ string | undefined
    summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    string | undefined
    alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
    specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    address: /** Request body used to set the address of a new property */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new property's address */
      | {
            latitude: /** The latitude coordinate of the coordinate pair */ number
            longitude: /** The longitude coordinate of the coordinate pair */ number
          }
        | undefined
    }
    bedrooms?: /** The total number of bedrooms in the property */ number | undefined
    bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined
    numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
    number | undefined
    receptions?: /** The total number of reception rooms in the property */ number | undefined
    receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined
    bathrooms?: /** The total number of bathrooms in the property */ number | undefined
    bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined
    parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    number | undefined
    councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
    internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
    boolean | undefined
    viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
    videoCaption?: /** The caption for the video url associated with this property */ string | undefined
    video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
    string | undefined
    video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
    notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    string | undefined
    longDescription?: /** The long description of the property */ string | undefined
    floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
    boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
    string | undefined
    boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    string | undefined
    valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    string | undefined
    epc?: /** Request body used to set the EPC statistic of a new property */
    | {
          exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
          boolean | undefined
          eer?: /** The current energy efficiency rating */ number | undefined
          eerPotential?: /** The potential energy efficiency rating */ number | undefined
          eir?: /** The current environmental impact rating */ number | undefined
          eirPotential?: /** The potential environmental impact rating */ number | undefined
          fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
          firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
        }
      | undefined
    externalArea?: /** Request body to set the external land area of a new property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined
        }
      | undefined
    internalArea?: /** Request body to set the internal dimensions of a new property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound */ number | undefined
        }
      | undefined
    rural?: /** Request body used to set details specific to rural properties */
    | {
          buildingsDescription?: /** Details of the buildings associated with the property. */ string | undefined
          landDescription?: /** Details of the land associated with the property. */ string | undefined
        }
      | undefined
    selling?: /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
    | {
          instructed?: /** The date that the property was marked as for sale */ string | undefined
          price?: /** The marketing price of the property */ number | undefined
          reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
          number | undefined
          qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
          string | undefined
          status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
          string | undefined
          disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
          string | undefined
          completed?: /** The date the property sale was completed */ string | undefined
          exchanged?: /** The date the property was exchanged */ string | undefined
          accountPaid?: /** The date the property account was paid */ string | undefined
          tenure?: /** Request body used to set the tenure of a new property */
          | {
                type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                string | undefined
                expiry?: /** The tenure expiration date */ string | undefined
              }
            | undefined
          sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
          string | undefined
          agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
          string | undefined
          agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
          string | undefined
          fee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
                amount?: /** The commission letting fee amount */ number | undefined
              }
            | undefined
          recommendedPrice?: /** The agent's recommended asking price */ number | undefined
          valuationPrice?: /** The agent's valuation price */ number | undefined
          decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
          Array<string> | undefined
          sharedOwnership?: /** Details relating to the shared ownership of the property */
          | {
                sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */
                number | undefined
                rent?: /** The rent payable on the remainder of the shared ownership property */ number | undefined
                rentFrequency?: /** The frequency at which the shared ownership rent should be paid */
                string | undefined
              }
            | undefined
        }
      | undefined
    letting?: /** Request body used to set details specific to lettings marketing on a new property */
    | {
          instructed?: /** The date the property was marked as to let */ string | undefined
          availableFrom?: /** The date the property is available from */ string | undefined
          availableTo?: /** The date the property is available to */ string | undefined
          agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
          string | undefined
          rent?: /** The rent being charged for the property */ number | undefined
          rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
          string | undefined
          rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
          furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
          Array<string> | undefined
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined
          term?: /** The acceptable letting terms (short/long/any) */ string | undefined
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined
          landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
          worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | undefined
          managementFee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
                amount?: /** The commission letting fee amount */ number | undefined
              }
            | undefined
          lettingFee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
                amount?: /** The commission letting fee amount */ number | undefined
              }
            | undefined
          qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
          utilities?: /** Representation of property details specific to utilities */
          | {
                hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | undefined
                gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */
                string | undefined
                gasMeterPoint?: /** The gas meter point number */ string | undefined
                electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
                string | undefined
                electricityMeterPoint?: /** The electricity meter point number */ string | undefined
                waterCompanyId?: /** The unique identifier of the company supplying the water to the property */
                string | undefined
                waterMeterPoint?: /** The water meter point number */ string | undefined
                telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
                string | undefined
                internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
                string | undefined
                cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
                string | undefined
              }
            | undefined
          deposit?: /** Representation of a property details related to deposit */
          | {
                type?: /** The type of deposit (weeks/months/fixed) */ string | undefined
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
                number | undefined
              }
            | undefined
        }
      | undefined
    regional?: /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          irl?: /** Request body used to set the data specific to properties in Ireland */
          | {
                buildingEnergyRating?: /** Request body used to set the energy performance rating information for properties in Ireland */
                | {
                      exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                      boolean | undefined
                      rating?: /** The BER rating of the property */ string | undefined
                      refNumber?: /** The BER certificate reference number */ string | undefined
                      epi?: /** The energy performance indicator for the property */ string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    rooms?: /** Details of each room in the property */
    | Array</** Request body to create a room in the Rooms collection of a new property */
        {
          name?: /** The name of the room */ string | undefined
          dimensions?: /** Details about the dimensions of the room */ string | undefined
          description?: /** Short description of the room */ string | undefined
        }>
      | undefined
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined
    negotiatorId: /** The unique identifier of the negotiator managing the property */ string
    officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string>
    areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
    url?: /** The url to the property on an external website */ string | undefined
    urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
    groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
    groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
    groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
    string | undefined
    groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
    number | undefined
    serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
    serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined
  }
}
export const postApiPropertiesFn = async ({ body }: UsePostApiPropertiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      lastCall: z.string().nullable().optional(),
      nextCall: z.string().nullable().optional(),
      marketingMode: z.string().nullable().optional(),
      currency: z.string().nullable().optional(),
      alternateId: z.string().nullable().optional(),
      address: z
        .object({
          buildingName: z.string().nullable().optional(),
          buildingNumber: z.string().nullable().optional(),
          line1: z.string().nullable().optional(),
          line2: z.string().nullable().optional(),
          line3: z.string().nullable().optional(),
          line4: z.string().nullable().optional(),
          postcode: z.string().nullable().optional(),
          countryId: z.string().nullable().optional(),
          localTimeZone: z.string().nullable().optional(),
          geolocation: z
            .object({ latitude: z.number().nullable().optional(), longitude: z.number().nullable().optional() })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
      areaId: z.string().nullable().optional(),
      strapline: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      longDescription: z.string().nullable().optional(),
      localAuthorityCompanyId: z.string().nullable().optional(),
      localAuthorityCompanyName: z.string().nullable().optional(),
      summary: z.string().nullable().optional(),
      departmentId: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      bedrooms: z.number().int().nullable().optional(),
      bedroomsMax: z.number().int().nullable().optional(),
      receptions: z.number().int().nullable().optional(),
      receptionsMax: z.number().int().nullable().optional(),
      bathrooms: z.number().int().nullable().optional(),
      bathroomsMax: z.number().int().nullable().optional(),
      numberOfUnits: z.number().int().nullable().optional(),
      parkingSpaces: z.number().int().nullable().optional(),
      councilTax: z.string().nullable().optional(),
      disabledPortalIds: z.array(z.string()).nullable().optional(),
      internetAdvertising: z.boolean().nullable().optional(),
      isExternal: z.boolean().nullable().optional(),
      viewingArrangements: z.string().nullable().optional(),
      videoUrl: z.string().nullable().optional(),
      videoCaption: z.string().nullable().optional(),
      video2Url: z.string().nullable().optional(),
      video2Caption: z.string().nullable().optional(),
      notes: z.string().nullable().optional(),
      boardStatus: z.string().nullable().optional(),
      boardNotes: z.string().nullable().optional(),
      featuredImageUrl: z.string().nullable().optional(),
      url: z.string().nullable().optional(),
      urlCaption: z.string().nullable().optional(),
      groundRent: z.number().nullable().optional(),
      groundRentComment: z.string().nullable().optional(),
      groundRentReviewDate: z.string().nullable().optional(),
      groundRentIncrease: z.number().nullable().optional(),
      serviceCharge: z.number().nullable().optional(),
      serviceChargeComment: z.string().nullable().optional(),
      floorLevel: z.number().int().nullable().optional(),
      internalFloors: z.number().int().nullable().optional(),
      totalFloors: z.number().int().nullable().optional(),
      boardUpdated: z.string().nullable().optional(),
      valuation: z.string().nullable().optional(),
      archivedOn: z.string().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      rural: z
        .object({
          tenureId: z.string().nullable().optional(),
          buildingsDescription: z.string().nullable().optional(),
          landDescription: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      externalArea: z
        .object({
          type: z.string().nullable().optional(),
          min: z.number().nullable().optional(),
          max: z.number().nullable().optional(),
        })
        .nullable()
        .optional(),
      internalArea: z
        .object({
          type: z.string().nullable().optional(),
          min: z.number().nullable().optional(),
          max: z.number().nullable().optional(),
        })
        .nullable()
        .optional(),
      epc: z
        .object({
          exempt: z.boolean().nullable().optional(),
          eer: z.number().int().nullable().optional(),
          eerRating: z.string().nullable().optional(),
          eerPotential: z.number().int().nullable().optional(),
          eerPotentialRating: z.string().nullable().optional(),
          eir: z.number().int().nullable().optional(),
          eirRating: z.string().nullable().optional(),
          eirPotential: z.number().int().nullable().optional(),
          eirPotentialRating: z.string().nullable().optional(),
          fullDocumentUrl: z.string().nullable().optional(),
          firstPageDocumentUrl: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      selling: z
        .object({
          instructed: z.string().nullable().optional(),
          price: z.number().nullable().optional(),
          priceTo: z.number().nullable().optional(),
          reservationFee: z.number().int().nullable().optional(),
          qualifier: z.string().nullable().optional(),
          status: z.string().nullable().optional(),
          disposal: z.string().nullable().optional(),
          completed: z.string().nullable().optional(),
          exchanged: z.string().nullable().optional(),
          accountPaid: z.string().nullable().optional(),
          tenure: z
            .object({ type: z.string().nullable().optional(), expiry: z.string().nullable().optional() })
            .nullable()
            .optional(),
          vendorId: z.string().nullable().optional(),
          agency: z.string().nullable().optional(),
          agencyId: z.string().nullable().optional(),
          agreementExpiry: z.string().nullable().optional(),
          fee: z
            .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
            .nullable()
            .optional(),
          exchangedCompanyFee: z.number().nullable().optional(),
          recommendedPrice: z.number().int().nullable().optional(),
          valuationPrice: z.number().int().nullable().optional(),
          brochureId: z.string().nullable().optional(),
          publicBrochureUrl: z.string().nullable().optional(),
          exchangedPrice: z.number().int().nullable().optional(),
          exchangedOfficeId: z.string().nullable().optional(),
          decoration: z.array(z.string()).nullable().optional(),
          sharedOwnership: z
            .object({
              sharedPercentage: z.number().nullable().optional(),
              rent: z.number().nullable().optional(),
              rentFrequency: z.string().nullable().optional(),
            })
            .nullable()
            .optional(),
          subAgentTerms: z
            .object({
              feeAvailable: z.boolean().nullable().optional(),
              type: z.string().nullable().optional(),
              amount: z.number().nullable().optional(),
            })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
      letting: z
        .object({
          instructed: z.string().nullable().optional(),
          availableFrom: z.string().nullable().optional(),
          availableTo: z.string().nullable().optional(),
          agreementSigned: z.string().nullable().optional(),
          rent: z.number().nullable().optional(),
          rentFrequency: z.string().nullable().optional(),
          rentIncludes: z.string().nullable().optional(),
          furnishing: z.array(z.string()).nullable().optional(),
          term: z.string().nullable().optional(),
          status: z.string().nullable().optional(),
          agentRole: z.string().nullable().optional(),
          landlordId: z.string().nullable().optional(),
          worksOrderNote: z.string().nullable().optional(),
          minimumTerm: z.number().int().nullable().optional(),
          propertyManagerId: z.string().nullable().optional(),
          managementCompanyIds: z.array(z.string()).nullable().optional(),
          brochureId: z.string().nullable().optional(),
          publicBrochureUrl: z.string().nullable().optional(),
          managementFee: z
            .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
            .nullable()
            .optional(),
          lettingFee: z
            .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
            .nullable()
            .optional(),
          qualifier: z.string().nullable().optional(),
          utilities: z
            .object({
              hasGas: z.boolean().nullable().optional(),
              gasCompanyId: z.string().nullable().optional(),
              gasMeterPoint: z.string().nullable().optional(),
              electricityCompanyId: z.string().nullable().optional(),
              electricityMeterPoint: z.string().nullable().optional(),
              waterCompanyId: z.string().nullable().optional(),
              waterMeterPoint: z.string().nullable().optional(),
              telephoneCompanyId: z.string().nullable().optional(),
              internetCompanyId: z.string().nullable().optional(),
              cableTvCompanyId: z.string().nullable().optional(),
            })
            .nullable()
            .optional(),
          deposit: z
            .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
            .nullable()
            .optional(),
          rentInsurance: z
            .object({
              status: z.string().nullable().optional(),
              referenceNumber: z.string().nullable().optional(),
              start: z.string().nullable().optional(),
              end: z.string().nullable().optional(),
              cancelledReasonId: z.string().nullable().optional(),
              cancelledComment: z.string().nullable().optional(),
              autoRenew: z.boolean().nullable().optional(),
            })
            .nullable()
            .optional(),
          licencing: z
            .object({
              licenceRequired: z.boolean().nullable().optional(),
              licenceType: z.string().nullable().optional(),
              households: z.number().int().nullable().optional(),
              occupants: z.number().int().nullable().optional(),
              aboveCommercialPremises: z.boolean().nullable().optional(),
              application: z
                .object({
                  status: z.string().nullable().optional(),
                  referenceNumber: z.string().nullable().optional(),
                  date: z.string().nullable().optional(),
                  granted: z.string().nullable().optional(),
                  expiry: z.string().nullable().optional(),
                })
                .nullable()
                .optional(),
            })
            .nullable()
            .optional(),
        })
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
          irl: z
            .object({
              buildingEnergyRating: z
                .object({
                  exempt: z.boolean().nullable().optional(),
                  rating: z.string().nullable().optional(),
                  refNumber: z.string().nullable().optional(),
                  epi: z.string().nullable().optional(),
                })
                .nullable()
                .optional(),
            })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
      type: z.array(z.string()).nullable().optional(),
      style: z.array(z.string()).nullable().optional(),
      situation: z.array(z.string()).nullable().optional(),
      parking: z.array(z.string()).nullable().optional(),
      age: z.array(z.string()).nullable().optional(),
      locality: z.array(z.string()).nullable().optional(),
      specialFeatures: z.array(z.string()).nullable().optional(),
      unmappedAttributes: z
        .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      availableServicesIds: z.array(z.string()).nullable().optional(),
      rooms: z
        .array(
          z.object({
            name: z.string().nullable().optional(),
            dimensions: z.string().nullable().optional(),
            dimensionsAlt: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      roomDetailsApproved: z.boolean().nullable().optional(),
      officeIds: z.array(z.string()).nullable().optional(),
      lostInstructionDate: z.string().nullable().optional(),
      lostInstructionNote: z.string().nullable().optional(),
      developmentSiteType: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      keywords: z.array(z.string()).nullable().optional(),
      extrasField: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesId = (args: UseGetApiPropertiesIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdFn(args),
  })

  return result
}
export type UsePatchApiPropertiesIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing property */
  {
    lastCall?: /** The date the owner of the property was last called */ string | undefined
    nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined
    strapline?: /** The strapline description containing a short summary about the property */ string | undefined
    description?: /** The brief description of the property */ string | undefined
    summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    string | undefined
    alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
    specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    address?: /** Request body used to update the address of an existing property */
    | {
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
          geolocation?: /** Request body used to update the geolocation coordinates of an existing property's address */
          | {
                latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
                longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
              }
            | undefined
        }
      | undefined
    bedrooms?: /** The total number of bedrooms in the property */ number | undefined
    bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined
    numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
    number | undefined
    receptions?: /** The total number of reception rooms in the property */ number | undefined
    receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined
    bathrooms?: /** The total number of bathrooms in the property */ number | undefined
    bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined
    parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    number | undefined
    councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
    internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
    boolean | undefined
    viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
    videoCaption?: /** The caption for the video url associated with this property */ string | undefined
    video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
    string | undefined
    video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
    notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    string | undefined
    longDescription?: /** The long description of the property */ string | undefined
    floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
    boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
    string | undefined
    boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    string | undefined
    valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    string | undefined
    epc?: /** Request body used to update the EPC statistics of an existing property */
    | {
          exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
          boolean | undefined
          eer?: /** The current energy efficiency rating */ number | undefined
          eerPotential?: /** The potential energy efficiency rating */ number | undefined
          eir?: /** The current environmental impact rating */ number | undefined
          eirPotential?: /** The potential environmental impact rating */ number | undefined
          fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
          firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
        }
      | undefined
    externalArea?: /** Request body to update the external land area of an existing property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined
        }
      | undefined
    internalArea?: /** Request body to update the internal dimensions of an existing property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound */ number | undefined
        }
      | undefined
    selling?: /** Request body used to update details specific to sales marketing on an existing property */
    | {
          instructed?: /** The date that the property was marked as for sale */ string | undefined
          price?: /** The marketing price of the property */ number | undefined
          reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
          number | undefined
          qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
          string | undefined
          status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
          string | undefined
          disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
          string | undefined
          completed?: /** The date the property sale was completed */ string | undefined
          exchanged?: /** The date the property was exchanged */ string | undefined
          accountPaid?: /** The date the property account was paid */ string | undefined
          tenure?: /** Request body used to set the tenure of an existing property */
          | {
                type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                string | undefined
                expiry?: /** The tenure expiration date */ string | undefined
              }
            | undefined
          sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
          string | undefined
          agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
          string | undefined
          agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
          string | undefined
          fee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
                amount?: /** The commission letting fee amount */ number | undefined
              }
            | undefined
          recommendedPrice?: /** The agent's recommended asking price */ number | undefined
          valuationPrice?: /** The agent's valuation price */ number | undefined
          brochureId?: /** The unique identifier of the document used for the sales brochure */ string | undefined
          decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
          Array<string> | undefined
          sharedOwnership?: /** Details relating to the shared ownership of the property */
          | {
                sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */
                number | undefined
                rent?: /** The rent payable on the remainder of the shared ownership property */ number | undefined
                rentFrequency?: /** The frequency at which the shared ownership rent should be paid */
                string | undefined
              }
            | undefined
        }
      | undefined
    letting?: /** Request body used to update details specific to lettings marketing on an existing property */
    | {
          instructed?: /** The date the property was marked as to let */ string | undefined
          availableFrom?: /** The date the property is next available from */ string | undefined
          availableTo?: /** The date the property is available to */ string | undefined
          agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
          string | undefined
          rent?: /** The rent being charged for the property */ number | undefined
          rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
          string | undefined
          rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
          furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
          Array<string> | undefined
          term?: /** The acceptable letting terms (short/long/any) */ string | undefined
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined
          landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
          brochureId?: /** The unique identifier of the document used for the lettings brochure */ string | undefined
          worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | undefined
          managementFee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
                amount?: /** The commission letting fee amount */ number | undefined
              }
            | undefined
          lettingFee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
                amount?: /** The commission letting fee amount */ number | undefined
              }
            | undefined
          qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
          utilities?: /** Representation of property details specific to utilities */
          | {
                hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | undefined
                gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */
                string | undefined
                gasMeterPoint?: /** The gas meter point number */ string | undefined
                electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
                string | undefined
                electricityMeterPoint?: /** The electricity meter point number */ string | undefined
                waterCompanyId?: /** The unique identifier of the company supplying the water to the property */
                string | undefined
                waterMeterPoint?: /** The water meter point number */ string | undefined
                telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
                string | undefined
                internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
                string | undefined
                cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
                string | undefined
              }
            | undefined
          deposit?: /** Representation of a property details related to deposit */
          | {
                type?: /** The type of deposit (weeks/months/fixed) */ string | undefined
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
                number | undefined
              }
            | undefined
          rentInsurance?: /** Request body used to update details specific to rent insurance associated with a lettings property */
          | {
                status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
                string | undefined
                referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
                string | undefined
                start?: /** The insurance policy start date */ string | undefined
                end?: /** The insurance policy end date */ string | undefined
                cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
                string | undefined
                cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
                string | undefined
                autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */
                boolean | undefined
              }
            | undefined
          licencing?: /** Representation of property details specific to property Licencing */
          | {
                licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
                boolean | undefined
                licenceType?: /** The type of licence (additional/mandatory/none/selective) */ string | undefined
                households?: /** The number of households that the licence permits in the property */ number | undefined
                occupants?: /** The number of occupants that the licence permits in the property */ number | undefined
                aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
                boolean | undefined
                application?: /** Representation of property details specific to property licence application */
                | {
                      status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
                      string | undefined
                      referenceNumber?: /** The licence application reference number */ string | undefined
                      date?: /** The date the licence was applied for */ string | undefined
                      granted?: /** The date the licence application was granted */ string | undefined
                      expiry?: /** The date the licence will expire */ string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    regional?: /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          irl?: /** Request body used to set the data specific to properties in Ireland */
          | {
                buildingEnergyRating?: /** Request body used to set the energy performance rating information for properties in Ireland */
                | {
                      exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                      boolean | undefined
                      rating?: /** The BER rating of the property */ string | undefined
                      refNumber?: /** The BER certificate reference number */ string | undefined
                      epi?: /** The energy performance indicator for the property */ string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    rural?: /** Request body used to set details specific to rural properties. */
    | {
          buildingsDescription?: /** Details of the building associated with the property. */ string | undefined
          landDescription?: /** Details of the land associated with the property. */ string | undefined
        }
      | undefined
    type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string> | undefined
    areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
    url?: /** The url to the property on an external website */ string | undefined
    urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
    groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
    groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
    groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
    string | undefined
    groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
    number | undefined
    serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
    serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
    availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | undefined
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined
  }
}
export const patchApiPropertiesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiPropertiesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
            category: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            start: z.string().nullable().optional(),
            expiry: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            companyId: z.string().nullable().optional(),
            statusId: z.string().nullable().optional(),
            notes: z.string().nullable().optional(),
            referenceNumber: z.string().nullable().optional(),
            responsibleParty: z.string().nullable().optional(),
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
export const useGetApiPropertiesIdCertificates = (args: UseGetApiPropertiesIdCertificatesArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertiesIdCertificatesArgs = {
  id: string
  body: /** Request body used to create a new certificate */
  {
    category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | undefined
    typeId?: /** The certificate's type */ string | undefined
    start?: /** The certificate's start date */ string | undefined
    expiry?: /** The certificate's expiry date */ string | undefined
    companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
    string | undefined
    notes?: /** Any general notes regarding the certificate */ string | undefined
    referenceNumber?: /** The certificate's reference number */ string | undefined
  }
}
export const postApiPropertiesIdCertificatesFn = async ({ id, body }: UsePostApiPropertiesIdCertificatesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/certificates${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdCertificates = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertiesIdCertificatesFn,
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
      category: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      start: z.string().nullable().optional(),
      expiry: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      companyId: z.string().nullable().optional(),
      statusId: z.string().nullable().optional(),
      notes: z.string().nullable().optional(),
      referenceNumber: z.string().nullable().optional(),
      responsibleParty: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesIdCertificatesCertificateId = (
  args: UseGetApiPropertiesIdCertificatesCertificateIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesCertificateIdFn(args),
  })

  return result
}
export type UsePatchApiPropertiesIdCertificatesCertificateIdArgs = {
  'If-Match'?: string
  id: string
  certificateId: string
  body: /** Request body used to update an existing certificate */
  {
    start?: /** The certificate's start date */ string | undefined
    expiry?: /** The certificate's expiry date */ string | undefined
    companyId?: /** The unique identifier of the company */ string | undefined
    notes?: /** Any general notes regarding the certificate */ string | undefined
    referenceNumber?: /** The certificate's reference number */ string | undefined
  }
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
      body: JSON.stringify({ 'If-Match': IfMatch, id, certificateId, body }),
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
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      responsibleParties: z
        .array(
          z.object({ typeId: z.string().nullable().optional(), responsibleParty: z.string().nullable().optional() }),
        )
        .nullable()
        .optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesIdCertificatesResponsibilities = (
  args: UseGetApiPropertiesIdCertificatesResponsibilitiesArgs,
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesResponsibilitiesFn(args),
  })

  return result
}
export type UsePatchApiPropertiesIdCertificatesResponsibilitiesArgs = {
  'If-Match'?: string
  id: string
  body: /** Object containing a collection of certificate type to responsible party mappings */
  {
    responsibleParties?: /** A collection of certificate type to responsible party mappings */
    | Array</** Record describing the responsible party for a given type of certificate within a property entry */
        {
          typeId?: /** Identifier for the type of certificate for which the party is responsible */ string | undefined
          responsibleParty?: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
          string | undefined
        }>
      | undefined
  }
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
            number: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            officeId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            keysInSet: z
              .array(z.object({ name: z.string().nullable().optional() }))
              .nullable()
              .optional(),
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
export const useGetApiPropertiesIdKeys = (args: UseGetApiPropertiesIdKeysArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertiesIdKeysArgs = {
  id: string
  body: /** Request body used to create a new set of keys */
  {
    number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
    string | undefined
    typeId?: /** The unique identifier of the key type */ string | undefined
    officeId?: /** The unique identifier of the office responsible for the key */ string | undefined
    keysInSet?: /** A listing of the individual keys included in the set */
    | Array</** Request body used to create an individual key included in a key set */
        { name?: /** The name of the individual key in the set */ string | undefined }>
      | undefined
  }
}
export const postApiPropertiesIdKeysFn = async ({ id, body }: UsePostApiPropertiesIdKeysArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdKeys = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertiesIdKeysFn,
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
      number: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      officeId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      keysInSet: z
        .array(z.object({ name: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesIdKeysKeyId = (args: UseGetApiPropertiesIdKeysKeyIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdFn(args),
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
            keyId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            checkOutToId: z.string().nullable().optional(),
            checkOutToType: z.string().nullable().optional(),
            checkOutAt: z.string().nullable().optional(),
            checkOutNegotiatorId: z.string().nullable().optional(),
            checkInAt: z.string().nullable().optional(),
            checkInNegotiatorId: z.string().nullable().optional(),
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
export const useGetApiPropertiesIdKeysKeyIdMovements = (args: UseGetApiPropertiesIdKeysKeyIdMovementsArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertiesIdKeysKeyIdMovementsArgs = {
  id: string
  keyId: string
  body: /** Request body used to create a new key movement */
  {
    checkInRequired?: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
    boolean | undefined
    checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
    string | undefined
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | undefined
    checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
    string | undefined
  }
}
export const postApiPropertiesIdKeysKeyIdMovementsFn = async ({
  id,
  keyId,
  body,
}: UsePostApiPropertiesIdKeysKeyIdMovementsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, keyId, body }),
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
export const usePostApiPropertiesIdKeysKeyIdMovements = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertiesIdKeysKeyIdMovementsFn,
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
      keyId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      checkOutToId: z.string().nullable().optional(),
      checkOutToType: z.string().nullable().optional(),
      checkOutAt: z.string().nullable().optional(),
      checkOutNegotiatorId: z.string().nullable().optional(),
      checkInAt: z.string().nullable().optional(),
      checkInNegotiatorId: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesIdKeysKeyIdMovementsMovementId = (
  args: UseGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsMovementIdFn(args),
  })

  return result
}
export type UsePutApiPropertiesIdKeysKeyIdMovementsMovementIdArgs = {
  id: string
  keyId: string
  movementId: string
  body: /** Request body used for checking in a key */
  {
    checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */
    string | undefined
  }
}
export const putApiPropertiesIdKeysKeyIdMovementsMovementIdFn = async ({
  id,
  keyId,
  movementId,
  body,
}: UsePutApiPropertiesIdKeysKeyIdMovementsMovementIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys/${keyId}/movements/${movementId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
      body: JSON.stringify({ id, keyId, movementId, body }),
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
export const usePutApiPropertiesIdKeysKeyIdMovementsMovementId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: putApiPropertiesIdKeysKeyIdMovementsMovementIdFn,
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
            description: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
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
export const useGetApiPropertiesIdChecks = (args: UseGetApiPropertiesIdChecksArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertiesIdChecksArgs = {
  id: string
  body: /** Request body used to create a new check */
  {
    description: /** Short, descriptive text describing the purpose of the check */ string
    type: /** The type of the check (preInstruction) */ string
    status: /** The status of the check (needed/notNeeded/arranging/completed) */ string
  }
}
export const postApiPropertiesIdChecksFn = async ({ id, body }: UsePostApiPropertiesIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertiesIdChecksFn,
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
      description: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesIdChecksCheckId = (args: UseGetApiPropertiesIdChecksCheckIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdChecksCheckIdFn(args),
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
      body: JSON.stringify({ id, checkId }),
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
  body: /** Model for the update of an existing check */
  { status?: /** The status of the check (needed/notNeeded/arranging/completed) */ string | undefined }
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
      body: JSON.stringify({ 'If-Match': IfMatch, id, checkId, body }),
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
            category: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            start: z.string().nullable().optional(),
            expiry: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            companyId: z.string().nullable().optional(),
            statusId: z.string().nullable().optional(),
            notes: z.string().nullable().optional(),
            referenceNumber: z.string().nullable().optional(),
            responsibleParty: z.string().nullable().optional(),
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            companyId: z.string().nullable().optional(),
            isExternal: z.boolean().nullable().optional(),
            date: z.string().nullable().optional(),
            price: z.number().int().nullable().optional(),
            fee: z
              .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
              .nullable()
              .optional(),
            notes: z.string().nullable().optional(),
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
export const useGetApiPropertiesIdAppraisals = (args: UseGetApiPropertiesIdAppraisalsArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdAppraisalsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiPropertiesIdAppraisalsArgs = {
  id: string
  body: /** Model for the creation of a new property appraisal */
  {
    companyId?: /** Unique identifier of the appraising company */ string | undefined
    date?: /** The date of the appraisal */ string | undefined
    price?: /** The appraisal value */ number | undefined
    fee?: /** Representation of the the commission fee for a property */
    | {
          type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
          amount?: /** The commission letting fee amount */ number | undefined
        }
      | undefined
    notes?: /** Free-text notes associated with the appraisal */ string | undefined
  }
}
export const postApiPropertiesIdAppraisalsFn = async ({ id, body }: UsePostApiPropertiesIdAppraisalsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/appraisals${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiPropertiesIdAppraisals = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiPropertiesIdAppraisalsFn,
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
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      companyId: z.string().nullable().optional(),
      isExternal: z.boolean().nullable().optional(),
      date: z.string().nullable().optional(),
      price: z.number().int().nullable().optional(),
      fee: z
        .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
        .nullable()
        .optional(),
      notes: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiPropertiesIdAppraisalsAppraisalId = (args: UseGetApiPropertiesIdAppraisalsAppraisalIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdAppraisalsAppraisalIdFn(args),
  })

  return result
}
export type UsePatchApiPropertiesIdAppraisalsAppraisalIdArgs = {
  'If-Match'?: string
  id: string
  appraisalId: string
  body: /** Model for the creation of a new property appraisal */
  {
    companyId?: /** Unique identifier of the appraising company */ string | undefined
    date?: /** The date of the appraisal */ string | undefined
    price?: /** The appraisal value */ number | undefined
    fee?: /** Representation of the the commission fee for a property */
    | {
          type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
          amount?: /** The commission letting fee amount */ number | undefined
        }
      | undefined
    notes?: /** Free-text notes associated with the appraisal */ string | undefined
  }
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
      body: JSON.stringify({ 'If-Match': IfMatch, id, appraisalId, body }),
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
