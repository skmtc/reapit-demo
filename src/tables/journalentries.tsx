import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiJournalEntries, useGetApiJournalEntriesLandlords } from '@/services/journalentries.ts'

export const journalEntriesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  created: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  associatedType: z.string().nullable().optional(),
  associatedId: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
})
export type JournalEntriesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  created?: string | undefined | null
  propertyId?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  typeId?: string | undefined | null
  negotiatorId?: string | undefined | null
  description?: string | undefined | null
}
export type JournalEntriesArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'property' | 'negotiator' | 'type'> | undefined | null
  associatedType?: string | undefined | null
  associatedId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  typeId?: Array<string> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  columns: ColumnsList<JournalEntriesBody>
}
export const journalEntriesLandlordsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  created: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  landlordId: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
})
export type JournalEntriesLandlordsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  created?: string | undefined | null
  propertyId?: string | undefined | null
  landlordId?: string | undefined | null
  type?: string | undefined | null
  negotiatorId?: string | undefined | null
  description?: string | undefined | null
}
export type JournalEntriesLandlordsArgs = {
  sortBy?: string | undefined | null
  landlordId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  type?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  columns: ColumnsList<JournalEntriesLandlordsBody>
}

export const journalEntriesColumnHelper = createColumnHelper<JournalEntriesBody>()

export const getJournalEntriesColumn = (property: string, { label, format }: ConfigItemLookup<JournalEntriesBody>) => {
  return match(property)
    .with('_links', () => {
      return journalEntriesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return journalEntriesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('created', () => {
      return journalEntriesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('propertyId', () => {
      return journalEntriesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('associatedType', () => {
      return journalEntriesColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header: label('associatedType'),
        cell: (info) => format(info.getValue(), 'associatedType'),
      })
    })
    .with('associatedId', () => {
      return journalEntriesColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header: label('associatedId'),
        cell: (info) => format(info.getValue(), 'associatedId'),
      })
    })
    .with('typeId', () => {
      return journalEntriesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('negotiatorId', () => {
      return journalEntriesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('description', () => {
      return journalEntriesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useJournalEntriesTable = (args: JournalEntriesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntries({
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
export const journalEntriesLandlordsColumnHelper = createColumnHelper<JournalEntriesLandlordsBody>()

export const getJournalEntriesLandlordsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<JournalEntriesLandlordsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('created', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('propertyId', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('landlordId', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header: label('landlordId'),
        cell: (info) => format(info.getValue(), 'landlordId'),
      })
    })
    .with('type', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('negotiatorId', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('description', () => {
      return journalEntriesLandlordsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useJournalEntriesLandlordsTable = (args: JournalEntriesLandlordsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntriesLandlords({
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
