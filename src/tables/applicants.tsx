import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  marketingMode?: string | undefined | null
  currency?: string | undefined | null
  active?: boolean | undefined | null
  notes?: string | undefined | null
  sellingStatus?: string | undefined | null
  sellingPosition?: string | undefined | null
  statusId?: string | undefined | null
  lastCall?: string | undefined | null
  nextCall?: string | undefined | null
  departmentId?: string | undefined | null
  solicitorId?: string | undefined | null
  potentialClient?: boolean | undefined | null
  type?: Array<string> | undefined | null
  style?: Array<string> | undefined | null
  situation?: Array<string> | undefined | null
  parking?: Array<string> | undefined | null
  age?: Array<string> | undefined | null
  locality?: Array<string> | undefined | null
  specialFeatures?: Array<string> | undefined | null
  unmappedRequirements?:
    | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
    | undefined
    | null
  bedroomsMin?: number | undefined | null
  bedroomsMax?: number | undefined | null
  receptionsMin?: number | undefined | null
  receptionsMax?: number | undefined | null
  bathroomsMin?: number | undefined | null
  bathroomsMax?: number | undefined | null
  parkingSpacesMin?: number | undefined | null
  parkingSpacesMax?: number | undefined | null
  locationType?: string | undefined | null
  locationOptions?: Array<string> | undefined | null
  archivedOn?: string | undefined | null
  fromArchive?: boolean | undefined | null
  buying?:
    | {
        priceFrom?: number | undefined | null
        priceTo?: number | undefined | null
        decoration?: Array<string> | undefined | null
        reasonId?: string | undefined | null
        positionId?: string | undefined | null
        tenure?: Array<string> | undefined | null
        mortgageExpiry?: string | undefined | null
        leaseRemaining?: { min?: number | undefined | null; max?: number | undefined | null } | undefined | null
      }
    | undefined
    | null
  renting?:
    | {
        moveDate?: string | undefined | null
        term?: string | undefined | null
        rentFrom?: number | undefined | null
        rentTo?: number | undefined | null
        rentFrequency?: string | undefined | null
        furnishing?: Array<string> | undefined | null
        positionId?: string | undefined | null
      }
    | undefined
    | null
  externalArea?:
    | { type?: string | undefined | null; amountFrom?: number | undefined | null; amountTo?: number | undefined | null }
    | undefined
    | null
  internalArea?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  commercial?:
    | { useClass?: Array<string> | undefined | null; floorLevel?: Array<string> | undefined | null }
    | undefined
    | null
  regional?: { ggy?: { market?: Array<string> | undefined | null } | undefined | null } | undefined | null
  officeIds?: Array<string> | undefined | null
  negotiatorIds?: Array<string> | undefined | null
  related?:
    | Array<{
        id?: string | undefined | null
        name?: string | undefined | null
        title?: string | undefined | null
        forename?: string | undefined | null
        surname?: string | undefined | null
        dateOfBirth?: string | undefined | null
        type?: string | undefined | null
        homePhone?: string | undefined | null
        workPhone?: string | undefined | null
        mobilePhone?: string | undefined | null
        email?: string | undefined | null
        marketingConsent?: string | undefined | null
        fromArchive?: boolean | undefined | null
        primaryAddress?:
          | {
              buildingName?: string | undefined | null
              buildingNumber?: string | undefined | null
              line1?: string | undefined | null
              line2?: string | undefined | null
              line3?: string | undefined | null
              line4?: string | undefined | null
              postcode?: string | undefined | null
              countryId?: string | undefined | null
            }
          | undefined
          | null
        additionalContactDetails?:
          | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
          | undefined
          | null
      }>
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type ApplicantsArgs = {
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  applicantId?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  isMain?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
}
export type ApplicantsIdRelationshipsArgs = { id: string; columns: ColumnsList<ApplicantsIdRelationshipsBody> }

export const applicantsColumnHelper = createColumnHelper<ApplicantsBody>()

