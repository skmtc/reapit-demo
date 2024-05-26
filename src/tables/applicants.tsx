import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiApplicants, useGetApiApplicantsIdRelationships } from '@/services/applicants.ts'

export const applicantsBody = z.object({
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
export type ApplicantsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  marketingMode?: string | undefined
  currency?: string | undefined
  active?: boolean | undefined
  notes?: string | undefined
  sellingStatus?: string | undefined
  sellingPosition?: string | undefined
  statusId?: string | undefined
  lastCall?: string | undefined
  nextCall?: string | undefined
  departmentId?: string | undefined
  solicitorId?: string | undefined
  potentialClient?: boolean | undefined
  type?: Array<string> | undefined
  style?: Array<string> | undefined
  situation?: Array<string> | undefined
  parking?: Array<string> | undefined
  age?: Array<string> | undefined
  locality?: Array<string> | undefined
  specialFeatures?: Array<string> | undefined
  unmappedRequirements?: Array<{ type?: string | undefined; value?: string | undefined }> | undefined
  bedroomsMin?: number | undefined
  bedroomsMax?: number | undefined
  receptionsMin?: number | undefined
  receptionsMax?: number | undefined
  bathroomsMin?: number | undefined
  bathroomsMax?: number | undefined
  parkingSpacesMin?: number | undefined
  parkingSpacesMax?: number | undefined
  locationType?: string | undefined
  locationOptions?: Array<string> | undefined
  archivedOn?: string | undefined
  fromArchive?: boolean | undefined
  buying?:
    | {
        priceFrom?: number | undefined
        priceTo?: number | undefined
        decoration?: Array<string> | undefined
        reasonId?: string | undefined
        positionId?: string | undefined
        tenure?: Array<string> | undefined
        mortgageExpiry?: string | undefined
        leaseRemaining?: { min?: number | undefined; max?: number | undefined } | undefined
      }
    | undefined
  renting?:
    | {
        moveDate?: string | undefined
        term?: string | undefined
        rentFrom?: number | undefined
        rentTo?: number | undefined
        rentFrequency?: string | undefined
        furnishing?: Array<string> | undefined
        positionId?: string | undefined
      }
    | undefined
  externalArea?:
    | { type?: string | undefined; amountFrom?: number | undefined; amountTo?: number | undefined }
    | undefined
  internalArea?: { type?: string | undefined; amount?: number | undefined } | undefined
  source?: { id?: string | undefined; type?: string | undefined } | undefined
  commercial?: { useClass?: Array<string> | undefined; floorLevel?: Array<string> | undefined } | undefined
  regional?: { ggy?: { market?: Array<string> | undefined } | undefined } | undefined
  officeIds?: Array<string> | undefined
  negotiatorIds?: Array<string> | undefined
  related?:
    | Array<{
        id?: string | undefined
        name?: string | undefined
        title?: string | undefined
        forename?: string | undefined
        surname?: string | undefined
        dateOfBirth?: string | undefined
        type?: string | undefined
        homePhone?: string | undefined
        workPhone?: string | undefined
        mobilePhone?: string | undefined
        email?: string | undefined
        marketingConsent?: string | undefined
        fromArchive?: boolean | undefined
        primaryAddress?:
          | {
              buildingName?: string | undefined
              buildingNumber?: string | undefined
              line1?: string | undefined
              line2?: string | undefined
              line3?: string | undefined
              line4?: string | undefined
              postcode?: string | undefined
              countryId?: string | undefined
            }
          | undefined
        additionalContactDetails?: Array<{ type?: string | undefined; value?: string | undefined }> | undefined
      }>
    | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  _eTag?: string | undefined
}
export type ApplicantsArgs = {
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
  columns: ColumnsList<ApplicantsBody>
}
export const applicantsIdRelationshipsBody = z.object({
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
export type ApplicantsIdRelationshipsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  applicantId?: string | undefined
  associatedType?: string | undefined
  associatedId?: string | undefined
  isMain?: boolean | undefined
  fromArchive?: boolean | undefined
}
export type ApplicantsIdRelationshipsArgs = { id: string; columns: ColumnsList<ApplicantsIdRelationshipsBody> }

export const applicantsColumnHelper = createColumnHelper<ApplicantsBody>()

export const getApplicantsColumn = (property: string, modelConfig: ModelConfig<ApplicantsBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return applicantsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return applicantsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return applicantsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return applicantsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return applicantsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('marketingMode', () => {
      const { label: header, format } = modelConfig['marketingMode']

      return applicantsColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('currency', () => {
      const { label: header, format } = modelConfig['currency']

      return applicantsColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return applicantsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return applicantsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('sellingStatus', () => {
      const { label: header, format } = modelConfig['sellingStatus']

      return applicantsColumnHelper.accessor((row) => row.sellingStatus, {
        id: 'sellingStatus',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('sellingPosition', () => {
      const { label: header, format } = modelConfig['sellingPosition']

      return applicantsColumnHelper.accessor((row) => row.sellingPosition, {
        id: 'sellingPosition',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('statusId', () => {
      const { label: header, format } = modelConfig['statusId']

      return applicantsColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('lastCall', () => {
      const { label: header, format } = modelConfig['lastCall']

      return applicantsColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('nextCall', () => {
      const { label: header, format } = modelConfig['nextCall']

      return applicantsColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('departmentId', () => {
      const { label: header, format } = modelConfig['departmentId']

      return applicantsColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('solicitorId', () => {
      const { label: header, format } = modelConfig['solicitorId']

      return applicantsColumnHelper.accessor((row) => row.solicitorId, {
        id: 'solicitorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('potentialClient', () => {
      const { label: header, format } = modelConfig['potentialClient']

      return applicantsColumnHelper.accessor((row) => row.potentialClient, {
        id: 'potentialClient',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return applicantsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('style', () => {
      const { label: header, format } = modelConfig['style']

      return applicantsColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('situation', () => {
      const { label: header, format } = modelConfig['situation']

      return applicantsColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('parking', () => {
      const { label: header, format } = modelConfig['parking']

      return applicantsColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('age', () => {
      const { label: header, format } = modelConfig['age']

      return applicantsColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('locality', () => {
      const { label: header, format } = modelConfig['locality']

      return applicantsColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('specialFeatures', () => {
      const { label: header, format } = modelConfig['specialFeatures']

      return applicantsColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('unmappedRequirements', () => {
      const { label: header, format } = modelConfig['unmappedRequirements']

      return applicantsColumnHelper.accessor((row) => row.unmappedRequirements, {
        id: 'unmappedRequirements',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bedroomsMin', () => {
      const { label: header, format } = modelConfig['bedroomsMin']

      return applicantsColumnHelper.accessor((row) => row.bedroomsMin, {
        id: 'bedroomsMin',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bedroomsMax', () => {
      const { label: header, format } = modelConfig['bedroomsMax']

      return applicantsColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('receptionsMin', () => {
      const { label: header, format } = modelConfig['receptionsMin']

      return applicantsColumnHelper.accessor((row) => row.receptionsMin, {
        id: 'receptionsMin',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('receptionsMax', () => {
      const { label: header, format } = modelConfig['receptionsMax']

      return applicantsColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bathroomsMin', () => {
      const { label: header, format } = modelConfig['bathroomsMin']

      return applicantsColumnHelper.accessor((row) => row.bathroomsMin, {
        id: 'bathroomsMin',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bathroomsMax', () => {
      const { label: header, format } = modelConfig['bathroomsMax']

      return applicantsColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('parkingSpacesMin', () => {
      const { label: header, format } = modelConfig['parkingSpacesMin']

      return applicantsColumnHelper.accessor((row) => row.parkingSpacesMin, {
        id: 'parkingSpacesMin',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('parkingSpacesMax', () => {
      const { label: header, format } = modelConfig['parkingSpacesMax']

      return applicantsColumnHelper.accessor((row) => row.parkingSpacesMax, {
        id: 'parkingSpacesMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('locationType', () => {
      const { label: header, format } = modelConfig['locationType']

      return applicantsColumnHelper.accessor((row) => row.locationType, {
        id: 'locationType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('locationOptions', () => {
      const { label: header, format } = modelConfig['locationOptions']

      return applicantsColumnHelper.accessor((row) => row.locationOptions, {
        id: 'locationOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('archivedOn', () => {
      const { label: header, format } = modelConfig['archivedOn']

      return applicantsColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return applicantsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buying', () => {
      const { label: header, format } = modelConfig['buying']

      return applicantsColumnHelper.accessor((row) => row.buying, {
        id: 'buying',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('renting', () => {
      const { label: header, format } = modelConfig['renting']

      return applicantsColumnHelper.accessor((row) => row.renting, {
        id: 'renting',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('externalArea', () => {
      const { label: header, format } = modelConfig['externalArea']

      return applicantsColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('internalArea', () => {
      const { label: header, format } = modelConfig['internalArea']

      return applicantsColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('source', () => {
      const { label: header, format } = modelConfig['source']

      return applicantsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('commercial', () => {
      const { label: header, format } = modelConfig['commercial']

      return applicantsColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('regional', () => {
      const { label: header, format } = modelConfig['regional']

      return applicantsColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeIds', () => {
      const { label: header, format } = modelConfig['officeIds']

      return applicantsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format } = modelConfig['negotiatorIds']

      return applicantsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('related', () => {
      const { label: header, format } = modelConfig['related']

      return applicantsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return applicantsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return applicantsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useApplicantsTable = (args: ApplicantsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiApplicants({
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
export const applicantsIdRelationshipsColumnHelper = createColumnHelper<ApplicantsIdRelationshipsBody>()

export const getApplicantsIdRelationshipsColumn = (
  property: string,
  modelConfig: ModelConfig<ApplicantsIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('applicantId', () => {
      const { label: header, format } = modelConfig['applicantId']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedType', () => {
      const { label: header, format } = modelConfig['associatedType']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedId', () => {
      const { label: header, format } = modelConfig['associatedId']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isMain', () => {
      const { label: header, format } = modelConfig['isMain']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useApplicantsIdRelationshipsTable = (args: ApplicantsIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiApplicantsIdRelationships({
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
