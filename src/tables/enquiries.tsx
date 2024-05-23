import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiEnquiries } from '@/services/enquiries.ts'

export const enquiriesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.number().int().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  title: z.string().nullable().optional(),
  forename: z.string().nullable().optional(),
  surname: z.string().nullable().optional(),
  enquiryType: z.string().nullable().optional(),
  message: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  marketingConsent: z.string().nullable().optional(),
  position: z.string().nullable().optional(),
  officeId: z.string().nullable().optional(),
  applicantId: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  sourceName: z.string().nullable().optional(),
  homePhone: z.string().nullable().optional(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
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
    })
    .nullable()
    .optional(),
  buying: z
    .object({ priceFrom: z.number().int().nullable().optional(), priceTo: z.number().int().nullable().optional() })
    .nullable()
    .optional(),
  renting: z
    .object({
      rentFrom: z.number().nullable().optional(),
      rentTo: z.number().nullable().optional(),
      rentFrequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  bedrooms: z.number().int().nullable().optional(),
  propertyIds: z.array(z.string()).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type EnquiriesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: number | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  title?: string | undefined | null
  forename?: string | undefined | null
  surname?: string | undefined | null
  enquiryType?: string | undefined | null
  message?: string | undefined | null
  status?: string | undefined | null
  marketingConsent?: string | undefined | null
  position?: string | undefined | null
  officeId?: string | undefined | null
  applicantId?: string | undefined | null
  negotiatorId?: string | undefined | null
  sourceName?: string | undefined | null
  homePhone?: string | undefined | null
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
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
      }
    | undefined
    | null
  buying?: { priceFrom?: number | undefined | null; priceTo?: number | undefined | null } | undefined | null
  renting?:
    | {
        rentFrom?: number | undefined | null
        rentTo?: number | undefined | null
        rentFrequency?: string | undefined | null
      }
    | undefined
    | null
  bedrooms?: number | undefined | null
  propertyIds?: Array<string> | undefined | null
  _eTag?: string | undefined | null
}
export type EnquiriesArgs = {
  sortBy?: string | undefined | null
  enquiryType?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  columns: ColumnsList<EnquiriesBody>
}

export const enquiriesColumnHelper = createColumnHelper<EnquiriesBody>()

export const getEnquiriesColumn = (property: string, { label, format }: ConfigItemLookup<EnquiriesBody>) => {
  return match(property)
    .with('_links', () => {
      return enquiriesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return enquiriesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return enquiriesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return enquiriesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return enquiriesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('title', () => {
      return enquiriesColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header: label('title'),
        cell: (info) => format(info.getValue(), 'title'),
      })
    })
    .with('forename', () => {
      return enquiriesColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header: label('forename'),
        cell: (info) => format(info.getValue(), 'forename'),
      })
    })
    .with('surname', () => {
      return enquiriesColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header: label('surname'),
        cell: (info) => format(info.getValue(), 'surname'),
      })
    })
    .with('enquiryType', () => {
      return enquiriesColumnHelper.accessor((row) => row.enquiryType, {
        id: 'enquiryType',
        header: label('enquiryType'),
        cell: (info) => format(info.getValue(), 'enquiryType'),
      })
    })
    .with('message', () => {
      return enquiriesColumnHelper.accessor((row) => row.message, {
        id: 'message',
        header: label('message'),
        cell: (info) => format(info.getValue(), 'message'),
      })
    })
    .with('status', () => {
      return enquiriesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('marketingConsent', () => {
      return enquiriesColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header: label('marketingConsent'),
        cell: (info) => format(info.getValue(), 'marketingConsent'),
      })
    })
    .with('position', () => {
      return enquiriesColumnHelper.accessor((row) => row.position, {
        id: 'position',
        header: label('position'),
        cell: (info) => format(info.getValue(), 'position'),
      })
    })
    .with('officeId', () => {
      return enquiriesColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header: label('officeId'),
        cell: (info) => format(info.getValue(), 'officeId'),
      })
    })
    .with('applicantId', () => {
      return enquiriesColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header: label('applicantId'),
        cell: (info) => format(info.getValue(), 'applicantId'),
      })
    })
    .with('negotiatorId', () => {
      return enquiriesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('sourceName', () => {
      return enquiriesColumnHelper.accessor((row) => row.sourceName, {
        id: 'sourceName',
        header: label('sourceName'),
        cell: (info) => format(info.getValue(), 'sourceName'),
      })
    })
    .with('homePhone', () => {
      return enquiriesColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header: label('homePhone'),
        cell: (info) => format(info.getValue(), 'homePhone'),
      })
    })
    .with('workPhone', () => {
      return enquiriesColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header: label('workPhone'),
        cell: (info) => format(info.getValue(), 'workPhone'),
      })
    })
    .with('mobilePhone', () => {
      return enquiriesColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header: label('mobilePhone'),
        cell: (info) => format(info.getValue(), 'mobilePhone'),
      })
    })
    .with('email', () => {
      return enquiriesColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header: label('email'),
        cell: (info) => format(info.getValue(), 'email'),
      })
    })
    .with('address', () => {
      return enquiriesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header: label('address'),
        cell: (info) => format(info.getValue(), 'address'),
      })
    })
    .with('buying', () => {
      return enquiriesColumnHelper.accessor((row) => row.buying, {
        id: 'buying',
        header: label('buying'),
        cell: (info) => format(info.getValue(), 'buying'),
      })
    })
    .with('renting', () => {
      return enquiriesColumnHelper.accessor((row) => row.renting, {
        id: 'renting',
        header: label('renting'),
        cell: (info) => format(info.getValue(), 'renting'),
      })
    })
    .with('bedrooms', () => {
      return enquiriesColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header: label('bedrooms'),
        cell: (info) => format(info.getValue(), 'bedrooms'),
      })
    })
    .with('propertyIds', () => {
      return enquiriesColumnHelper.accessor((row) => row.propertyIds, {
        id: 'propertyIds',
        header: label('propertyIds'),
        cell: (info) => format(info.getValue(), 'propertyIds'),
      })
    })
    .with('_eTag', () => {
      return enquiriesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useEnquiriesTable = (args: EnquiriesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiEnquiries({
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
