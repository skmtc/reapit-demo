import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  companyId?: string | undefined | null
  propertyId?: string | undefined | null
  tenancyId?: string | undefined | null
  negotiatorId?: string | undefined | null
  typeId?: string | undefined | null
  status?: string | undefined | null
  description?: string | undefined | null
  reporter?: string | undefined | null
  priority?: string | undefined | null
  booked?: string | undefined | null
  required?: string | undefined | null
  completed?: string | undefined | null
  totalNetAmount?: number | undefined | null
  totalVatAmount?: number | undefined | null
  totalGrossAmount?: number | undefined | null
  items?:
    | Array<{
        _links?: Record<string, { href?: string | undefined | null }> | undefined | null
        _embedded?: Record<string, Record<string, never>> | undefined | null
        id?: string | undefined | null
        worksOrderId?: string | undefined | null
        created?: string | undefined | null
        modified?: string | undefined | null
        notes?: string | undefined | null
        chargeTo?: string | undefined | null
        estimate?: number | undefined | null
        estimateType?: string | undefined | null
        netAmount?: number | undefined | null
        vatAmount?: number | undefined | null
        grossAmount?: number | undefined | null
        reserveAmount?: number | undefined | null
        nominalAccountId?: string | undefined | null
        _eTag?: string | undefined | null
      }>
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  extrasField?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type WorksOrdersArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined | null
  id?: Array<string> | undefined | null
  companyId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
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
    | null
  tenancyId?: Array<string> | undefined | null
  typeId?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
  completedFrom?: string | undefined | null
  completedTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  requiredFrom?: string | undefined | null
  requiredTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  worksOrderId?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  notes?: string | undefined | null
  chargeTo?: string | undefined | null
  estimate?: number | undefined | null
  estimateType?: string | undefined | null
  netAmount?: number | undefined | null
  vatAmount?: number | undefined | null
  grossAmount?: number | undefined | null
  reserveAmount?: number | undefined | null
  nominalAccountId?: string | undefined | null
  _eTag?: string | undefined | null
}
export type WorksOrdersIdItemsArgs = { id: string; columns: ColumnsList<WorksOrdersIdItemsBody> }

export const worksOrdersColumnHelper = createColumnHelper<WorksOrdersBody>()

export const getWorksOrdersColumn = (property: string, { label, format }: ConfigItemLookup<WorksOrdersBody>) => {
  return match(property)
    .with('_links', () => {
      return worksOrdersColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return worksOrdersColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return worksOrdersColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return worksOrdersColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return worksOrdersColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('companyId', () => {
      return worksOrdersColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('propertyId', () => {
      return worksOrdersColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('tenancyId', () => {
      return worksOrdersColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('negotiatorId', () => {
      return worksOrdersColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('typeId', () => {
      return worksOrdersColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('status', () => {
      return worksOrdersColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('description', () => {
      return worksOrdersColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('reporter', () => {
      return worksOrdersColumnHelper.accessor((row) => row.reporter, {
        id: 'reporter',
        header: label('reporter'),
        cell: (info) => format(info.getValue(), 'reporter'),
      })
    })
    .with('priority', () => {
      return worksOrdersColumnHelper.accessor((row) => row.priority, {
        id: 'priority',
        header: label('priority'),
        cell: (info) => format(info.getValue(), 'priority'),
      })
    })
    .with('booked', () => {
      return worksOrdersColumnHelper.accessor((row) => row.booked, {
        id: 'booked',
        header: label('booked'),
        cell: (info) => format(info.getValue(), 'booked'),
      })
    })
    .with('required', () => {
      return worksOrdersColumnHelper.accessor((row) => row.required, {
        id: 'required',
        header: label('required'),
        cell: (info) => format(info.getValue(), 'required'),
      })
    })
    .with('completed', () => {
      return worksOrdersColumnHelper.accessor((row) => row.completed, {
        id: 'completed',
        header: label('completed'),
        cell: (info) => format(info.getValue(), 'completed'),
      })
    })
    .with('totalNetAmount', () => {
      return worksOrdersColumnHelper.accessor((row) => row.totalNetAmount, {
        id: 'totalNetAmount',
        header: label('totalNetAmount'),
        cell: (info) => format(info.getValue(), 'totalNetAmount'),
      })
    })
    .with('totalVatAmount', () => {
      return worksOrdersColumnHelper.accessor((row) => row.totalVatAmount, {
        id: 'totalVatAmount',
        header: label('totalVatAmount'),
        cell: (info) => format(info.getValue(), 'totalVatAmount'),
      })
    })
    .with('totalGrossAmount', () => {
      return worksOrdersColumnHelper.accessor((row) => row.totalGrossAmount, {
        id: 'totalGrossAmount',
        header: label('totalGrossAmount'),
        cell: (info) => format(info.getValue(), 'totalGrossAmount'),
      })
    })
    .with('items', () => {
      return worksOrdersColumnHelper.accessor((row) => row.items, {
        id: 'items',
        header: label('items'),
        cell: (info) => format(info.getValue(), 'items'),
      })
    })
    .with('metadata', () => {
      return worksOrdersColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('extrasField', () => {
      return worksOrdersColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header: label('extrasField'),
        cell: (info) => format(info.getValue(), 'extrasField'),
      })
    })
    .with('_eTag', () => {
      return worksOrdersColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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

export const getWorksOrdersIdItemsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<WorksOrdersIdItemsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('worksOrderId', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.worksOrderId, {
        id: 'worksOrderId',
        header: label('worksOrderId'),
        cell: (info) => format(info.getValue(), 'worksOrderId'),
      })
    })
    .with('created', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('notes', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('chargeTo', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.chargeTo, {
        id: 'chargeTo',
        header: label('chargeTo'),
        cell: (info) => format(info.getValue(), 'chargeTo'),
      })
    })
    .with('estimate', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.estimate, {
        id: 'estimate',
        header: label('estimate'),
        cell: (info) => format(info.getValue(), 'estimate'),
      })
    })
    .with('estimateType', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.estimateType, {
        id: 'estimateType',
        header: label('estimateType'),
        cell: (info) => format(info.getValue(), 'estimateType'),
      })
    })
    .with('netAmount', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.netAmount, {
        id: 'netAmount',
        header: label('netAmount'),
        cell: (info) => format(info.getValue(), 'netAmount'),
      })
    })
    .with('vatAmount', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.vatAmount, {
        id: 'vatAmount',
        header: label('vatAmount'),
        cell: (info) => format(info.getValue(), 'vatAmount'),
      })
    })
    .with('grossAmount', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.grossAmount, {
        id: 'grossAmount',
        header: label('grossAmount'),
        cell: (info) => format(info.getValue(), 'grossAmount'),
      })
    })
    .with('reserveAmount', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.reserveAmount, {
        id: 'reserveAmount',
        header: label('reserveAmount'),
        cell: (info) => format(info.getValue(), 'reserveAmount'),
      })
    })
    .with('nominalAccountId', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row.nominalAccountId, {
        id: 'nominalAccountId',
        header: label('nominalAccountId'),
        cell: (info) => format(info.getValue(), 'nominalAccountId'),
      })
    })
    .with('_eTag', () => {
      return worksOrdersIdItemsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
