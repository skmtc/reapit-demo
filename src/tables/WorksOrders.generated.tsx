import { worksOrderModel, WorksOrderModel } from '@/schemas/worksOrderModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiWorksOrders, useGetApiWorksOrdersIdItems } from 'services/WorksOrders.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { worksOrderItemModel, WorksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'

export const useWorksOrdersTableColumnHelper = createColumnHelper<WorksOrderModel>();
export type UseWorksOrdersTableArgs = {sortBy?: string | undefined, embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined, id?: Array<string> | undefined, companyId?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, propertyId?: Array<string> | undefined, status?: Array<'pendingApproval' | 'pendingQuote' | 'raised' | 'raisedToChase' | 'landlordToComplete' | 'complete' | 'cancelled' | 'quoteAccepted'> | undefined, tenancyId?: Array<string> | undefined, typeId?: Array<string> | undefined, extrasField?: Array<string> | undefined, completedFrom?: string | undefined, completedTo?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, requiredFrom?: string | undefined, requiredTo?: string | undefined, metadata?: Array<string> | undefined, columns: ColumnsList<WorksOrderModel>};
export const getuseWorksOrdersTableColumn = (property:string, modelConfig: ModelConfig<WorksOrderModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useWorksOrdersTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useWorksOrdersTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useWorksOrdersTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useWorksOrdersTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useWorksOrdersTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('companyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['companyId']

      return useWorksOrdersTableColumnHelper.accessor(row => row.companyId, {
      id: 'companyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useWorksOrdersTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useWorksOrdersTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useWorksOrdersTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useWorksOrdersTableColumnHelper.accessor(row => row.typeId, {
      id: 'typeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useWorksOrdersTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useWorksOrdersTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('reporter', () => {
      const { label: header, format, width, minWidth } = modelConfig['reporter']

      return useWorksOrdersTableColumnHelper.accessor(row => row.reporter, {
      id: 'reporter',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('priority', () => {
      const { label: header, format, width, minWidth } = modelConfig['priority']

      return useWorksOrdersTableColumnHelper.accessor(row => row.priority, {
      id: 'priority',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('booked', () => {
      const { label: header, format, width, minWidth } = modelConfig['booked']

      return useWorksOrdersTableColumnHelper.accessor(row => row.booked, {
      id: 'booked',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('required', () => {
      const { label: header, format, width, minWidth } = modelConfig['required']

      return useWorksOrdersTableColumnHelper.accessor(row => row.required, {
      id: 'required',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('completed', () => {
      const { label: header, format, width, minWidth } = modelConfig['completed']

      return useWorksOrdersTableColumnHelper.accessor(row => row.completed, {
      id: 'completed',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('totalNetAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['totalNetAmount']

      return useWorksOrdersTableColumnHelper.accessor(row => row.totalNetAmount, {
      id: 'totalNetAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('totalVatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['totalVatAmount']

      return useWorksOrdersTableColumnHelper.accessor(row => row.totalVatAmount, {
      id: 'totalVatAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('totalGrossAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['totalGrossAmount']

      return useWorksOrdersTableColumnHelper.accessor(row => row.totalGrossAmount, {
      id: 'totalGrossAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('items', () => {
      const { label: header, format, width, minWidth } = modelConfig['items']

      return useWorksOrdersTableColumnHelper.accessor(row => row.items, {
      id: 'items',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useWorksOrdersTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return useWorksOrdersTableColumnHelper.accessor(row => row.extrasField, {
      id: 'extrasField',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useWorksOrdersTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useWorksOrdersTable = (args: UseWorksOrdersTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiWorksOrders({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};
export const useWorksOrdersIdItemsTableColumnHelper = createColumnHelper<WorksOrderItemModel>();
export type UseWorksOrdersIdItemsTableArgs = {id: string, columns: ColumnsList<WorksOrderItemModel>};
export const getuseWorksOrdersIdItemsTableColumn = (property:string, modelConfig: ModelConfig<WorksOrderItemModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('worksOrderId', () => {
      const { label: header, format, width, minWidth } = modelConfig['worksOrderId']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.worksOrderId, {
      id: 'worksOrderId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.notes, {
      id: 'notes',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('chargeTo', () => {
      const { label: header, format, width, minWidth } = modelConfig['chargeTo']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.chargeTo, {
      id: 'chargeTo',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('estimate', () => {
      const { label: header, format, width, minWidth } = modelConfig['estimate']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.estimate, {
      id: 'estimate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('estimateType', () => {
      const { label: header, format, width, minWidth } = modelConfig['estimateType']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.estimateType, {
      id: 'estimateType',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('netAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['netAmount']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.netAmount, {
      id: 'netAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vatAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatAmount']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.vatAmount, {
      id: 'vatAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('grossAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['grossAmount']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.grossAmount, {
      id: 'grossAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('reserveAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['reserveAmount']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.reserveAmount, {
      id: 'reserveAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('nominalAccountId', () => {
      const { label: header, format, width, minWidth } = modelConfig['nominalAccountId']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row.nominalAccountId, {
      id: 'nominalAccountId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useWorksOrdersIdItemsTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useWorksOrdersIdItemsTable = (args: UseWorksOrdersIdItemsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiWorksOrdersIdItems({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};