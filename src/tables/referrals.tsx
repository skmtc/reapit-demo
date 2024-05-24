import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiReferrals, useGetApiReferralsTypes } from '@/services/referrals.ts'

export const referralsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  referralTypeId: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  applicantId: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  amount: z.number().nullable().optional(),
  paid: z.string().nullable().optional(),
  accepted: z.string().nullable().optional(),
  related: z
    .object({
      id: z.string().nullable().optional(),
      title: z.string().nullable().optional(),
      forename: z.string().nullable().optional(),
      surname: z.string().nullable().optional(),
      mobilePhone: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type ReferralsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  referralTypeId?: string | undefined | null
  type?: string | undefined | null
  negotiatorId?: string | undefined | null
  propertyId?: string | undefined | null
  applicantId?: string | undefined | null
  contactId?: string | undefined | null
  status?: string | undefined | null
  amount?: number | undefined | null
  paid?: string | undefined | null
  accepted?: string | undefined | null
  related?:
    | {
        id?: string | undefined | null
        title?: string | undefined | null
        forename?: string | undefined | null
        surname?: string | undefined | null
        mobilePhone?: string | undefined | null
        email?: string | undefined | null
      }
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type ReferralsArgs = {
  id?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  applicantId?: Array<string> | undefined | null
  contactId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  referralTypeId?: Array<string> | undefined | null
  status?: Array<'sent' | 'inProgress' | 'succeeded' | 'cancelled' | 'failed' | 'paid' | 'declined'> | undefined | null
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | undefined | null
  sortBy?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<ReferralsBody>
}
export const referralsTypesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
})
export type ReferralsTypesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  name?: string | undefined | null
}
export type ReferralsTypesArgs = {
  id?: Array<string> | undefined | null
  sortBy?: string | undefined | null
  columns: ColumnsList<ReferralsTypesBody>
}

export const referralsColumnHelper = createColumnHelper<ReferralsBody>()

export const getReferralsColumn = (property: string, { label, format }: ConfigItemLookup<ReferralsBody>) => {
  return match(property)
    .with('_links', () => {
      return referralsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return referralsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return referralsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return referralsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return referralsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('referralTypeId', () => {
      return referralsColumnHelper.accessor((row) => row.referralTypeId, {
        id: 'referralTypeId',
        header: label('referralTypeId'),
        cell: (info) => format('referralTypeId', info.getValue()),
      })
    })
    .with('type', () => {
      return referralsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format('type', info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      return referralsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format('negotiatorId', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return referralsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('applicantId', () => {
      return referralsColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header: label('applicantId'),
        cell: (info) => format('applicantId', info.getValue()),
      })
    })
    .with('contactId', () => {
      return referralsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header: label('contactId'),
        cell: (info) => format('contactId', info.getValue()),
      })
    })
    .with('status', () => {
      return referralsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format('status', info.getValue()),
      })
    })
    .with('amount', () => {
      return referralsColumnHelper.accessor((row) => row.amount, {
        id: 'amount',
        header: label('amount'),
        cell: (info) => format('amount', info.getValue()),
      })
    })
    .with('paid', () => {
      return referralsColumnHelper.accessor((row) => row.paid, {
        id: 'paid',
        header: label('paid'),
        cell: (info) => format('paid', info.getValue()),
      })
    })
    .with('accepted', () => {
      return referralsColumnHelper.accessor((row) => row.accepted, {
        id: 'accepted',
        header: label('accepted'),
        cell: (info) => format('accepted', info.getValue()),
      })
    })
    .with('related', () => {
      return referralsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header: label('related'),
        cell: (info) => format('related', info.getValue()),
      })
    })
    .with('metadata', () => {
      return referralsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format('metadata', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return referralsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useReferralsTable = (args: ReferralsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiReferrals({
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
export const referralsTypesColumnHelper = createColumnHelper<ReferralsTypesBody>()

export const getReferralsTypesColumn = (property: string, { label, format }: ConfigItemLookup<ReferralsTypesBody>) => {
  return match(property)
    .with('_links', () => {
      return referralsTypesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return referralsTypesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return referralsTypesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('name', () => {
      return referralsTypesColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format('name', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useReferralsTypesTable = (args: ReferralsTypesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiReferralsTypes({
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
