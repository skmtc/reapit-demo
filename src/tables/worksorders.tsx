import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiWorksOrders, useGetApiWorksOrdersIdItems } from '@/services/worksorders.ts'

export const worksOrdersBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  companyId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  tenancyId: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  reporter: z.string().nullable().optional(),
  priority: z.string().nullable().optional(),
  booked: z.string().nullable().optional(),
  required: z.string().nullable().optional(),
  completed: z.string().nullable().optional(),
  totalNetAmount: z.number().nullable().optional(),
  totalVatAmount: z.number().nullable().optional(),
  totalGrossAmount: z.number().nullable().optional(),
  items: z
    .array(
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        id: z.string().nullable().optional(),
        worksOrderId: z.string().nullable().optional(),
        created: z.string().nullable().optional(),
        modified: z.string().nullable().optional(),
        notes: z.string().nullable().optional(),
        chargeTo: z.string().nullable().optional(),
        estimate: z.number().nullable().optional(),
        estimateType: z.string().nullable().optional(),
        netAmount: z.number().nullable().optional(),
        vatAmount: z.number().nullable().optional(),
        grossAmount: z.number().nullable().optional(),
        reserveAmount: z.number().nullable().optional(),
        nominalAccountId: z.string().nullable().optional(),
        _eTag: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type WorksOrdersBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  companyId?: string | undefined
  propertyId?: string | undefined
  tenancyId?: string | undefined
  negotiatorId?: string | undefined
  typeId?: string | undefined
  status?: string | undefined
  description?: string | undefined
  reporter?: string | undefined
  priority?: string | undefined
  booked?: string | undefined
  required?: string | undefined
  completed?: string | undefined
  totalNetAmount?: number | undefined
  totalVatAmount?: number | undefined
  totalGrossAmount?: number | undefined
  items?:
    | Array<{
        _links?: Record<string, { href?: string | undefined }> | undefined
        _embedded?: Record<string, Record<string, never>> | undefined
        id?: string | undefined
        worksOrderId?: string | undefined
        created?: string | undefined
        modified?: string | undefined
        notes?: string | undefined
        chargeTo?: string | undefined
        estimate?: number | undefined
        estimateType?: string | undefined
        netAmount?: number | undefined
        vatAmount?: number | undefined
        grossAmount?: number | undefined
        reserveAmount?: number | undefined
        nominalAccountId?: string | undefined
        _eTag?: string | undefined
      }>
    | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  extrasField?: Record<string, Record<string, never>> | undefined
  _eTag?: string | undefined
}
export type WorksOrdersArgs = {
  sortBy?: string | undefined
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined
  id?: Array<string> | undefined
  companyId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?:
    | Array<
        | 'pendingApproval'
        | 'pendingQuote'
        | 'raised'
        | 'raisedToChase'
        | 'landlordToComplete'
        | 'complete'
        | 'cancelled'
        | 'quoteAccepted'
      >
    | undefined
  tenancyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  completedFrom?: string | undefined
  completedTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  requiredFrom?: string | undefined
  requiredTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<WorksOrdersBody>
}
export const worksOrdersIdItemsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  worksOrderId: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  chargeTo: z.string().nullable().optional(),
  estimate: z.number().nullable().optional(),
  estimateType: z.string().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  vatAmount: z.number().nullable().optional(),
  grossAmount: z.number().nullable().optional(),
  reserveAmount: z.number().nullable().optional(),
  nominalAccountId: z.string().nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type WorksOrdersIdItemsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  worksOrderId?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  notes?: string | undefined
  chargeTo?: string | undefined
  estimate?: number | undefined
  estimateType?: string | undefined
  netAmount?: number | undefined
  vatAmount?: number | undefined
  grossAmount?: number | undefined
  reserveAmount?: number | undefined
  nominalAccountId?: string | undefined
  _eTag?: string | undefined
}
export type WorksOrdersIdItemsArgs = { id: string; columns: ColumnsList<WorksOrdersIdItemsBody> }