export const getApplicantsColumn = (property: string, { label, format }: ConfigItemLookup<ApplicantsBody>) => {
  return match(property)
    .with('_links', () => {
      return applicantsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return applicantsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return applicantsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return applicantsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return applicantsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('marketingMode', () => {
      return applicantsColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header: label('marketingMode'),
        cell: (info) => format(info.getValue(), 'marketingMode'),
      })
    })
    .with('currency', () => {
      return applicantsColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header: label('currency'),
        cell: (info) => format(info.getValue(), 'currency'),
      })
    })
    .with('active', () => {
      return applicantsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format(info.getValue(), 'active'),
      })
    })
    .with('notes', () => {
      return applicantsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('sellingStatus', () => {
      return applicantsColumnHelper.accessor((row) => row.sellingStatus, {
        id: 'sellingStatus',
        header: label('sellingStatus'),
        cell: (info) => format(info.getValue(), 'sellingStatus'),
      })
    })
    .with('sellingPosition', () => {
      return applicantsColumnHelper.accessor((row) => row.sellingPosition, {
        id: 'sellingPosition',
        header: label('sellingPosition'),
        cell: (info) => format(info.getValue(), 'sellingPosition'),
      })
    })
    .with('statusId', () => {
      return applicantsColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header: label('statusId'),
        cell: (info) => format(info.getValue(), 'statusId'),
      })
    })
    .with('lastCall', () => {
      return applicantsColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header: label('lastCall'),
        cell: (info) => format(info.getValue(), 'lastCall'),
      })
    })
    .with('nextCall', () => {
      return applicantsColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header: label('nextCall'),
        cell: (info) => format(info.getValue(), 'nextCall'),
      })
    })
    .with('departmentId', () => {
      return applicantsColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header: label('departmentId'),
        cell: (info) => format(info.getValue(), 'departmentId'),
      })
    })
    .with('solicitorId', () => {
      return applicantsColumnHelper.accessor((row) => row.solicitorId, {
        id: 'solicitorId',
        header: label('solicitorId'),
        cell: (info) => format(info.getValue(), 'solicitorId'),
      })
    })
    .with('potentialClient', () => {
      return applicantsColumnHelper.accessor((row) => row.potentialClient, {
        id: 'potentialClient',
        header: label('potentialClient'),
        cell: (info) => format(info.getValue(), 'potentialClient'),
      })
    })
    .with('type', () => {
      return applicantsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('style', () => {
      return applicantsColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header: label('style'),
        cell: (info) => format(info.getValue(), 'style'),
      })
    })
    .with('situation', () => {
      return applicantsColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header: label('situation'),
        cell: (info) => format(info.getValue(), 'situation'),
      })
    })
    .with('parking', () => {
      return applicantsColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header: label('parking'),
        cell: (info) => format(info.getValue(), 'parking'),
      })
    })
    .with('age', () => {
      return applicantsColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header: label('age'),
        cell: (info) => format(info.getValue(), 'age'),
      })
    })
    .with('locality', () => {
      return applicantsColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header: label('locality'),
        cell: (info) => format(info.getValue(), 'locality'),
      })
    })
    .with('specialFeatures', () => {
      return applicantsColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header: label('specialFeatures'),
        cell: (info) => format(info.getValue(), 'specialFeatures'),
      })
    })
    .with('unmappedRequirements', () => {
      return applicantsColumnHelper.accessor((row) => row.unmappedRequirements, {
        id: 'unmappedRequirements',
        header: label('unmappedRequirements'),
        cell: (info) => format(info.getValue(), 'unmappedRequirements'),
      })
    })
    .with('bedroomsMin', () => {
      return applicantsColumnHelper.accessor((row) => row.bedroomsMin, {
        id: 'bedroomsMin',
        header: label('bedroomsMin'),
        cell: (info) => format(info.getValue(), 'bedroomsMin'),
      })
    })
    .with('bedroomsMax', () => {
      return applicantsColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header: label('bedroomsMax'),
        cell: (info) => format(info.getValue(), 'bedroomsMax'),
      })
    })
    .with('receptionsMin', () => {
      return applicantsColumnHelper.accessor((row) => row.receptionsMin, {
        id: 'receptionsMin',
        header: label('receptionsMin'),
        cell: (info) => format(info.getValue(), 'receptionsMin'),
      })
    })
    .with('receptionsMax', () => {
      return applicantsColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header: label('receptionsMax'),
        cell: (info) => format(info.getValue(), 'receptionsMax'),
      })
    })
    .with('bathroomsMin', () => {
      return applicantsColumnHelper.accessor((row) => row.bathroomsMin, {
        id: 'bathroomsMin',
        header: label('bathroomsMin'),
        cell: (info) => format(info.getValue(), 'bathroomsMin'),
      })
    })
    .with('bathroomsMax', () => {
      return applicantsColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header: label('bathroomsMax'),
        cell: (info) => format(info.getValue(), 'bathroomsMax'),
      })
    })
    .with('parkingSpacesMin', () => {
      return applicantsColumnHelper.accessor((row) => row.parkingSpacesMin, {
        id: 'parkingSpacesMin',
        header: label('parkingSpacesMin'),
        cell: (info) => format(info.getValue(), 'parkingSpacesMin'),
      })
    })
    .with('parkingSpacesMax', () => {
      return applicantsColumnHelper.accessor((row) => row.parkingSpacesMax, {
        id: 'parkingSpacesMax',
        header: label('parkingSpacesMax'),
        cell: (info) => format(info.getValue(), 'parkingSpacesMax'),
      })
    })
    .with('locationType', () => {
      return applicantsColumnHelper.accessor((row) => row.locationType, {
        id: 'locationType',
        header: label('locationType'),
        cell: (info) => format(info.getValue(), 'locationType'),
      })
    })
    .with('locationOptions', () => {
      return applicantsColumnHelper.accessor((row) => row.locationOptions, {
        id: 'locationOptions',
        header: label('locationOptions'),
        cell: (info) => format(info.getValue(), 'locationOptions'),
      })
    })
    .with('archivedOn', () => {
      return applicantsColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header: label('archivedOn'),
        cell: (info) => format(info.getValue(), 'archivedOn'),
      })
    })
    .with('fromArchive', () => {
      return applicantsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .with('buying', () => {
      return applicantsColumnHelper.accessor((row) => row.buying, {
        id: 'buying',
        header: label('buying'),
        cell: (info) => format(info.getValue(), 'buying'),
      })
    })
    .with('renting', () => {
      return applicantsColumnHelper.accessor((row) => row.renting, {
        id: 'renting',
        header: label('renting'),
        cell: (info) => format(info.getValue(), 'renting'),
      })
    })
    .with('externalArea', () => {
      return applicantsColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header: label('externalArea'),
        cell: (info) => format(info.getValue(), 'externalArea'),
      })
    })
    .with('internalArea', () => {
      return applicantsColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header: label('internalArea'),
        cell: (info) => format(info.getValue(), 'internalArea'),
      })
    })
    .with('source', () => {
      return applicantsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header: label('source'),
        cell: (info) => format(info.getValue(), 'source'),
      })
    })
    .with('commercial', () => {
      return applicantsColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header: label('commercial'),
        cell: (info) => format(info.getValue(), 'commercial'),
      })
    })
    .with('regional', () => {
      return applicantsColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header: label('regional'),
        cell: (info) => format(info.getValue(), 'regional'),
      })
    })
    .with('officeIds', () => {
      return applicantsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header: label('officeIds'),
        cell: (info) => format(info.getValue(), 'officeIds'),
      })
    })
    .with('negotiatorIds', () => {
      return applicantsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header: label('negotiatorIds'),
        cell: (info) => format(info.getValue(), 'negotiatorIds'),
      })
    })
    .with('related', () => {
      return applicantsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header: label('related'),
        cell: (info) => format(info.getValue(), 'related'),
      })
    })
    .with('metadata', () => {
      return applicantsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return applicantsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<ApplicantsIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('applicantId', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header: label('applicantId'),
        cell: (info) => format(info.getValue(), 'applicantId'),
      })
    })
    .with('associatedType', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header: label('associatedType'),
        cell: (info) => format(info.getValue(), 'associatedType'),
      })
    })
    .with('associatedId', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header: label('associatedId'),
        cell: (info) => format(info.getValue(), 'associatedId'),
      })
    })
    .with('isMain', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header: label('isMain'),
        cell: (info) => format(info.getValue(), 'isMain'),
      })
    })
    .with('fromArchive', () => {
      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
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
