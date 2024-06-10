import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiTenancies } from '@/services/Tenancies.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { TenancyModel } from '@/schemas/tenancyModel.generated.tsx'

export const useTenanciesTableColumnHelper = createColumnHelper<TenancyModel>()
export type UseTenanciesTableArgs = {
  sortBy?: string | null | undefined
  fromArchive?: boolean | null | undefined
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
    | null
    | undefined
  id?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | null
    | undefined
  email?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  endDateFrom?: string | null | undefined
  endDateTo?: string | null | undefined
  startDateFrom?: string | null | undefined
  startDateTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  columns: ColumnsList<TenancyModel>
}
export const getuseTenanciesTableColumn = (property: string, modelConfig: ModelConfig<TenancyModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return useTenanciesTableColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return useTenanciesTableColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTenanciesTableColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('agentRole', () => {
      const { label: header, format, width, minWidth } = modelConfig['agentRole']

      return useTenanciesTableColumnHelper.accessor((row) => row.agentRole, {
        id: 'agentRole',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return useTenanciesTableColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return useTenanciesTableColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('endDateConfirmed', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDateConfirmed']

      return useTenanciesTableColumnHelper.accessor((row) => row.endDateConfirmed, {
        id: 'endDateConfirmed',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isPeriodic', () => {
      const { label: header, format, width, minWidth } = modelConfig['isPeriodic']

      return useTenanciesTableColumnHelper.accessor((row) => row.isPeriodic, {
        id: 'isPeriodic',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentInstalmentsFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsFrequency']

      return useTenanciesTableColumnHelper.accessor((row) => row.rentInstalmentsFrequency, {
        id: 'rentInstalmentsFrequency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentInstalmentsAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsAmount']

      return useTenanciesTableColumnHelper.accessor((row) => row.rentInstalmentsAmount, {
        id: 'rentInstalmentsAmount',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rentInstalmentsStart', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsStart']

      return useTenanciesTableColumnHelper.accessor((row) => row.rentInstalmentsStart, {
        id: 'rentInstalmentsStart',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingGas', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingGas']

      return useTenanciesTableColumnHelper.accessor((row) => row.meterReadingGas, {
        id: 'meterReadingGas',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingGasLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingGasLastRead']

      return useTenanciesTableColumnHelper.accessor((row) => row.meterReadingGasLastRead, {
        id: 'meterReadingGasLastRead',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingElectricity', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingElectricity']

      return useTenanciesTableColumnHelper.accessor((row) => row.meterReadingElectricity, {
        id: 'meterReadingElectricity',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingElectricityLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingElectricityLastRead']

      return useTenanciesTableColumnHelper.accessor((row) => row.meterReadingElectricityLastRead, {
        id: 'meterReadingElectricityLastRead',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingWater', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingWater']

      return useTenanciesTableColumnHelper.accessor((row) => row.meterReadingWater, {
        id: 'meterReadingWater',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('meterReadingWaterLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingWaterLastRead']

      return useTenanciesTableColumnHelper.accessor((row) => row.meterReadingWaterLastRead, {
        id: 'meterReadingWaterLastRead',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useTenanciesTableColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useTenanciesTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useTenanciesTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return useTenanciesTableColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('managerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['managerId']

      return useTenanciesTableColumnHelper.accessor((row) => row.managerId, {
        id: 'managerId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groupPaymentReference', () => {
      const { label: header, format, width, minWidth } = modelConfig['groupPaymentReference']

      return useTenanciesTableColumnHelper.accessor((row) => row.groupPaymentReference, {
        id: 'groupPaymentReference',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lettingFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['lettingFee']

      return useTenanciesTableColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('managementFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['managementFee']

      return useTenanciesTableColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return useTenanciesTableColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('deposit', () => {
      const { label: header, format, width, minWidth } = modelConfig['deposit']

      return useTenanciesTableColumnHelper.accessor((row) => row.deposit, {
        id: 'deposit',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return useTenanciesTableColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return useTenanciesTableColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useTenanciesTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('feeNotes', () => {
      const { label: header, format, width, minWidth } = modelConfig['feeNotes']

      return useTenanciesTableColumnHelper.accessor((row) => row.feeNotes, {
        id: 'feeNotes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('legalStatusId', () => {
      const { label: header, format, width, minWidth } = modelConfig['legalStatusId']

      return useTenanciesTableColumnHelper.accessor((row) => row.legalStatusId, {
        id: 'legalStatusId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('renewalOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['renewalOptions']

      return useTenanciesTableColumnHelper.accessor((row) => row.renewalOptions, {
        id: 'renewalOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('arrears', () => {
      const { label: header, format, width, minWidth } = modelConfig['arrears']

      return useTenanciesTableColumnHelper.accessor((row) => row.arrears, {
        id: 'arrears',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesTableColumnHelper.accessor((row) => row._eTag, {
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
export const useTenanciesTable = (args: UseTenanciesTableArgs) => {
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
