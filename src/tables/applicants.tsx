import {
  applicantModel,
  ApplicantModel,
  applicantContactRelationshipModel,
  ApplicantContactRelationshipModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { z } from 'zod'
import { useGetApiApplicants, useGetApiApplicantsIdRelationships } from '@/services/applicants.ts'

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
  columns: ColumnsList<ApplicantModel>
}
export type ApplicantsIdRelationshipsArgs = { id: string; columns: ColumnsList<ApplicantContactRelationshipModel> }

export const applicantsColumnHelper = createColumnHelper<ApplicantModel>()

export const getApplicantsColumn = (property: string, modelConfig: ModelConfig<ApplicantModel>) => {
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
export const applicantsIdRelationshipsColumnHelper = createColumnHelper<ApplicantContactRelationshipModel>()

export const getApplicantsIdRelationshipsColumn = (
  property: string,
  modelConfig: ModelConfig<ApplicantContactRelationshipModel>,
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
