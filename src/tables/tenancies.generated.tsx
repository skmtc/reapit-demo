import {
  tenancyModel,
  TenancyModel,
  tenancyContactRelationshipModel,
  TenancyContactRelationshipModel,
  tenancyCheckModel,
  TenancyCheckModel,
  tenancyBreakClauseModel,
  TenancyBreakClauseModel,
  tenancyAllowanceModel,
  TenancyAllowanceModel,
  tenancyResponsibilityModel,
  TenancyResponsibilityModel,
  tenancyRenewalModel,
  TenancyRenewalModel,
  tenancyExtensionAlterationModel,
  TenancyExtensionAlterationModel,
  tenancyRenewalCheckModel,
  TenancyRenewalCheckModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiTenancies,
  useGetApiTenanciesIdRelationships,
  useGetApiTenanciesIdChecks,
  useGetApiTenanciesIdBreakClauses,
  useGetApiTenanciesIdAllowances,
  useGetApiTenanciesIdResponsibilities,
  useGetApiTenanciesIdRenewalNegotiations,
  useGetApiTenanciesIdExtensions,
  useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks,
} from '@/services/tenancies.generated.ts'

export type TenanciesArgs = {
  sortBy?: string | undefined
  fromArchive?: boolean | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  name?: string | undefined
  nameType?: string | undefined
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | undefined
  email?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  endDateFrom?: string | undefined
  endDateTo?: string | undefined
  startDateFrom?: string | undefined
  startDateTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<TenancyModel>
}
export type TenanciesIdRelationshipsArgs = { id: string; columns: ColumnsList<TenancyContactRelationshipModel> }
export type TenanciesIdChecksArgs = {
  id: string
  type?: string | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined
  columns: ColumnsList<TenancyCheckModel>
}
export type TenanciesIdBreakClausesArgs = { id: string; columns: ColumnsList<TenancyBreakClauseModel> }
export type TenanciesIdAllowancesArgs = { id: string; columns: ColumnsList<TenancyAllowanceModel> }
export type TenanciesIdResponsibilitiesArgs = { id: string; columns: ColumnsList<TenancyResponsibilityModel> }
export type TenanciesIdRenewalNegotiationsArgs = { id: string; columns: ColumnsList<TenancyRenewalModel> }
export type TenanciesIdExtensionsArgs = { id: string; columns: ColumnsList<TenancyExtensionAlterationModel> }
export type TenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  columns: ColumnsList<TenancyRenewalCheckModel>
}

export const tenanciesColumnHelper = createColumnHelper<TenancyModel>()

