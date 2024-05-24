import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiNegotiators } from '@/services/negotiators.ts'

export const negotiatorsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  jobTitle: z.string().nullable().optional(),
  officeId: z.string().nullable().optional(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  profileImageUrl: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
  diaryOfficeIds: z.array(z.string()).nullable().optional(),
  additionalContactDetails: z
    .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type NegotiatorsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  name?: string | undefined | null
  jobTitle?: string | undefined | null
  officeId?: string | undefined | null
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
  profileImageUrl?: string | undefined | null
  active?: boolean | undefined | null
  diaryNegotiatorIds?: Array<string> | undefined | null
  diaryOfficeIds?: Array<string> | undefined | null
  additionalContactDetails?:
    | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type NegotiatorsArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'office'> | undefined | null
  id?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  email?: string | undefined | null
  name?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  active?: boolean | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<NegotiatorsBody>
}

export const negotiatorsColumnHelper = createColumnHelper<NegotiatorsBody>()

export const getNegotiatorsColumn = (property: string, { label, format }: ConfigItemLookup<NegotiatorsBody>) => {
  return match(property)
    .with('_links', () => {
      return negotiatorsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return negotiatorsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return negotiatorsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return negotiatorsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return negotiatorsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('name', () => {
      return negotiatorsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format('name', info.getValue()),
      })
    })
    .with('jobTitle', () => {
      return negotiatorsColumnHelper.accessor((row) => row.jobTitle, {
        id: 'jobTitle',
        header: label('jobTitle'),
        cell: (info) => format('jobTitle', info.getValue()),
      })
    })
    .with('officeId', () => {
      return negotiatorsColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header: label('officeId'),
        cell: (info) => format('officeId', info.getValue()),
      })
    })
    .with('workPhone', () => {
      return negotiatorsColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header: label('workPhone'),
        cell: (info) => format('workPhone', info.getValue()),
      })
    })
    .with('mobilePhone', () => {
      return negotiatorsColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header: label('mobilePhone'),
        cell: (info) => format('mobilePhone', info.getValue()),
      })
    })
    .with('email', () => {
      return negotiatorsColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header: label('email'),
        cell: (info) => format('email', info.getValue()),
      })
    })
    .with('profileImageUrl', () => {
      return negotiatorsColumnHelper.accessor((row) => row.profileImageUrl, {
        id: 'profileImageUrl',
        header: label('profileImageUrl'),
        cell: (info) => format('profileImageUrl', info.getValue()),
      })
    })
    .with('active', () => {
      return negotiatorsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format('active', info.getValue()),
      })
    })
    .with('diaryNegotiatorIds', () => {
      return negotiatorsColumnHelper.accessor((row) => row.diaryNegotiatorIds, {
        id: 'diaryNegotiatorIds',
        header: label('diaryNegotiatorIds'),
        cell: (info) => format('diaryNegotiatorIds', info.getValue()),
      })
    })
    .with('diaryOfficeIds', () => {
      return negotiatorsColumnHelper.accessor((row) => row.diaryOfficeIds, {
        id: 'diaryOfficeIds',
        header: label('diaryOfficeIds'),
        cell: (info) => format('diaryOfficeIds', info.getValue()),
      })
    })
    .with('additionalContactDetails', () => {
      return negotiatorsColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header: label('additionalContactDetails'),
        cell: (info) => format('additionalContactDetails', info.getValue()),
      })
    })
    .with('metadata', () => {
      return negotiatorsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format('metadata', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return negotiatorsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useNegotiatorsTable = (args: NegotiatorsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiNegotiators({
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
