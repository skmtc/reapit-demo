import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiOffices } from '@/services/offices.ts'

export const officesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  manager: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  region: z.string().nullable().optional(),
  address: z
    .object({
      buildingName: z.string().nullable().optional(),
      buildingNumber: z.string().nullable().optional(),
      line1: z.string().nullable().optional(),
      line2: z.string().nullable().optional(),
      line3: z.string().nullable().optional(),
      line4: z.string().nullable().optional(),
      postcode: z.string().nullable().optional(),
      countryId: z.string().nullable().optional(),
      geolocation: z
        .object({ latitude: z.number().nullable().optional(), longitude: z.number().nullable().optional() })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  additionalContactDetails: z
    .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  workPhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
  extrasField: z.record(z.string(), z.object({})).nullable().optional(),
})
export type OfficesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  name?: string | undefined | null
  manager?: string | undefined | null
  active?: boolean | undefined | null
  region?: string | undefined | null
  address?:
    | {
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        countryId?: string | undefined | null
        geolocation?: { latitude?: number | undefined | null; longitude?: number | undefined | null } | undefined | null
      }
    | undefined
    | null
  additionalContactDetails?:
    | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
    | undefined
    | null
  workPhone?: string | undefined | null
  email?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
  extrasField?: Record<string, Record<string, never>> | undefined | null
}
export type OfficesArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'negotiators'> | undefined | null
  id?: Array<string> | undefined | null
  address?: string | undefined | null
  name?: string | undefined | null
  region?: string | undefined | null
  active?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
  columns: ColumnsList<OfficesBody>
}

export const officesColumnHelper = createColumnHelper<OfficesBody>()

export const getOfficesColumn = (property: string, { label, format }: ConfigItemLookup<OfficesBody>) => {
  return match(property)
    .with('_links', () => {
      return officesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return officesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return officesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return officesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return officesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('name', () => {
      return officesColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format(info.getValue(), 'name'),
      })
    })
    .with('manager', () => {
      return officesColumnHelper.accessor((row) => row.manager, {
        id: 'manager',
        header: label('manager'),
        cell: (info) => format(info.getValue(), 'manager'),
      })
    })
    .with('active', () => {
      return officesColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format(info.getValue(), 'active'),
      })
    })
    .with('region', () => {
      return officesColumnHelper.accessor((row) => row.region, {
        id: 'region',
        header: label('region'),
        cell: (info) => format(info.getValue(), 'region'),
      })
    })
    .with('address', () => {
      return officesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header: label('address'),
        cell: (info) => format(info.getValue(), 'address'),
      })
    })
    .with('additionalContactDetails', () => {
      return officesColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header: label('additionalContactDetails'),
        cell: (info) => format(info.getValue(), 'additionalContactDetails'),
      })
    })
    .with('workPhone', () => {
      return officesColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header: label('workPhone'),
        cell: (info) => format(info.getValue(), 'workPhone'),
      })
    })
    .with('email', () => {
      return officesColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header: label('email'),
        cell: (info) => format(info.getValue(), 'email'),
      })
    })
    .with('metadata', () => {
      return officesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return officesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .with('extrasField', () => {
      return officesColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header: label('extrasField'),
        cell: (info) => format(info.getValue(), 'extrasField'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useOfficesTable = (args: OfficesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiOffices({
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