export const getTenanciesColumn = (property: string, modelConfig: ModelConfig<TenancyModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return tenanciesColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return tenanciesColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return tenanciesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('agentRole', () => {
      const { label: header, format, width, minWidth } = modelConfig['agentRole']

      return tenanciesColumnHelper.accessor((row) => row.agentRole, {
        id: 'agentRole',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return tenanciesColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return tenanciesColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('endDateConfirmed', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDateConfirmed']

      return tenanciesColumnHelper.accessor((row) => row.endDateConfirmed, {
        id: 'endDateConfirmed',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isPeriodic', () => {
      const { label: header, format, width, minWidth } = modelConfig['isPeriodic']

      return tenanciesColumnHelper.accessor((row) => row.isPeriodic, {
        id: 'isPeriodic',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentInstalmentsFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsFrequency']

      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsFrequency, {
        id: 'rentInstalmentsFrequency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentInstalmentsAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsAmount']

      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsAmount, {
        id: 'rentInstalmentsAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentInstalmentsStart', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsStart']

      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsStart, {
        id: 'rentInstalmentsStart',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingGas', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingGas']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingGas, {
        id: 'meterReadingGas',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingGasLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingGasLastRead']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingGasLastRead, {
        id: 'meterReadingGasLastRead',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingElectricity', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingElectricity']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingElectricity, {
        id: 'meterReadingElectricity',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingElectricityLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingElectricityLastRead']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingElectricityLastRead, {
        id: 'meterReadingElectricityLastRead',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingWater', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingWater']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingWater, {
        id: 'meterReadingWater',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingWaterLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingWaterLastRead']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingWaterLastRead, {
        id: 'meterReadingWaterLastRead',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return tenanciesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return tenanciesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return tenanciesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return tenanciesColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('managerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['managerId']

      return tenanciesColumnHelper.accessor((row) => row.managerId, {
        id: 'managerId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groupPaymentReference', () => {
      const { label: header, format, width, minWidth } = modelConfig['groupPaymentReference']

      return tenanciesColumnHelper.accessor((row) => row.groupPaymentReference, {
        id: 'groupPaymentReference',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lettingFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['lettingFee']

      return tenanciesColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('managementFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['managementFee']

      return tenanciesColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return tenanciesColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('deposit', () => {
      const { label: header, format, width, minWidth } = modelConfig['deposit']

      return tenanciesColumnHelper.accessor((row) => row.deposit, {
        id: 'deposit',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return tenanciesColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return tenanciesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return tenanciesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('feeNotes', () => {
      const { label: header, format, width, minWidth } = modelConfig['feeNotes']

      return tenanciesColumnHelper.accessor((row) => row.feeNotes, {
        id: 'feeNotes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('legalStatusId', () => {
      const { label: header, format, width, minWidth } = modelConfig['legalStatusId']

      return tenanciesColumnHelper.accessor((row) => row.legalStatusId, {
        id: 'legalStatusId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('renewalOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['renewalOptions']

      return tenanciesColumnHelper.accessor((row) => row.renewalOptions, {
        id: 'renewalOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('arrears', () => {
      const { label: header, format, width, minWidth } = modelConfig['arrears']

      return tenanciesColumnHelper.accessor((row) => row.arrears, {
        id: 'arrears',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesTable = (args: TenanciesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenancies({
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
export const tenanciesIdRelationshipsColumnHelper = createColumnHelper<TenancyContactRelationshipModel>()

export const getTenanciesIdRelationshipsColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyContactRelationshipModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isMain', () => {
      const { label: header, format, width, minWidth } = modelConfig['isMain']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('guarantors', () => {
      const { label: header, format, width, minWidth } = modelConfig['guarantors']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.guarantors, {
        id: 'guarantors',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('references', () => {
      const { label: header, format, width, minWidth } = modelConfig['references']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.references, {
        id: 'references',
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

export const useTenanciesIdRelationshipsTable = (args: TenanciesIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRelationships({
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
export const tenanciesIdChecksColumnHelper = createColumnHelper<TenancyCheckModel>()

export const getTenanciesIdChecksColumn = (property: string, modelConfig: ModelConfig<TenancyCheckModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkTypeId']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.checkTypeId, {
        id: 'checkTypeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdChecksColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdChecksTable = (args: TenanciesIdChecksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdChecks({
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
export const tenanciesIdBreakClausesColumnHelper = createColumnHelper<TenancyBreakClauseModel>()

export const getTenanciesIdBreakClausesColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyBreakClauseModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('clauseTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['clauseTypeId']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.clauseTypeId, {
        id: 'clauseTypeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('appliesTo', () => {
      const { label: header, format, width, minWidth } = modelConfig['appliesTo']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.appliesTo, {
        id: 'appliesTo',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('letterText', () => {
      const { label: header, format, width, minWidth } = modelConfig['letterText']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('breakFrom', () => {
      const { label: header, format, width, minWidth } = modelConfig['breakFrom']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.breakFrom, {
        id: 'breakFrom',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('noticeRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['noticeRequired']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.noticeRequired, {
        id: 'noticeRequired',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('agreements', () => {
      const { label: header, format, width, minWidth } = modelConfig['agreements']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdBreakClausesTable = (args: TenanciesIdBreakClausesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdBreakClauses({
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
export const tenanciesIdAllowancesColumnHelper = createColumnHelper<TenancyAllowanceModel>()

export const getTenanciesIdAllowancesColumn = (property: string, modelConfig: ModelConfig<TenancyAllowanceModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('state', () => {
      const { label: header, format, width, minWidth } = modelConfig['state']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.state, {
        id: 'state',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('agreements', () => {
      const { label: header, format, width, minWidth } = modelConfig['agreements']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('letterText', () => {
      const { label: header, format, width, minWidth } = modelConfig['letterText']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdAllowancesTable = (args: TenanciesIdAllowancesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdAllowances({
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
export const tenanciesIdResponsibilitiesColumnHelper = createColumnHelper<TenancyResponsibilityModel>()

export const getTenanciesIdResponsibilitiesColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyResponsibilityModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('appliesTo', () => {
      const { label: header, format, width, minWidth } = modelConfig['appliesTo']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.appliesTo, {
        id: 'appliesTo',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('agreements', () => {
      const { label: header, format, width, minWidth } = modelConfig['agreements']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('letterText', () => {
      const { label: header, format, width, minWidth } = modelConfig['letterText']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdResponsibilitiesTable = (args: TenanciesIdResponsibilitiesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdResponsibilities({
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
export const tenanciesIdRenewalNegotiationsColumnHelper = createColumnHelper<TenancyRenewalModel>()

export const getTenanciesIdRenewalNegotiationsColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyRenewalModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentChange', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentChange']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rentChange, {
        id: 'rentChange',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lettingFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['lettingFee']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('managementFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['managementFee']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdRenewalNegotiationsTable = (args: TenanciesIdRenewalNegotiationsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiations({
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
export const tenanciesIdExtensionsColumnHelper = createColumnHelper<TenancyExtensionAlterationModel>()

export const getTenanciesIdExtensionsColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyExtensionAlterationModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fee', () => {
      const { label: header, format, width, minWidth } = modelConfig['fee']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.fee, {
        id: 'fee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdExtensionsTable = (args: TenanciesIdExtensionsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdExtensions({
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
export const tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper = createColumnHelper<TenancyRenewalCheckModel>()

export const getTenanciesIdRenewalNegotiationsRenewalIdChecksColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyRenewalCheckModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkTypeId']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.checkTypeId, {
        id: 'checkTypeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('renewalId', () => {
      const { label: header, format, width, minWidth } = modelConfig['renewalId']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.renewalId, {
        id: 'renewalId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._eTag, {
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

export const useTenanciesIdRenewalNegotiationsRenewalIdChecksTable = (
  args: TenanciesIdRenewalNegotiationsRenewalIdChecksArgs,
) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks({
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
