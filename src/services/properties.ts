import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiPropertiesArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
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
    | null
  id?: Array<string> | undefined | null
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined | null
  agentRole?:
    | Array<
        'managed' | 'rentCollection' | 'collectFirstPayment' | 'collectRentToDate' | 'lettingOnly' | 'introducingTenant'
      >
    | undefined
    | null
  areaId?: Array<string> | undefined | null
  excludeAreaId?: Array<string> | undefined | null
  landlordId?: Array<string> | undefined | null
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
    | null
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined | null
  marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | undefined | null
  masterId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
    | undefined
    | null
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
  countryId?: string | undefined | null
  departmentId?: string | undefined | null
  bedroomsFrom?: number | undefined | null
  bedroomsTo?: number | undefined | null
  priceFrom?: number | undefined | null
  priceTo?: number | undefined | null
  priceFiltersCurrency?: string | undefined | null
  rentFrom?: number | undefined | null
  rentTo?: number | undefined | null
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined | null
  internetAdvertising?: boolean | undefined | null
  isExternal?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  availableFrom?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    lastCall?: /** The date the owner of the property was last called */ string | undefined | null
    nextCall?: /** The date the owner of the property is next due to be called */ string | undefined | null
    marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string
    departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
    strapline?: /** The strapline description containing a short summary about the property */ string | undefined | null
    description?: /** The brief description of the property */ string | undefined | null
    summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    string | undefined | null
    alternateId?: /** An optional alternative identifier specified for this property */ string | undefined | null
    specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    address: /** Request body used to set the address of a new property */
    {
      buildingName?: /** The building name */ string | undefined | null
      buildingNumber?: /** The building number */ string | undefined | null
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined | null
      line3?: /** The third line of the address */ string | undefined | null
      line4?: /** The fourth line of the address */ string | undefined | null
      postcode?: /** The postcode */ string | undefined | null
      countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined | null
      geolocation?: /** Request body used to set the geolocation coordinates of a new property's address */
      | {
            latitude: /** The latitude coordinate of the coordinate pair */ number
            longitude: /** The longitude coordinate of the coordinate pair */ number
          }
        | undefined
        | null
    }
    bedrooms?: /** The total number of bedrooms in the property */ number | undefined | null
    bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined | null
    numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
    number | undefined | null
    receptions?: /** The total number of reception rooms in the property */ number | undefined | null
    receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined | null
    bathrooms?: /** The total number of bathrooms in the property */ number | undefined | null
    bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined | null
    parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    number | undefined | null
    councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
    string | undefined | null
    internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
    boolean | undefined | null
    viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined | null
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined | null
    videoCaption?: /** The caption for the video url associated with this property */ string | undefined | null
    video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
    string | undefined | null
    video2Caption?: /** The caption for the second video url associated with this property */ string | undefined | null
    notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    string | undefined | null
    longDescription?: /** The long description of the property */ string | undefined | null
    floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined | null
    internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined | null
    totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined | null
    boardStatus?: /** The status of the advertising board sited outside or near to the property */
    string | undefined | null
    boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
    string | undefined | null
    boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    string | undefined | null
    valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    string | undefined | null
    epc?: /** Request body used to set the EPC statistic of a new property */
    | {
          exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
          boolean | undefined | null
          eer?: /** The current energy efficiency rating */ number | undefined | null
          eerPotential?: /** The potential energy efficiency rating */ number | undefined | null
          eir?: /** The current environmental impact rating */ number | undefined | null
          eirPotential?: /** The potential environmental impact rating */ number | undefined | null
          fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined | null
          firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined | null
        }
      | undefined
      | null
    externalArea?: /** Request body to set the external land area of a new property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined | null
          min?: /** The minimum area bound */ number | undefined | null
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined | null
        }
      | undefined
      | null
    internalArea?: /** Request body to set the internal dimensions of a new property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined | null
          min?: /** The minimum area bound */ number | undefined | null
          max?: /** The maximum area bound */ number | undefined | null
        }
      | undefined
      | null
    rural?: /** Request body used to set details specific to rural properties */
    | {
          buildingsDescription?: /** Details of the buildings associated with the property. */ string | undefined | null
          landDescription?: /** Details of the land associated with the property. */ string | undefined | null
        }
      | undefined
      | null
    selling?: /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
    | {
          instructed?: /** The date that the property was marked as for sale */ string | undefined | null
          price?: /** The marketing price of the property */ number | undefined | null
          reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
          number | undefined | null
          qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
          string | undefined | null
          status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
          string | undefined | null
          disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
          string | undefined | null
          completed?: /** The date the property sale was completed */ string | undefined | null
          exchanged?: /** The date the property was exchanged */ string | undefined | null
          accountPaid?: /** The date the property account was paid */ string | undefined | null
          tenure?: /** Request body used to set the tenure of a new property */
          | {
                type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                string | undefined | null
                expiry?: /** The tenure expiration date */ string | undefined | null
              }
            | undefined
            | null
          sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
          string | undefined | null
          agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
          string | undefined | null
          agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
          string | undefined | null
          fee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
                amount?: /** The commission letting fee amount */ number | undefined | null
              }
            | undefined
            | null
          recommendedPrice?: /** The agent's recommended asking price */ number | undefined | null
          valuationPrice?: /** The agent's valuation price */ number | undefined | null
          decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
          Array<string> | undefined | null
          sharedOwnership?: /** Details relating to the shared ownership of the property */
          | {
                sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */
                number | undefined | null
                rent?: /** The rent payable on the remainder of the shared ownership property */
                number | undefined | null
                rentFrequency?: /** The frequency at which the shared ownership rent should be paid */
                string | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    letting?: /** Request body used to set details specific to lettings marketing on a new property */
    | {
          instructed?: /** The date the property was marked as to let */ string | undefined | null
          availableFrom?: /** The date the property is available from */ string | undefined | null
          availableTo?: /** The date the property is available to */ string | undefined | null
          agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
          string | undefined | null
          rent?: /** The rent being charged for the property */ number | undefined | null
          rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
          string | undefined | null
          rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined | null
          furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
          Array<string> | undefined | null
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined | null
          term?: /** The acceptable letting terms (short/long/any) */ string | undefined | null
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined | null
          landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined | null
          worksOrderNote?: /** A note to accompany any works orders created for the property */
          string | undefined | null
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */
          number | undefined | null
          managementFee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
                amount?: /** The commission letting fee amount */ number | undefined | null
              }
            | undefined
            | null
          lettingFee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
                amount?: /** The commission letting fee amount */ number | undefined | null
              }
            | undefined
            | null
          qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined | null
          utilities?: /** Representation of property details specific to utilities */
          | {
                hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | undefined | null
                gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */
                string | undefined | null
                gasMeterPoint?: /** The gas meter point number */ string | undefined | null
                electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
                string | undefined | null
                electricityMeterPoint?: /** The electricity meter point number */ string | undefined | null
                waterCompanyId?: /** The unique identifier of the company supplying the water to the property */
                string | undefined | null
                waterMeterPoint?: /** The water meter point number */ string | undefined | null
                telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
                string | undefined | null
                internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
                string | undefined | null
                cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
                string | undefined | null
              }
            | undefined
            | null
          deposit?: /** Representation of a property details related to deposit */
          | {
                type?: /** The type of deposit (weeks/months/fixed) */ string | undefined | null
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
                number | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    regional?: /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          irl?: /** Request body used to set the data specific to properties in Ireland */
          | {
                buildingEnergyRating?: /** Request body used to set the energy performance rating information for properties in Ireland */
                | {
                      exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                      boolean | undefined | null
                      rating?: /** The BER rating of the property */ string | undefined | null
                      refNumber?: /** The BER certificate reference number */ string | undefined | null
                      epi?: /** The energy performance indicator for the property */ string | undefined | null
                    }
                  | undefined
                  | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    rooms?: /** Details of each room in the property */
    | Array</** Request body to create a room in the Rooms collection of a new property */
        {
          name?: /** The name of the room */ string | undefined | null
          dimensions?: /** Details about the dimensions of the room */ string | undefined | null
          description?: /** Short description of the room */ string | undefined | null
        }>
      | undefined
      | null
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined | null
    negotiatorId: /** The unique identifier of the negotiator managing the property */ string
    officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string>
    areaId?: /** The unique identifier of the area that the property resides in */ string | undefined | null
    url?: /** The url to the property on an external website */ string | undefined | null
    urlCaption?: /** The caption to accompany the url to the property on an external website */
    string | undefined | null
    groundRent?: /** Any ground rent payment that applies to the property */ number | undefined | null
    groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined | null
    groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
    string | undefined | null
    groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
    number | undefined | null
    serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined | null
    serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined | null
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const postApiPropertiesFn = async ({ body }: UsePostApiPropertiesArgs) => {
  const res = await fetch(`/properties/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`, {
    method: 'POST',
    body: JSON.stringify({ body }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
    },
  })

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
    | null
  extrasField?: Array<string> | undefined | null
}
export const getApiPropertiesIdFn = async ({ id, embed, extrasField }: UseGetApiPropertiesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    lastCall?: /** The date the owner of the property was last called */ string | undefined | null
    nextCall?: /** The date the owner of the property is next due to be called */ string | undefined | null
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined | null
    strapline?: /** The strapline description containing a short summary about the property */ string | undefined | null
    description?: /** The brief description of the property */ string | undefined | null
    summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    string | undefined | null
    alternateId?: /** An optional alternative identifier specified for this property */ string | undefined | null
    specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    address?: /** Request body used to update the address of an existing property */
    | {
          buildingName?: /** The building name */ string | undefined | null
          buildingNumber?: /** The building number */ string | undefined | null
          line1?: /** The first line of the address */ string | undefined | null
          line2?: /** The second line of the address */ string | undefined | null
          line3?: /** The third line of the address */ string | undefined | null
          line4?: /** The fourth line of the address */ string | undefined | null
          postcode?: /** The postcode */ string | undefined | null
          countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined | null
          geolocation?: /** Request body used to update the geolocation coordinates of an existing property's address */
          | {
                latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined | null
                longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    bedrooms?: /** The total number of bedrooms in the property */ number | undefined | null
    bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined | null
    numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
    number | undefined | null
    receptions?: /** The total number of reception rooms in the property */ number | undefined | null
    receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined | null
    bathrooms?: /** The total number of bathrooms in the property */ number | undefined | null
    bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined | null
    parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    number | undefined | null
    councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
    string | undefined | null
    internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
    boolean | undefined | null
    viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined | null
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined | null
    videoCaption?: /** The caption for the video url associated with this property */ string | undefined | null
    video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
    string | undefined | null
    video2Caption?: /** The caption for the second video url associated with this property */ string | undefined | null
    notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    string | undefined | null
    longDescription?: /** The long description of the property */ string | undefined | null
    floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined | null
    internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined | null
    totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined | null
    boardStatus?: /** The status of the advertising board sited outside or near to the property */
    string | undefined | null
    boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
    string | undefined | null
    boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    string | undefined | null
    valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    string | undefined | null
    epc?: /** Request body used to update the EPC statistics of an existing property */
    | {
          exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
          boolean | undefined | null
          eer?: /** The current energy efficiency rating */ number | undefined | null
          eerPotential?: /** The potential energy efficiency rating */ number | undefined | null
          eir?: /** The current environmental impact rating */ number | undefined | null
          eirPotential?: /** The potential environmental impact rating */ number | undefined | null
          fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined | null
          firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined | null
        }
      | undefined
      | null
    externalArea?: /** Request body to update the external land area of an existing property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined | null
          min?: /** The minimum area bound */ number | undefined | null
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined | null
        }
      | undefined
      | null
    internalArea?: /** Request body to update the internal dimensions of an existing property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined | null
          min?: /** The minimum area bound */ number | undefined | null
          max?: /** The maximum area bound */ number | undefined | null
        }
      | undefined
      | null
    selling?: /** Request body used to update details specific to sales marketing on an existing property */
    | {
          instructed?: /** The date that the property was marked as for sale */ string | undefined | null
          price?: /** The marketing price of the property */ number | undefined | null
          reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
          number | undefined | null
          qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
          string | undefined | null
          status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
          string | undefined | null
          disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
          string | undefined | null
          completed?: /** The date the property sale was completed */ string | undefined | null
          exchanged?: /** The date the property was exchanged */ string | undefined | null
          accountPaid?: /** The date the property account was paid */ string | undefined | null
          tenure?: /** Request body used to set the tenure of an existing property */
          | {
                type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                string | undefined | null
                expiry?: /** The tenure expiration date */ string | undefined | null
              }
            | undefined
            | null
          sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
          string | undefined | null
          agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
          string | undefined | null
          agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
          string | undefined | null
          fee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
                amount?: /** The commission letting fee amount */ number | undefined | null
              }
            | undefined
            | null
          recommendedPrice?: /** The agent's recommended asking price */ number | undefined | null
          valuationPrice?: /** The agent's valuation price */ number | undefined | null
          brochureId?: /** The unique identifier of the document used for the sales brochure */
          string | undefined | null
          decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
          Array<string> | undefined | null
          sharedOwnership?: /** Details relating to the shared ownership of the property */
          | {
                sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */
                number | undefined | null
                rent?: /** The rent payable on the remainder of the shared ownership property */
                number | undefined | null
                rentFrequency?: /** The frequency at which the shared ownership rent should be paid */
                string | undefined | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    letting?: /** Request body used to update details specific to lettings marketing on an existing property */
    | {
          instructed?: /** The date the property was marked as to let */ string | undefined | null
          availableFrom?: /** The date the property is next available from */ string | undefined | null
          availableTo?: /** The date the property is available to */ string | undefined | null
          agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
          string | undefined | null
          rent?: /** The rent being charged for the property */ number | undefined | null
          rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
          string | undefined | null
          rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined | null
          furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
          Array<string> | undefined | null
          term?: /** The acceptable letting terms (short/long/any) */ string | undefined | null
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined | null
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined | null
          landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined | null
          brochureId?: /** The unique identifier of the document used for the lettings brochure */
          string | undefined | null
          worksOrderNote?: /** A note to accompany any works orders created for the property */
          string | undefined | null
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */
          number | undefined | null
          managementFee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
                amount?: /** The commission letting fee amount */ number | undefined | null
              }
            | undefined
            | null
          lettingFee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
                amount?: /** The commission letting fee amount */ number | undefined | null
              }
            | undefined
            | null
          qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined | null
          utilities?: /** Representation of property details specific to utilities */
          | {
                hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | undefined | null
                gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */
                string | undefined | null
                gasMeterPoint?: /** The gas meter point number */ string | undefined | null
                electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
                string | undefined | null
                electricityMeterPoint?: /** The electricity meter point number */ string | undefined | null
                waterCompanyId?: /** The unique identifier of the company supplying the water to the property */
                string | undefined | null
                waterMeterPoint?: /** The water meter point number */ string | undefined | null
                telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
                string | undefined | null
                internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
                string | undefined | null
                cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
                string | undefined | null
              }
            | undefined
            | null
          deposit?: /** Representation of a property details related to deposit */
          | {
                type?: /** The type of deposit (weeks/months/fixed) */ string | undefined | null
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
                number | undefined | null
              }
            | undefined
            | null
          rentInsurance?: /** Request body used to update details specific to rent insurance associated with a lettings property */
          | {
                status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
                string | undefined | null
                referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
                string | undefined | null
                start?: /** The insurance policy start date */ string | undefined | null
                end?: /** The insurance policy end date */ string | undefined | null
                cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
                string | undefined | null
                cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
                string | undefined | null
                autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */
                boolean | undefined | null
              }
            | undefined
            | null
          licencing?: /** Representation of property details specific to property Licencing */
          | {
                licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
                boolean | undefined | null
                licenceType?: /** The type of licence (additional/mandatory/none/selective) */ string | undefined | null
                households?: /** The number of households that the licence permits in the property */
                number | undefined | null
                occupants?: /** The number of occupants that the licence permits in the property */
                number | undefined | null
                aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
                boolean | undefined | null
                application?: /** Representation of property details specific to property licence application */
                | {
                      status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
                      string | undefined | null
                      referenceNumber?: /** The licence application reference number */ string | undefined | null
                      date?: /** The date the licence was applied for */ string | undefined | null
                      granted?: /** The date the licence application was granted */ string | undefined | null
                      expiry?: /** The date the licence will expire */ string | undefined | null
                    }
                  | undefined
                  | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    regional?: /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          irl?: /** Request body used to set the data specific to properties in Ireland */
          | {
                buildingEnergyRating?: /** Request body used to set the energy performance rating information for properties in Ireland */
                | {
                      exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                      boolean | undefined | null
                      rating?: /** The BER rating of the property */ string | undefined | null
                      refNumber?: /** The BER certificate reference number */ string | undefined | null
                      epi?: /** The energy performance indicator for the property */ string | undefined | null
                    }
                  | undefined
                  | null
              }
            | undefined
            | null
        }
      | undefined
      | null
    rural?: /** Request body used to set details specific to rural properties. */
    | {
          buildingsDescription?: /** Details of the building associated with the property. */ string | undefined | null
          landDescription?: /** Details of the land associated with the property. */ string | undefined | null
        }
      | undefined
      | null
    type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined | null
    negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | undefined | null
    officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
    areaId?: /** The unique identifier of the area that the property resides in */ string | undefined | null
    url?: /** The url to the property on an external website */ string | undefined | null
    urlCaption?: /** The caption to accompany the url to the property on an external website */
    string | undefined | null
    groundRent?: /** Any ground rent payment that applies to the property */ number | undefined | null
    groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined | null
    groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
    string | undefined | null
    groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
    number | undefined | null
    serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined | null
    serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined | null
    availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | undefined | null
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiPropertiesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiPropertiesIdArgs) => {
  const res = await fetch(`/properties/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`, {
    method: 'PATCH',
    body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
    },
  })

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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | undefined | null
    typeId?: /** The certificate's type */ string | undefined | null
    start?: /** The certificate's start date */ string | undefined | null
    expiry?: /** The certificate's expiry date */ string | undefined | null
    companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
    string | undefined | null
    notes?: /** Any general notes regarding the certificate */ string | undefined | null
    referenceNumber?: /** The certificate's reference number */ string | undefined | null
  }
}
export const postApiPropertiesIdCertificatesFn = async ({ id, body }: UsePostApiPropertiesIdCertificatesArgs) => {
  const res = await fetch(
    `/properties/${id}/certificates${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    start?: /** The certificate's start date */ string | undefined | null
    expiry?: /** The certificate's expiry date */ string | undefined | null
    companyId?: /** The unique identifier of the company */ string | undefined | null
    notes?: /** Any general notes regarding the certificate */ string | undefined | null
    referenceNumber?: /** The certificate's reference number */ string | undefined | null
  }
}
export const patchApiPropertiesIdCertificatesCertificateIdFn = async ({
  'If-Match': IfMatch,
  id,
  certificateId,
  body,
}: UsePatchApiPropertiesIdCertificatesCertificateIdArgs) => {
  const res = await fetch(
    `/properties/${id}/certificates/${certificateId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, certificateId, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
          typeId?: /** Identifier for the type of certificate for which the party is responsible */
          string | undefined | null
          responsibleParty?: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
          string | undefined | null
        }>
      | undefined
      | null
  }
}
export const patchApiPropertiesIdCertificatesResponsibilitiesFn = async ({
  'If-Match': IfMatch,
  id,
  body,
}: UsePatchApiPropertiesIdCertificatesResponsibilitiesArgs) => {
  const res = await fetch(
    `/properties/${id}/certificates/responsibilities${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
}
export const getApiPropertiesIdKeysFn = async ({ id, pageSize, pageNumber }: UseGetApiPropertiesIdKeysArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/properties/${id}/keys${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    string | undefined | null
    typeId?: /** The unique identifier of the key type */ string | undefined | null
    officeId?: /** The unique identifier of the office responsible for the key */ string | undefined | null
    keysInSet?: /** A listing of the individual keys included in the set */
    | Array</** Request body used to create an individual key included in a key set */
        { name?: /** The name of the individual key in the set */ string | undefined | null }>
      | undefined
      | null
  }
}
export const postApiPropertiesIdKeysFn = async ({ id, body }: UsePostApiPropertiesIdKeysArgs) => {
  const res = await fetch(
    `/properties/${id}/keys${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    boolean | undefined | null
    checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
    string | undefined | null
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | undefined | null
    checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
    string | undefined | null
  }
}
export const postApiPropertiesIdKeysKeyIdMovementsFn = async ({
  id,
  keyId,
  body,
}: UsePostApiPropertiesIdKeysKeyIdMovementsArgs) => {
  const res = await fetch(
    `/properties/${id}/keys/${keyId}/movements${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, keyId, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    string | undefined | null
  }
}
export const putApiPropertiesIdKeysKeyIdMovementsMovementIdFn = async ({
  id,
  keyId,
  movementId,
  body,
}: UsePutApiPropertiesIdKeysKeyIdMovementsMovementIdArgs) => {
  const res = await fetch(
    `/properties/${id}/keys/${keyId}/movements/${movementId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PUT',
      body: JSON.stringify({ id, keyId, movementId, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  type?: string | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    `/properties/${id}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    `/properties/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, checkId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
  { status?: /** The status of the check (needed/notNeeded/arranging/completed) */ string | undefined | null }
}
export const patchApiPropertiesIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  checkId,
  body,
}: UsePatchApiPropertiesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `/properties/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, checkId, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
  pageNumber?: number | undefined | null
  pageSize?: number | undefined | null
  sortBy?: string | undefined | null
  expiryDateFrom?: string | undefined | null
  expiryDateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  categories?: Array<string> | undefined | null
  typeIds?: Array<string> | undefined | null
  propertyIds?: Array<string> | undefined | null
  embed?: Array<'property'> | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
  pageNumber?: number | undefined | null
  pageSize?: number | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    companyId?: /** Unique identifier of the appraising company */ string | undefined | null
    date?: /** The date of the appraisal */ string | undefined | null
    price?: /** The appraisal value */ number | undefined | null
    fee?: /** Representation of the the commission fee for a property */
    | {
          type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
          amount?: /** The commission letting fee amount */ number | undefined | null
        }
      | undefined
      | null
    notes?: /** Free-text notes associated with the appraisal */ string | undefined | null
  }
}
export const postApiPropertiesIdAppraisalsFn = async ({ id, body }: UsePostApiPropertiesIdAppraisalsArgs) => {
  const res = await fetch(
    `/properties/${id}/appraisals${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    companyId?: /** Unique identifier of the appraising company */ string | undefined | null
    date?: /** The date of the appraisal */ string | undefined | null
    price?: /** The appraisal value */ number | undefined | null
    fee?: /** Representation of the the commission fee for a property */
    | {
          type?: /** The commission letting fee type (percentage/fixed) */ string | undefined | null
          amount?: /** The commission letting fee amount */ number | undefined | null
        }
      | undefined
      | null
    notes?: /** Free-text notes associated with the appraisal */ string | undefined | null
  }
}
export const patchApiPropertiesIdAppraisalsAppraisalIdFn = async ({
  'If-Match': IfMatch,
  id,
  appraisalId,
  body,
}: UsePatchApiPropertiesIdAppraisalsAppraisalIdArgs) => {
  const res = await fetch(
    `/properties/${id}/appraisals/${appraisalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, appraisalId, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