export const worksOrdersColumnHelper = createColumnHelper<WorksOrdersBody>()

export const getWorksOrdersColumn = (property: string, modelConfig: ModelConfig<WorksOrdersBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return worksOrdersColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return worksOrdersColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return worksOrdersColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return worksOrdersColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return worksOrdersColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('companyId', () => {
      const { label: header, format } = modelConfig['companyId']

      return worksOrdersColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return worksOrdersColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return worksOrdersColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return worksOrdersColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return worksOrdersColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return worksOrdersColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return worksOrdersColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('reporter', () => {
      const { label: header, format } = modelConfig['reporter']

      return worksOrdersColumnHelper.accessor((row) => row.reporter, {
        id: 'reporter',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('priority', () => {
      const { label: header, format } = modelConfig['priority']

      return worksOrdersColumnHelper.accessor((row) => row.priority, {
        id: 'priority',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('booked', () => {
      const { label: header, format } = modelConfig['booked']

      return worksOrdersColumnHelper.accessor((row) => row.booked, {
        id: 'booked',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('required', () => {
      const { label: header, format } = modelConfig['required']

      return worksOrdersColumnHelper.accessor((row) => row.required, {
        id: 'required',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('completed', () => {
      const { label: header, format } = modelConfig['completed']

      return worksOrdersColumnHelper.accessor((row) => row.completed, {
        id: 'completed',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('totalNetAmount', () => {
      const { label: header, format } = modelConfig['totalNetAmount']

      return worksOrdersColumnHelper.accessor((row) => row.totalNetAmount, {
        id: 'totalNetAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('totalVatAmount', () => {
      const { label: header, format } = modelConfig['totalVatAmount']

      return worksOrdersColumnHelper.accessor((row) => row.totalVatAmount, {
        id: 'totalVatAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('totalGrossAmount', () => {
      const { label: header, format } = modelConfig['totalGrossAmount']

      return worksOrdersColumnHelper.accessor((row) => row.totalGrossAmount, {
        id: 'totalGrossAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('items', () => {
      const { label: header, format } = modelConfig['items']

      return worksOrdersColumnHelper.accessor((row) => row.items, {
        id: 'items',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return worksOrdersColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('extrasField', () => {
      const { label: header, format } = modelConfig['extrasField']

      return worksOrdersColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return worksOrdersColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useWorksOrdersTable = (args: WorksOrdersArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiWorksOrders({
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
export const worksOrdersIdItemsColumnHelper = createColumnHelper<WorksOrdersIdItemsBody>()

export const getWorksOrdersIdItemsColumn = (property: string, modelConfig: ModelConfig<WorksOrdersIdItemsBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('worksOrderId', () => {
      const { label: header, format } = modelConfig['worksOrderId']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.worksOrderId, {
        id: 'worksOrderId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('chargeTo', () => {
      const { label: header, format } = modelConfig['chargeTo']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.chargeTo, {
        id: 'chargeTo',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('estimate', () => {
      const { label: header, format } = modelConfig['estimate']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.estimate, {
        id: 'estimate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('estimateType', () => {
      const { label: header, format } = modelConfig['estimateType']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.estimateType, {
        id: 'estimateType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('netAmount', () => {
      const { label: header, format } = modelConfig['netAmount']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vatAmount', () => {
      const { label: header, format } = modelConfig['vatAmount']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('grossAmount', () => {
      const { label: header, format } = modelConfig['grossAmount']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.grossAmount, {
        id: 'grossAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('reserveAmount', () => {
      const { label: header, format } = modelConfig['reserveAmount']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.reserveAmount, {
        id: 'reserveAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('nominalAccountId', () => {
      const { label: header, format } = modelConfig['nominalAccountId']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row.nominalAccountId, {
        id: 'nominalAccountId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return worksOrdersIdItemsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useWorksOrdersIdItemsTable = (args: WorksOrdersIdItemsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiWorksOrdersIdItems({
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
