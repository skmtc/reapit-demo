import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiLandlords, useGetApiLandlordsIdRelationships } from '@/services/landlords.ts'

export const landlordsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  solicitorId: z.string().nullable().optional(),
  officeId: z.string().nullable().optional(),
  source: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
  related: z
    .array(
      z.object({
        id: z.string().nullable().optional(),
        name: z.string().nullable().optional(),
        title: z.string().nullable().optional(),
        forename: z.string().nullable().optional(),
        surname: z.string().nullable().optional(),
        dateOfBirth: z.string().nullable().optional(),
        type: z.string().nullable().optional(),
        homePhone: z.string().nullable().optional(),
        workPhone: z.string().nullable().optional(),
        mobilePhone: z.string().nullable().optional(),
        email: z.string().nullable().optional(),
        marketingConsent: z.string().nullable().optional(),
        primaryAddress: z
          .object({
            buildingName: z.string().nullable().optional(),
            buildingNumber: z.string().nullable().optional(),
            line1: z.string().nullable().optional(),
            line2: z.string().nullable().optional(),
            line3: z.string().nullable().optional(),
            line4: z.string().nullable().optional(),
            postcode: z.string().nullable().optional(),
            countryId: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        additionalContactDetails: z
          .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
          .nullable()
          .optional(),
      }),
    )
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type LandlordsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  active?: boolean | undefined | null
  solicitorId?: string | undefined | null
  officeId?: string | undefined | null
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  related?:
    | Array<{
        id?: string | undefined | null
        name?: string | undefined | null
        title?: string | undefined | null
        forename?: string | undefined | null
        surname?: string | undefined | null
        dateOfBirth?: string | undefined | null
        type?: string | undefined | null
        homePhone?: string | undefined | null
        workPhone?: string | undefined | null
        mobilePhone?: string | undefined | null
        email?: string | undefined | null
        marketingConsent?: string | undefined | null
        primaryAddress?:
          | {
              buildingName?: string | undefined | null
              buildingNumber?: string | undefined | null
              line1?: string | undefined | null
              line2?: string | undefined | null
              line3?: string | undefined | null
              line4?: string | undefined | null
              postcode?: string | undefined | null
              countryId?: string | undefined | null
            }
          | undefined
          | null
        additionalContactDetails?:
          | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
          | undefined
          | null
      }>
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  extrasField?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type LandlordsArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | undefined | null
  id?: Array<string> | undefined | null
  email?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
  active?: boolean | undefined | null
  address?: string | undefined | null
  name?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<LandlordsBody>
}
export const landlordsIdRelationshipsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  landlordId: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  associatedType: z.string().nullable().optional(),
  associatedId: z.string().nullable().optional(),
  isMain: z.boolean().nullable().optional(),
})
export type LandlordsIdRelationshipsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  landlordId?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  isMain?: boolean | undefined | null
}
export type LandlordsIdRelationshipsArgs = { id: string; columns: ColumnsList<LandlordsIdRelationshipsBody> }

export const landlordsColumnHelper = createColumnHelper<LandlordsBody>()

export const getLandlordsColumn = (property: string, { label, format }: ConfigItemLookup<LandlordsBody>) => {
  return match(property)
    .with('_links', () => {
      return landlordsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return landlordsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return landlordsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return landlordsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return landlordsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('active', () => {
      return landlordsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format('active', info.getValue()),
      })
    })
    .with('solicitorId', () => {
      return landlordsColumnHelper.accessor((row) => row.solicitorId, {
        id: 'solicitorId',
        header: label('solicitorId'),
        cell: (info) => format('solicitorId', info.getValue()),
      })
    })
    .with('officeId', () => {
      return landlordsColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header: label('officeId'),
        cell: (info) => format('officeId', info.getValue()),
      })
    })
    .with('source', () => {
      return landlordsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header: label('source'),
        cell: (info) => format('source', info.getValue()),
      })
    })
    .with('related', () => {
      return landlordsColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header: label('related'),
        cell: (info) => format('related', info.getValue()),
      })
    })
    .with('metadata', () => {
      return landlordsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format('metadata', info.getValue()),
      })
    })
    .with('extrasField', () => {
      return landlordsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header: label('extrasField'),
        cell: (info) => format('extrasField', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return landlordsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useLandlordsTable = (args: LandlordsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlords({
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
export const landlordsIdRelationshipsColumnHelper = createColumnHelper<LandlordsIdRelationshipsBody>()

export const getLandlordsIdRelationshipsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<LandlordsIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('landlordId', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header: label('landlordId'),
        cell: (info) => format('landlordId', info.getValue()),
      })
    })
    .with('created', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('associatedType', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header: label('associatedType'),
        cell: (info) => format('associatedType', info.getValue()),
      })
    })
    .with('associatedId', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header: label('associatedId'),
        cell: (info) => format('associatedId', info.getValue()),
      })
    })
    .with('isMain', () => {
      return landlordsIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header: label('isMain'),
        cell: (info) => format('isMain', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useLandlordsIdRelationshipsTable = (args: LandlordsIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlordsIdRelationships({
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
