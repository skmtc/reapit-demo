import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiIdentityChecks } from '@/services/identitychecks.ts'

export const identityChecksBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  checkDate: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  identityDocument1: z
    .object({
      documentId: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      expiry: z.string().nullable().optional(),
      details: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  identityDocument2: z
    .object({
      documentId: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      expiry: z.string().nullable().optional(),
      details: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type IdentityChecksBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  contactId?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  checkDate?: string | undefined | null
  status?: string | undefined | null
  negotiatorId?: string | undefined | null
  identityDocument1?:
    | {
        documentId?: string | undefined | null
        typeId?: string | undefined | null
        expiry?: string | undefined | null
        details?: string | undefined | null
      }
    | undefined
    | null
  identityDocument2?:
    | {
        documentId?: string | undefined | null
        typeId?: string | undefined | null
        expiry?: string | undefined | null
        details?: string | undefined | null
      }
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type IdentityChecksArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined | null
  id?: Array<string> | undefined | null
  contactId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | undefined | null
  checkDateFrom?: string | undefined | null
  checkDateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<IdentityChecksBody>
}

export const identityChecksColumnHelper = createColumnHelper<IdentityChecksBody>()

export const getIdentityChecksColumn = (property: string, { label, format }: ConfigItemLookup<IdentityChecksBody>) => {
  return match(property)
    .with('_links', () => {
      return identityChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return identityChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return identityChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('contactId', () => {
      return identityChecksColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header: label('contactId'),
        cell: (info) => format(info.getValue(), 'contactId'),
      })
    })
    .with('created', () => {
      return identityChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return identityChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('checkDate', () => {
      return identityChecksColumnHelper.accessor((row) => row.checkDate, {
        id: 'checkDate',
        header: label('checkDate'),
        cell: (info) => format(info.getValue(), 'checkDate'),
      })
    })
    .with('status', () => {
      return identityChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('negotiatorId', () => {
      return identityChecksColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('identityDocument1', () => {
      return identityChecksColumnHelper.accessor((row) => row.identityDocument1, {
        id: 'identityDocument1',
        header: label('identityDocument1'),
        cell: (info) => format(info.getValue(), 'identityDocument1'),
      })
    })
    .with('identityDocument2', () => {
      return identityChecksColumnHelper.accessor((row) => row.identityDocument2, {
        id: 'identityDocument2',
        header: label('identityDocument2'),
        cell: (info) => format(info.getValue(), 'identityDocument2'),
      })
    })
    .with('metadata', () => {
      return identityChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return identityChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useIdentityChecksTable = (args: IdentityChecksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiIdentityChecks({
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
