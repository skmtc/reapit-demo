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
import { useGetApiApplicants, useGetApiApplicantsIdRelationships } from '@/services/applicants.generated.ts'

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
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return applicantsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return applicantsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return applicantsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return applicantsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return applicantsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingMode', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingMode']

      return applicantsColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('currency', () => {
      const { label: header, format, width, minWidth } = modelConfig['currency']

      return applicantsColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return applicantsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return applicantsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('sellingStatus', () => {
      const { label: header, format, width, minWidth } = modelConfig['sellingStatus']

      return applicantsColumnHelper.accessor((row) => row.sellingStatus, {
        id: 'sellingStatus',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('sellingPosition', () => {
      const { label: header, format, width, minWidth } = modelConfig['sellingPosition']

      return applicantsColumnHelper.accessor((row) => row.sellingPosition, {
        id: 'sellingPosition',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('statusId', () => {
      const { label: header, format, width, minWidth } = modelConfig['statusId']

      return applicantsColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lastCall', () => {
      const { label: header, format, width, minWidth } = modelConfig['lastCall']

      return applicantsColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('nextCall', () => {
      const { label: header, format, width, minWidth } = modelConfig['nextCall']

      return applicantsColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('departmentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['departmentId']

      return applicantsColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('solicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['solicitorId']

      return applicantsColumnHelper.accessor((row) => row.solicitorId, {
        id: 'solicitorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('potentialClient', () => {
      const { label: header, format, width, minWidth } = modelConfig['potentialClient']

      return applicantsColumnHelper.accessor((row) => row.potentialClient, {
        id: 'potentialClient',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return applicantsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('style', () => {
      const { label: header, format, width, minWidth } = modelConfig['style']

      return applicantsColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('situation', () => {
      const { label: header, format, width, minWidth } = modelConfig['situation']

      return applicantsColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parking', () => {
      const { label: header, format, width, minWidth } = modelConfig['parking']

      return applicantsColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('age', () => {
      const { label: header, format, width, minWidth } = modelConfig['age']

      return applicantsColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('locality', () => {
      const { label: header, format, width, minWidth } = modelConfig['locality']

      return applicantsColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('specialFeatures', () => {
      const { label: header, format, width, minWidth } = modelConfig['specialFeatures']

      return applicantsColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('unmappedRequirements', () => {
      const { label: header, format, width, minWidth } = modelConfig['unmappedRequirements']

      return applicantsColumnHelper.accessor((row) => row.unmappedRequirements, {
        id: 'unmappedRequirements',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedroomsMin', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedroomsMin']

      return applicantsColumnHelper.accessor((row) => row.bedroomsMin, {
        id: 'bedroomsMin',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedroomsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedroomsMax']

      return applicantsColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('receptionsMin', () => {
      const { label: header, format, width, minWidth } = modelConfig['receptionsMin']

      return applicantsColumnHelper.accessor((row) => row.receptionsMin, {
        id: 'receptionsMin',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('receptionsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['receptionsMax']

      return applicantsColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bathroomsMin', () => {
      const { label: header, format, width, minWidth } = modelConfig['bathroomsMin']

      return applicantsColumnHelper.accessor((row) => row.bathroomsMin, {
        id: 'bathroomsMin',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bathroomsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['bathroomsMax']

      return applicantsColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parkingSpacesMin', () => {
      const { label: header, format, width, minWidth } = modelConfig['parkingSpacesMin']

      return applicantsColumnHelper.accessor((row) => row.parkingSpacesMin, {
        id: 'parkingSpacesMin',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parkingSpacesMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['parkingSpacesMax']

      return applicantsColumnHelper.accessor((row) => row.parkingSpacesMax, {
        id: 'parkingSpacesMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('locationType', () => {
      const { label: header, format, width, minWidth } = modelConfig['locationType']

      return applicantsColumnHelper.accessor((row) => row.locationType, {
        id: 'locationType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('locationOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['locationOptions']

      return applicantsColumnHelper.accessor((row) => row.locationOptions, {
        id: 'locationOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('archivedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['archivedOn']

      return applicantsColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return applicantsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buying', () => {
      const { label: header, format, width, minWidth } = modelConfig['buying']

      return applicantsColumnHelper.accessor((row) => row.buying, {
        id: 'buying',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('renting', () => {
      const { label: header, format, width, minWidth } = modelConfig['renting']

      return applicantsColumnHelper.accessor((row) => row.renting, {
        id: 'renting',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalArea', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalArea']

      return applicantsColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internalArea', () => {
      const { label: header, format, width, minWidth } = modelConfig['internalArea']

      return applicantsColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return applicantsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('commercial', () => {
      const { label: header, format, width, minWidth } = modelConfig['commercial']

      return applicantsColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('regional', () => {
      const { label: header, format, width, minWidth } = modelConfig['regional']

      return applicantsColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return applicantsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorIds']

      return applicantsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return applicantsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return applicantsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return applicantsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isMain', () => {
      const { label: header, format, width, minWidth } = modelConfig['isMain']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return applicantsIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
