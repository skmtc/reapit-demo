import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: number | undefined
  created?: string | undefined
  modified?: string | undefined
  title?: string | undefined
  forename?: string | undefined
  surname?: string | undefined
  enquiryType?: string | undefined
  message?: string | undefined
  status?: string | undefined
  marketingConsent?: string | undefined
  position?: string | undefined
  officeId?: string | undefined
  applicantId?: string | undefined
  negotiatorId?: string | undefined
  sourceName?: string | undefined
  homePhone?: string | undefined
  workPhone?: string | undefined
  mobilePhone?: string | undefined
  email?: string | undefined
  address?:
    | {
        buildingName?: string | undefined
        buildingNumber?: string | undefined
        line1?: string | undefined
        line2?: string | undefined
        line3?: string | undefined
        line4?: string | undefined
        postcode?: string | undefined
        countryId?: string | undefined
      }
    | undefined
  buying?: { priceFrom?: number | undefined; priceTo?: number | undefined } | undefined
  renting?:
    | { rentFrom?: number | undefined; rentTo?: number | undefined; rentFrequency?: string | undefined }
    | undefined
  bedrooms?: number | undefined
  propertyIds?: Array<string> | undefined
  _eTag?: string | undefined
}
export type EnquiriesArgs = {
  sortBy?: string | undefined
  enquiryType?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<EnquiriesBody>
}

export const enquiriesColumnHelper = createColumnHelper<EnquiriesBody>()

export const getEnquiriesColumn = (property: string, modelConfig: ModelConfig<EnquiriesBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return enquiriesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return enquiriesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return enquiriesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return enquiriesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return enquiriesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('title', () => {
      const { label: header, format } = modelConfig['title']

      return enquiriesColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('forename', () => {
      const { label: header, format } = modelConfig['forename']

      return enquiriesColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('surname', () => {
      const { label: header, format } = modelConfig['surname']

      return enquiriesColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('enquiryType', () => {
      const { label: header, format } = modelConfig['enquiryType']

      return enquiriesColumnHelper.accessor((row) => row.enquiryType, {
        id: 'enquiryType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('message', () => {
      const { label: header, format } = modelConfig['message']

      return enquiriesColumnHelper.accessor((row) => row.message, {
        id: 'message',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return enquiriesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format } = modelConfig['marketingConsent']

      return enquiriesColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('position', () => {
      const { label: header, format } = modelConfig['position']

      return enquiriesColumnHelper.accessor((row) => row.position, {
        id: 'position',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeId', () => {
      const { label: header, format } = modelConfig['officeId']

      return enquiriesColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('applicantId', () => {
      const { label: header, format } = modelConfig['applicantId']

      return enquiriesColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return enquiriesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('sourceName', () => {
      const { label: header, format } = modelConfig['sourceName']

      return enquiriesColumnHelper.accessor((row) => row.sourceName, {
        id: 'sourceName',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('homePhone', () => {
      const { label: header, format } = modelConfig['homePhone']

      return enquiriesColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('workPhone', () => {
      const { label: header, format } = modelConfig['workPhone']

      return enquiriesColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format } = modelConfig['mobilePhone']

      return enquiriesColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('email', () => {
      const { label: header, format } = modelConfig['email']

      return enquiriesColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('address', () => {
      const { label: header, format } = modelConfig['address']

      return enquiriesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buying', () => {
      const { label: header, format } = modelConfig['buying']

      return enquiriesColumnHelper.accessor((row) => row.buying, {
        id: 'buying',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('renting', () => {
      const { label: header, format } = modelConfig['renting']

      return enquiriesColumnHelper.accessor((row) => row.renting, {
        id: 'renting',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bedrooms', () => {
      const { label: header, format } = modelConfig['bedrooms']

      return enquiriesColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyIds', () => {
      const { label: header, format } = modelConfig['propertyIds']

      return enquiriesColumnHelper.accessor((row) => row.propertyIds, {
        id: 'propertyIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return enquiriesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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
