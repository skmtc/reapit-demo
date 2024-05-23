import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiProperties,
  useGetApiPropertiesIdCertificates,
  useGetApiPropertiesIdKeys,
  useGetApiPropertiesIdKeysKeyIdMovements,
  useGetApiPropertiesIdChecks,
  useGetApiPropertiesCertificates,
  useGetApiPropertiesIdAppraisals,
} from '@/services/properties.ts'

export const propertiesBody = z.object({
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
export type PropertiesBody = {
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  lastCall?: string | undefined | null
  nextCall?: string | undefined | null
  marketingMode?: string | undefined | null
  currency?: string | undefined | null
  alternateId?: string | undefined | null
  address?:
    | {
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        countryId?: string | undefined | null
        localTimeZone?: string | undefined | null
        geolocation?: { latitude?: number | undefined | null; longitude?: number | undefined | null } | undefined | null
      }
    | undefined
    | null
  areaId?: string | undefined | null
  strapline?: string | undefined | null
  description?: string | undefined | null
  longDescription?: string | undefined | null
  localAuthorityCompanyId?: string | undefined | null
  localAuthorityCompanyName?: string | undefined | null
  summary?: string | undefined | null
  departmentId?: string | undefined | null
  negotiatorId?: string | undefined | null
  bedrooms?: number | undefined | null
  bedroomsMax?: number | undefined | null
  receptions?: number | undefined | null
  receptionsMax?: number | undefined | null
  bathrooms?: number | undefined | null
  bathroomsMax?: number | undefined | null
  numberOfUnits?: number | undefined | null
  parkingSpaces?: number | undefined | null
  councilTax?: string | undefined | null
  disabledPortalIds?: Array<string> | undefined | null
  internetAdvertising?: boolean | undefined | null
  isExternal?: boolean | undefined | null
  viewingArrangements?: string | undefined | null
  videoUrl?: string | undefined | null
  videoCaption?: string | undefined | null
  video2Url?: string | undefined | null
  video2Caption?: string | undefined | null
  notes?: string | undefined | null
  boardStatus?: string | undefined | null
  boardNotes?: string | undefined | null
  featuredImageUrl?: string | undefined | null
  url?: string | undefined | null
  urlCaption?: string | undefined | null
  groundRent?: number | undefined | null
  groundRentComment?: string | undefined | null
  groundRentReviewDate?: string | undefined | null
  groundRentIncrease?: number | undefined | null
  serviceCharge?: number | undefined | null
  serviceChargeComment?: string | undefined | null
  floorLevel?: number | undefined | null
  internalFloors?: number | undefined | null
  totalFloors?: number | undefined | null
  boardUpdated?: string | undefined | null
  valuation?: string | undefined | null
  archivedOn?: string | undefined | null
  fromArchive?: boolean | undefined | null
  rural?:
    | {
        tenureId?: string | undefined | null
        buildingsDescription?: string | undefined | null
        landDescription?: string | undefined | null
      }
    | undefined
    | null
  externalArea?:
    | { type?: string | undefined | null; min?: number | undefined | null; max?: number | undefined | null }
    | undefined
    | null
  internalArea?:
    | { type?: string | undefined | null; min?: number | undefined | null; max?: number | undefined | null }
    | undefined
    | null
  epc?:
    | {
        exempt?: boolean | undefined | null
        eer?: number | undefined | null
        eerRating?: string | undefined | null
        eerPotential?: number | undefined | null
        eerPotentialRating?: string | undefined | null
        eir?: number | undefined | null
        eirRating?: string | undefined | null
        eirPotential?: number | undefined | null
        eirPotentialRating?: string | undefined | null
        fullDocumentUrl?: string | undefined | null
        firstPageDocumentUrl?: string | undefined | null
      }
    | undefined
    | null
  selling?:
    | {
        instructed?: string | undefined | null
        price?: number | undefined | null
        priceTo?: number | undefined | null
        reservationFee?: number | undefined | null
        qualifier?: string | undefined | null
        status?: string | undefined | null
        disposal?: string | undefined | null
        completed?: string | undefined | null
        exchanged?: string | undefined | null
        accountPaid?: string | undefined | null
        tenure?: { type?: string | undefined | null; expiry?: string | undefined | null } | undefined | null
        vendorId?: string | undefined | null
        agency?: string | undefined | null
        agencyId?: string | undefined | null
        agreementExpiry?: string | undefined | null
        fee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        exchangedCompanyFee?: number | undefined | null
        recommendedPrice?: number | undefined | null
        valuationPrice?: number | undefined | null
        brochureId?: string | undefined | null
        publicBrochureUrl?: string | undefined | null
        exchangedPrice?: number | undefined | null
        exchangedOfficeId?: string | undefined | null
        decoration?: Array<string> | undefined | null
        sharedOwnership?:
          | {
              sharedPercentage?: number | undefined | null
              rent?: number | undefined | null
              rentFrequency?: string | undefined | null
            }
          | undefined
          | null
        subAgentTerms?:
          | {
              feeAvailable?: boolean | undefined | null
              type?: string | undefined | null
              amount?: number | undefined | null
            }
          | undefined
          | null
      }
    | undefined
    | null
  letting?:
    | {
        instructed?: string | undefined | null
        availableFrom?: string | undefined | null
        availableTo?: string | undefined | null
        agreementSigned?: string | undefined | null
        rent?: number | undefined | null
        rentFrequency?: string | undefined | null
        rentIncludes?: string | undefined | null
        furnishing?: Array<string> | undefined | null
        term?: string | undefined | null
        status?: string | undefined | null
        agentRole?: string | undefined | null
        landlordId?: string | undefined | null
        worksOrderNote?: string | undefined | null
        minimumTerm?: number | undefined | null
        propertyManagerId?: string | undefined | null
        managementCompanyIds?: Array<string> | undefined | null
        brochureId?: string | undefined | null
        publicBrochureUrl?: string | undefined | null
        managementFee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        lettingFee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        qualifier?: string | undefined | null
        utilities?:
          | {
              hasGas?: boolean | undefined | null
              gasCompanyId?: string | undefined | null
              gasMeterPoint?: string | undefined | null
              electricityCompanyId?: string | undefined | null
              electricityMeterPoint?: string | undefined | null
              waterCompanyId?: string | undefined | null
              waterMeterPoint?: string | undefined | null
              telephoneCompanyId?: string | undefined | null
              internetCompanyId?: string | undefined | null
              cableTvCompanyId?: string | undefined | null
            }
          | undefined
          | null
        deposit?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        rentInsurance?:
          | {
              status?: string | undefined | null
              referenceNumber?: string | undefined | null
              start?: string | undefined | null
              end?: string | undefined | null
              cancelledReasonId?: string | undefined | null
              cancelledComment?: string | undefined | null
              autoRenew?: boolean | undefined | null
            }
          | undefined
          | null
        licencing?:
          | {
              licenceRequired?: boolean | undefined | null
              licenceType?: string | undefined | null
              households?: number | undefined | null
              occupants?: number | undefined | null
              aboveCommercialPremises?: boolean | undefined | null
              application?:
                | {
                    status?: string | undefined | null
                    referenceNumber?: string | undefined | null
                    date?: string | undefined | null
                    granted?: string | undefined | null
                    expiry?: string | undefined | null
                  }
                | undefined
                | null
            }
          | undefined
          | null
      }
    | undefined
    | null
  commercial?:
    | { useClass?: Array<string> | undefined | null; floorLevel?: Array<string> | undefined | null }
    | undefined
    | null
  regional?:
    | {
        ggy?: { market?: Array<string> | undefined | null } | undefined | null
        irl?:
          | {
              buildingEnergyRating?:
                | {
                    exempt?: boolean | undefined | null
                    rating?: string | undefined | null
                    refNumber?: string | undefined | null
                    epi?: string | undefined | null
                  }
                | undefined
                | null
            }
          | undefined
          | null
      }
    | undefined
    | null
  type?: Array<string> | undefined | null
  style?: Array<string> | undefined | null
  situation?: Array<string> | undefined | null
  parking?: Array<string> | undefined | null
  age?: Array<string> | undefined | null
  locality?: Array<string> | undefined | null
  specialFeatures?: Array<string> | undefined | null
  unmappedAttributes?: Array<{ type?: string | undefined | null; value?: string | undefined | null }> | undefined | null
  availableServicesIds?: Array<string> | undefined | null
  rooms?:
    | Array<{
        name?: string | undefined | null
        dimensions?: string | undefined | null
        dimensionsAlt?: string | undefined | null
        description?: string | undefined | null
      }>
    | undefined
    | null
  roomDetailsApproved?: boolean | undefined | null
  officeIds?: Array<string> | undefined | null
  lostInstructionDate?: string | undefined | null
  lostInstructionNote?: string | undefined | null
  developmentSiteType?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  keywords?: Array<string> | undefined | null
  extrasField?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
}
export type PropertiesArgs = {
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
  columns: ColumnsList<PropertiesBody>
}
export const propertiesIdCertificatesBody = z.object({
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
export type PropertiesIdCertificatesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  category?: string | undefined | null
  typeId?: string | undefined | null
  start?: string | undefined | null
  expiry?: string | undefined | null
  propertyId?: string | undefined | null
  companyId?: string | undefined | null
  statusId?: string | undefined | null
  notes?: string | undefined | null
  referenceNumber?: string | undefined | null
  responsibleParty?: string | undefined | null
  _eTag?: string | undefined | null
}
export type PropertiesIdCertificatesArgs = {
  id: string
  category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | undefined | null
  columns: ColumnsList<PropertiesIdCertificatesBody>
}
export const propertiesIdKeysBody = z.object({
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
export type PropertiesIdKeysBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  number?: string | undefined | null
  typeId?: string | undefined | null
  officeId?: string | undefined | null
  propertyId?: string | undefined | null
  status?: string | undefined | null
  keysInSet?: Array<{ name?: string | undefined | null }> | undefined | null
  _eTag?: string | undefined | null
}
export type PropertiesIdKeysArgs = { id: string; columns: ColumnsList<PropertiesIdKeysBody> }
export const propertiesIdKeysKeyIdMovementsBody = z.object({
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
export type PropertiesIdKeysKeyIdMovementsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  keyId?: string | undefined | null
  propertyId?: string | undefined | null
  checkOutToId?: string | undefined | null
  checkOutToType?: string | undefined | null
  checkOutAt?: string | undefined | null
  checkOutNegotiatorId?: string | undefined | null
  checkInAt?: string | undefined | null
  checkInNegotiatorId?: string | undefined | null
  _eTag?: string | undefined | null
}
export type PropertiesIdKeysKeyIdMovementsArgs = {
  id: string
  keyId: string
  columns: ColumnsList<PropertiesIdKeysKeyIdMovementsBody>
}
export const propertiesIdChecksBody = z.object({
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
export type PropertiesIdChecksBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  description?: string | undefined | null
  status?: string | undefined | null
  type?: string | undefined | null
  propertyId?: string | undefined | null
  _eTag?: string | undefined | null
}
export type PropertiesIdChecksArgs = {
  id: string
  type?: string | undefined | null
  columns: ColumnsList<PropertiesIdChecksBody>
}
export const propertiesCertificatesBody = z.object({
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
export type PropertiesCertificatesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  category?: string | undefined | null
  typeId?: string | undefined | null
  start?: string | undefined | null
  expiry?: string | undefined | null
  propertyId?: string | undefined | null
  companyId?: string | undefined | null
  statusId?: string | undefined | null
  notes?: string | undefined | null
  referenceNumber?: string | undefined | null
  responsibleParty?: string | undefined | null
  _eTag?: string | undefined | null
}
export type PropertiesCertificatesArgs = {
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
  columns: ColumnsList<PropertiesCertificatesBody>
}
export const propertiesIdAppraisalsBody = z.object({
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
export type PropertiesIdAppraisalsBody = {
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  companyId?: string | undefined | null
  isExternal?: boolean | undefined | null
  date?: string | undefined | null
  price?: number | undefined | null
  fee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
  notes?: string | undefined | null
  _eTag?: string | undefined | null
}
export type PropertiesIdAppraisalsArgs = { id: string; columns: ColumnsList<PropertiesIdAppraisalsBody> }

export const propertiesColumnHelper = createColumnHelper<PropertiesBody>()

export const getPropertiesColumn = (property: string, { label, format }: ConfigItemLookup<PropertiesBody>) => {
  return match(property)
    .with('_embedded', () => {
      return propertiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('lastCall', () => {
      return propertiesColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header: label('lastCall'),
        cell: (info) => format(info.getValue(), 'lastCall'),
      })
    })
    .with('nextCall', () => {
      return propertiesColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header: label('nextCall'),
        cell: (info) => format(info.getValue(), 'nextCall'),
      })
    })
    .with('marketingMode', () => {
      return propertiesColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header: label('marketingMode'),
        cell: (info) => format(info.getValue(), 'marketingMode'),
      })
    })
    .with('currency', () => {
      return propertiesColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header: label('currency'),
        cell: (info) => format(info.getValue(), 'currency'),
      })
    })
    .with('alternateId', () => {
      return propertiesColumnHelper.accessor((row) => row.alternateId, {
        id: 'alternateId',
        header: label('alternateId'),
        cell: (info) => format(info.getValue(), 'alternateId'),
      })
    })
    .with('address', () => {
      return propertiesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header: label('address'),
        cell: (info) => format(info.getValue(), 'address'),
      })
    })
    .with('areaId', () => {
      return propertiesColumnHelper.accessor((row) => row.areaId, {
        id: 'areaId',
        header: label('areaId'),
        cell: (info) => format(info.getValue(), 'areaId'),
      })
    })
    .with('strapline', () => {
      return propertiesColumnHelper.accessor((row) => row.strapline, {
        id: 'strapline',
        header: label('strapline'),
        cell: (info) => format(info.getValue(), 'strapline'),
      })
    })
    .with('description', () => {
      return propertiesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('longDescription', () => {
      return propertiesColumnHelper.accessor((row) => row.longDescription, {
        id: 'longDescription',
        header: label('longDescription'),
        cell: (info) => format(info.getValue(), 'longDescription'),
      })
    })
    .with('localAuthorityCompanyId', () => {
      return propertiesColumnHelper.accessor((row) => row.localAuthorityCompanyId, {
        id: 'localAuthorityCompanyId',
        header: label('localAuthorityCompanyId'),
        cell: (info) => format(info.getValue(), 'localAuthorityCompanyId'),
      })
    })
    .with('localAuthorityCompanyName', () => {
      return propertiesColumnHelper.accessor((row) => row.localAuthorityCompanyName, {
        id: 'localAuthorityCompanyName',
        header: label('localAuthorityCompanyName'),
        cell: (info) => format(info.getValue(), 'localAuthorityCompanyName'),
      })
    })
    .with('summary', () => {
      return propertiesColumnHelper.accessor((row) => row.summary, {
        id: 'summary',
        header: label('summary'),
        cell: (info) => format(info.getValue(), 'summary'),
      })
    })
    .with('departmentId', () => {
      return propertiesColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header: label('departmentId'),
        cell: (info) => format(info.getValue(), 'departmentId'),
      })
    })
    .with('negotiatorId', () => {
      return propertiesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('bedrooms', () => {
      return propertiesColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header: label('bedrooms'),
        cell: (info) => format(info.getValue(), 'bedrooms'),
      })
    })
    .with('bedroomsMax', () => {
      return propertiesColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header: label('bedroomsMax'),
        cell: (info) => format(info.getValue(), 'bedroomsMax'),
      })
    })
    .with('receptions', () => {
      return propertiesColumnHelper.accessor((row) => row.receptions, {
        id: 'receptions',
        header: label('receptions'),
        cell: (info) => format(info.getValue(), 'receptions'),
      })
    })
    .with('receptionsMax', () => {
      return propertiesColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header: label('receptionsMax'),
        cell: (info) => format(info.getValue(), 'receptionsMax'),
      })
    })
    .with('bathrooms', () => {
      return propertiesColumnHelper.accessor((row) => row.bathrooms, {
        id: 'bathrooms',
        header: label('bathrooms'),
        cell: (info) => format(info.getValue(), 'bathrooms'),
      })
    })
    .with('bathroomsMax', () => {
      return propertiesColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header: label('bathroomsMax'),
        cell: (info) => format(info.getValue(), 'bathroomsMax'),
      })
    })
    .with('numberOfUnits', () => {
      return propertiesColumnHelper.accessor((row) => row.numberOfUnits, {
        id: 'numberOfUnits',
        header: label('numberOfUnits'),
        cell: (info) => format(info.getValue(), 'numberOfUnits'),
      })
    })
    .with('parkingSpaces', () => {
      return propertiesColumnHelper.accessor((row) => row.parkingSpaces, {
        id: 'parkingSpaces',
        header: label('parkingSpaces'),
        cell: (info) => format(info.getValue(), 'parkingSpaces'),
      })
    })
    .with('councilTax', () => {
      return propertiesColumnHelper.accessor((row) => row.councilTax, {
        id: 'councilTax',
        header: label('councilTax'),
        cell: (info) => format(info.getValue(), 'councilTax'),
      })
    })
    .with('disabledPortalIds', () => {
      return propertiesColumnHelper.accessor((row) => row.disabledPortalIds, {
        id: 'disabledPortalIds',
        header: label('disabledPortalIds'),
        cell: (info) => format(info.getValue(), 'disabledPortalIds'),
      })
    })
    .with('internetAdvertising', () => {
      return propertiesColumnHelper.accessor((row) => row.internetAdvertising, {
        id: 'internetAdvertising',
        header: label('internetAdvertising'),
        cell: (info) => format(info.getValue(), 'internetAdvertising'),
      })
    })
    .with('isExternal', () => {
      return propertiesColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header: label('isExternal'),
        cell: (info) => format(info.getValue(), 'isExternal'),
      })
    })
    .with('viewingArrangements', () => {
      return propertiesColumnHelper.accessor((row) => row.viewingArrangements, {
        id: 'viewingArrangements',
        header: label('viewingArrangements'),
        cell: (info) => format(info.getValue(), 'viewingArrangements'),
      })
    })
    .with('videoUrl', () => {
      return propertiesColumnHelper.accessor((row) => row.videoUrl, {
        id: 'videoUrl',
        header: label('videoUrl'),
        cell: (info) => format(info.getValue(), 'videoUrl'),
      })
    })
    .with('videoCaption', () => {
      return propertiesColumnHelper.accessor((row) => row.videoCaption, {
        id: 'videoCaption',
        header: label('videoCaption'),
        cell: (info) => format(info.getValue(), 'videoCaption'),
      })
    })
    .with('video2Url', () => {
      return propertiesColumnHelper.accessor((row) => row.video2Url, {
        id: 'video2Url',
        header: label('video2Url'),
        cell: (info) => format(info.getValue(), 'video2Url'),
      })
    })
    .with('video2Caption', () => {
      return propertiesColumnHelper.accessor((row) => row.video2Caption, {
        id: 'video2Caption',
        header: label('video2Caption'),
        cell: (info) => format(info.getValue(), 'video2Caption'),
      })
    })
    .with('notes', () => {
      return propertiesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('boardStatus', () => {
      return propertiesColumnHelper.accessor((row) => row.boardStatus, {
        id: 'boardStatus',
        header: label('boardStatus'),
        cell: (info) => format(info.getValue(), 'boardStatus'),
      })
    })
    .with('boardNotes', () => {
      return propertiesColumnHelper.accessor((row) => row.boardNotes, {
        id: 'boardNotes',
        header: label('boardNotes'),
        cell: (info) => format(info.getValue(), 'boardNotes'),
      })
    })
    .with('featuredImageUrl', () => {
      return propertiesColumnHelper.accessor((row) => row.featuredImageUrl, {
        id: 'featuredImageUrl',
        header: label('featuredImageUrl'),
        cell: (info) => format(info.getValue(), 'featuredImageUrl'),
      })
    })
    .with('url', () => {
      return propertiesColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header: label('url'),
        cell: (info) => format(info.getValue(), 'url'),
      })
    })
    .with('urlCaption', () => {
      return propertiesColumnHelper.accessor((row) => row.urlCaption, {
        id: 'urlCaption',
        header: label('urlCaption'),
        cell: (info) => format(info.getValue(), 'urlCaption'),
      })
    })
    .with('groundRent', () => {
      return propertiesColumnHelper.accessor((row) => row.groundRent, {
        id: 'groundRent',
        header: label('groundRent'),
        cell: (info) => format(info.getValue(), 'groundRent'),
      })
    })
    .with('groundRentComment', () => {
      return propertiesColumnHelper.accessor((row) => row.groundRentComment, {
        id: 'groundRentComment',
        header: label('groundRentComment'),
        cell: (info) => format(info.getValue(), 'groundRentComment'),
      })
    })
    .with('groundRentReviewDate', () => {
      return propertiesColumnHelper.accessor((row) => row.groundRentReviewDate, {
        id: 'groundRentReviewDate',
        header: label('groundRentReviewDate'),
        cell: (info) => format(info.getValue(), 'groundRentReviewDate'),
      })
    })
    .with('groundRentIncrease', () => {
      return propertiesColumnHelper.accessor((row) => row.groundRentIncrease, {
        id: 'groundRentIncrease',
        header: label('groundRentIncrease'),
        cell: (info) => format(info.getValue(), 'groundRentIncrease'),
      })
    })
    .with('serviceCharge', () => {
      return propertiesColumnHelper.accessor((row) => row.serviceCharge, {
        id: 'serviceCharge',
        header: label('serviceCharge'),
        cell: (info) => format(info.getValue(), 'serviceCharge'),
      })
    })
    .with('serviceChargeComment', () => {
      return propertiesColumnHelper.accessor((row) => row.serviceChargeComment, {
        id: 'serviceChargeComment',
        header: label('serviceChargeComment'),
        cell: (info) => format(info.getValue(), 'serviceChargeComment'),
      })
    })
    .with('floorLevel', () => {
      return propertiesColumnHelper.accessor((row) => row.floorLevel, {
        id: 'floorLevel',
        header: label('floorLevel'),
        cell: (info) => format(info.getValue(), 'floorLevel'),
      })
    })
    .with('internalFloors', () => {
      return propertiesColumnHelper.accessor((row) => row.internalFloors, {
        id: 'internalFloors',
        header: label('internalFloors'),
        cell: (info) => format(info.getValue(), 'internalFloors'),
      })
    })
    .with('totalFloors', () => {
      return propertiesColumnHelper.accessor((row) => row.totalFloors, {
        id: 'totalFloors',
        header: label('totalFloors'),
        cell: (info) => format(info.getValue(), 'totalFloors'),
      })
    })
    .with('boardUpdated', () => {
      return propertiesColumnHelper.accessor((row) => row.boardUpdated, {
        id: 'boardUpdated',
        header: label('boardUpdated'),
        cell: (info) => format(info.getValue(), 'boardUpdated'),
      })
    })
    .with('valuation', () => {
      return propertiesColumnHelper.accessor((row) => row.valuation, {
        id: 'valuation',
        header: label('valuation'),
        cell: (info) => format(info.getValue(), 'valuation'),
      })
    })
    .with('archivedOn', () => {
      return propertiesColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header: label('archivedOn'),
        cell: (info) => format(info.getValue(), 'archivedOn'),
      })
    })
    .with('fromArchive', () => {
      return propertiesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .with('rural', () => {
      return propertiesColumnHelper.accessor((row) => row.rural, {
        id: 'rural',
        header: label('rural'),
        cell: (info) => format(info.getValue(), 'rural'),
      })
    })
    .with('externalArea', () => {
      return propertiesColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header: label('externalArea'),
        cell: (info) => format(info.getValue(), 'externalArea'),
      })
    })
    .with('internalArea', () => {
      return propertiesColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header: label('internalArea'),
        cell: (info) => format(info.getValue(), 'internalArea'),
      })
    })
    .with('epc', () => {
      return propertiesColumnHelper.accessor((row) => row.epc, {
        id: 'epc',
        header: label('epc'),
        cell: (info) => format(info.getValue(), 'epc'),
      })
    })
    .with('selling', () => {
      return propertiesColumnHelper.accessor((row) => row.selling, {
        id: 'selling',
        header: label('selling'),
        cell: (info) => format(info.getValue(), 'selling'),
      })
    })
    .with('letting', () => {
      return propertiesColumnHelper.accessor((row) => row.letting, {
        id: 'letting',
        header: label('letting'),
        cell: (info) => format(info.getValue(), 'letting'),
      })
    })
    .with('commercial', () => {
      return propertiesColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header: label('commercial'),
        cell: (info) => format(info.getValue(), 'commercial'),
      })
    })
    .with('regional', () => {
      return propertiesColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header: label('regional'),
        cell: (info) => format(info.getValue(), 'regional'),
      })
    })
    .with('type', () => {
      return propertiesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('style', () => {
      return propertiesColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header: label('style'),
        cell: (info) => format(info.getValue(), 'style'),
      })
    })
    .with('situation', () => {
      return propertiesColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header: label('situation'),
        cell: (info) => format(info.getValue(), 'situation'),
      })
    })
    .with('parking', () => {
      return propertiesColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header: label('parking'),
        cell: (info) => format(info.getValue(), 'parking'),
      })
    })
    .with('age', () => {
      return propertiesColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header: label('age'),
        cell: (info) => format(info.getValue(), 'age'),
      })
    })
    .with('locality', () => {
      return propertiesColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header: label('locality'),
        cell: (info) => format(info.getValue(), 'locality'),
      })
    })
    .with('specialFeatures', () => {
      return propertiesColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header: label('specialFeatures'),
        cell: (info) => format(info.getValue(), 'specialFeatures'),
      })
    })
    .with('unmappedAttributes', () => {
      return propertiesColumnHelper.accessor((row) => row.unmappedAttributes, {
        id: 'unmappedAttributes',
        header: label('unmappedAttributes'),
        cell: (info) => format(info.getValue(), 'unmappedAttributes'),
      })
    })
    .with('availableServicesIds', () => {
      return propertiesColumnHelper.accessor((row) => row.availableServicesIds, {
        id: 'availableServicesIds',
        header: label('availableServicesIds'),
        cell: (info) => format(info.getValue(), 'availableServicesIds'),
      })
    })
    .with('rooms', () => {
      return propertiesColumnHelper.accessor((row) => row.rooms, {
        id: 'rooms',
        header: label('rooms'),
        cell: (info) => format(info.getValue(), 'rooms'),
      })
    })
    .with('roomDetailsApproved', () => {
      return propertiesColumnHelper.accessor((row) => row.roomDetailsApproved, {
        id: 'roomDetailsApproved',
        header: label('roomDetailsApproved'),
        cell: (info) => format(info.getValue(), 'roomDetailsApproved'),
      })
    })
    .with('officeIds', () => {
      return propertiesColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header: label('officeIds'),
        cell: (info) => format(info.getValue(), 'officeIds'),
      })
    })
    .with('lostInstructionDate', () => {
      return propertiesColumnHelper.accessor((row) => row.lostInstructionDate, {
        id: 'lostInstructionDate',
        header: label('lostInstructionDate'),
        cell: (info) => format(info.getValue(), 'lostInstructionDate'),
      })
    })
    .with('lostInstructionNote', () => {
      return propertiesColumnHelper.accessor((row) => row.lostInstructionNote, {
        id: 'lostInstructionNote',
        header: label('lostInstructionNote'),
        cell: (info) => format(info.getValue(), 'lostInstructionNote'),
      })
    })
    .with('developmentSiteType', () => {
      return propertiesColumnHelper.accessor((row) => row.developmentSiteType, {
        id: 'developmentSiteType',
        header: label('developmentSiteType'),
        cell: (info) => format(info.getValue(), 'developmentSiteType'),
      })
    })
    .with('metadata', () => {
      return propertiesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('keywords', () => {
      return propertiesColumnHelper.accessor((row) => row.keywords, {
        id: 'keywords',
        header: label('keywords'),
        cell: (info) => format(info.getValue(), 'keywords'),
      })
    })
    .with('extrasField', () => {
      return propertiesColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header: label('extrasField'),
        cell: (info) => format(info.getValue(), 'extrasField'),
      })
    })
    .with('_eTag', () => {
      return propertiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .with('_links', () => {
      return propertiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesTable = (args: PropertiesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiProperties({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const propertiesIdCertificatesColumnHelper = createColumnHelper<PropertiesIdCertificatesBody>()

export const getPropertiesIdCertificatesColumn = (
  property: string,
  { label, format }: ConfigItemLookup<PropertiesIdCertificatesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('category', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header: label('category'),
        cell: (info) => format(info.getValue(), 'category'),
      })
    })
    .with('typeId', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('start', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header: label('start'),
        cell: (info) => format(info.getValue(), 'start'),
      })
    })
    .with('expiry', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.expiry, {
        id: 'expiry',
        header: label('expiry'),
        cell: (info) => format(info.getValue(), 'expiry'),
      })
    })
    .with('propertyId', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('companyId', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('statusId', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header: label('statusId'),
        cell: (info) => format(info.getValue(), 'statusId'),
      })
    })
    .with('notes', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('referenceNumber', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.referenceNumber, {
        id: 'referenceNumber',
        header: label('referenceNumber'),
        cell: (info) => format(info.getValue(), 'referenceNumber'),
      })
    })
    .with('responsibleParty', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row.responsibleParty, {
        id: 'responsibleParty',
        header: label('responsibleParty'),
        cell: (info) => format(info.getValue(), 'responsibleParty'),
      })
    })
    .with('_eTag', () => {
      return propertiesIdCertificatesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdCertificatesTable = (args: PropertiesIdCertificatesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdCertificates({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const propertiesIdKeysColumnHelper = createColumnHelper<PropertiesIdKeysBody>()

export const getPropertiesIdKeysColumn = (
  property: string,
  { label, format }: ConfigItemLookup<PropertiesIdKeysBody>,
) => {
  return match(property)
    .with('_links', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('number', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.number, {
        id: 'number',
        header: label('number'),
        cell: (info) => format(info.getValue(), 'number'),
      })
    })
    .with('typeId', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('officeId', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header: label('officeId'),
        cell: (info) => format(info.getValue(), 'officeId'),
      })
    })
    .with('propertyId', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('status', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('keysInSet', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row.keysInSet, {
        id: 'keysInSet',
        header: label('keysInSet'),
        cell: (info) => format(info.getValue(), 'keysInSet'),
      })
    })
    .with('_eTag', () => {
      return propertiesIdKeysColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdKeysTable = (args: PropertiesIdKeysArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdKeys({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const propertiesIdKeysKeyIdMovementsColumnHelper = createColumnHelper<PropertiesIdKeysKeyIdMovementsBody>()

export const getPropertiesIdKeysKeyIdMovementsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<PropertiesIdKeysKeyIdMovementsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('keyId', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.keyId, {
        id: 'keyId',
        header: label('keyId'),
        cell: (info) => format(info.getValue(), 'keyId'),
      })
    })
    .with('propertyId', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('checkOutToId', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutToId, {
        id: 'checkOutToId',
        header: label('checkOutToId'),
        cell: (info) => format(info.getValue(), 'checkOutToId'),
      })
    })
    .with('checkOutToType', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutToType, {
        id: 'checkOutToType',
        header: label('checkOutToType'),
        cell: (info) => format(info.getValue(), 'checkOutToType'),
      })
    })
    .with('checkOutAt', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutAt, {
        id: 'checkOutAt',
        header: label('checkOutAt'),
        cell: (info) => format(info.getValue(), 'checkOutAt'),
      })
    })
    .with('checkOutNegotiatorId', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutNegotiatorId, {
        id: 'checkOutNegotiatorId',
        header: label('checkOutNegotiatorId'),
        cell: (info) => format(info.getValue(), 'checkOutNegotiatorId'),
      })
    })
    .with('checkInAt', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkInAt, {
        id: 'checkInAt',
        header: label('checkInAt'),
        cell: (info) => format(info.getValue(), 'checkInAt'),
      })
    })
    .with('checkInNegotiatorId', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkInNegotiatorId, {
        id: 'checkInNegotiatorId',
        header: label('checkInNegotiatorId'),
        cell: (info) => format(info.getValue(), 'checkInNegotiatorId'),
      })
    })
    .with('_eTag', () => {
      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdKeysKeyIdMovementsTable = (args: PropertiesIdKeysKeyIdMovementsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdKeysKeyIdMovements({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const propertiesIdChecksColumnHelper = createColumnHelper<PropertiesIdChecksBody>()

export const getPropertiesIdChecksColumn = (
  property: string,
  { label, format }: ConfigItemLookup<PropertiesIdChecksBody>,
) => {
  return match(property)
    .with('_links', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('description', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('status', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('type', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('propertyId', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('_eTag', () => {
      return propertiesIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdChecksTable = (args: PropertiesIdChecksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const propertiesCertificatesColumnHelper = createColumnHelper<PropertiesCertificatesBody>()

export const getPropertiesCertificatesColumn = (
  property: string,
  { label, format }: ConfigItemLookup<PropertiesCertificatesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('category', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header: label('category'),
        cell: (info) => format(info.getValue(), 'category'),
      })
    })
    .with('typeId', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('start', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header: label('start'),
        cell: (info) => format(info.getValue(), 'start'),
      })
    })
    .with('expiry', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.expiry, {
        id: 'expiry',
        header: label('expiry'),
        cell: (info) => format(info.getValue(), 'expiry'),
      })
    })
    .with('propertyId', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('companyId', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('statusId', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header: label('statusId'),
        cell: (info) => format(info.getValue(), 'statusId'),
      })
    })
    .with('notes', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('referenceNumber', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.referenceNumber, {
        id: 'referenceNumber',
        header: label('referenceNumber'),
        cell: (info) => format(info.getValue(), 'referenceNumber'),
      })
    })
    .with('responsibleParty', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row.responsibleParty, {
        id: 'responsibleParty',
        header: label('responsibleParty'),
        cell: (info) => format(info.getValue(), 'responsibleParty'),
      })
    })
    .with('_eTag', () => {
      return propertiesCertificatesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesCertificatesTable = (args: PropertiesCertificatesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesCertificates({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const propertiesIdAppraisalsColumnHelper = createColumnHelper<PropertiesIdAppraisalsBody>()

export const getPropertiesIdAppraisalsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<PropertiesIdAppraisalsBody>,
) => {
  return match(property)
    .with('id', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('companyId', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('isExternal', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header: label('isExternal'),
        cell: (info) => format(info.getValue(), 'isExternal'),
      })
    })
    .with('date', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format(info.getValue(), 'date'),
      })
    })
    .with('price', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.price, {
        id: 'price',
        header: label('price'),
        cell: (info) => format(info.getValue(), 'price'),
      })
    })
    .with('fee', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.fee, {
        id: 'fee',
        header: label('fee'),
        cell: (info) => format(info.getValue(), 'fee'),
      })
    })
    .with('notes', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('_eTag', () => {
      return propertiesIdAppraisalsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdAppraisalsTable = (args: PropertiesIdAppraisalsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdAppraisals({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
