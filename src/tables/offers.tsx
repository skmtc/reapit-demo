import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiOffers } from '@/services/offers.ts'

export const offersBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  currency: z.string().nullable().optional(),
  applicantId: z.string().nullable().optional(),
  companyId: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  date: z.string().nullable().optional(),
  amount: z.number().nullable().optional(),
  status: z.string().nullable().optional(),
  inclusions: z.string().nullable().optional(),
  exclusions: z.string().nullable().optional(),
  conditions: z.string().nullable().optional(),
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
  _eTag: z.string().nullable().optional(),
})
export type OffersBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  currency?: string | undefined | null
  applicantId?: string | undefined | null
  companyId?: string | undefined | null
  contactId?: string | undefined | null
  propertyId?: string | undefined | null
  negotiatorId?: string | undefined | null
  date?: string | undefined | null
  amount?: number | undefined | null
  status?: string | undefined | null
  inclusions?: string | undefined | null
  exclusions?: string | undefined | null
  conditions?: string | undefined | null
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
  _eTag?: string | undefined | null
}
export type OffersArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | undefined | null
  id?: Array<string> | undefined | null
  applicantId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  status?:
    | Array<'pending' | 'withdrawn' | 'rejected' | 'accepted' | 'noteOfInterest' | 'noteOfInterestWithdrawn'>
    | undefined
    | null
  address?: string | undefined | null
  name?: string | undefined | null
  amountFrom?: number | undefined | null
  amountTo?: number | undefined | null
  dateFrom?: string | undefined | null
  dateTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<OffersBody>
}

export const offersColumnHelper = createColumnHelper<OffersBody>()

export const getOffersColumn = (property: string, { label, format }: ConfigItemLookup<OffersBody>) => {
  return match(property)
    .with('_links', () => {
      return offersColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return offersColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return offersColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return offersColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return offersColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('currency', () => {
      return offersColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header: label('currency'),
        cell: (info) => format(info.getValue(), 'currency'),
      })
    })
    .with('applicantId', () => {
      return offersColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header: label('applicantId'),
        cell: (info) => format(info.getValue(), 'applicantId'),
      })
    })
    .with('companyId', () => {
      return offersColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('contactId', () => {
      return offersColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header: label('contactId'),
        cell: (info) => format(info.getValue(), 'contactId'),
      })
    })
    .with('propertyId', () => {
      return offersColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('negotiatorId', () => {
      return offersColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('date', () => {
      return offersColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header: label('date'),
        cell: (info) => format(info.getValue(), 'date'),
      })
    })
    .with('amount', () => {
      return offersColumnHelper.accessor((row) => row.amount, {
        id: 'amount',
        header: label('amount'),
        cell: (info) => format(info.getValue(), 'amount'),
      })
    })
    .with('status', () => {
      return offersColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('inclusions', () => {
      return offersColumnHelper.accessor((row) => row.inclusions, {
        id: 'inclusions',
        header: label('inclusions'),
        cell: (info) => format(info.getValue(), 'inclusions'),
      })
    })
    .with('exclusions', () => {
      return offersColumnHelper.accessor((row) => row.exclusions, {
        id: 'exclusions',
        header: label('exclusions'),
        cell: (info) => format(info.getValue(), 'exclusions'),
      })
    })
    .with('conditions', () => {
      return offersColumnHelper.accessor((row) => row.conditions, {
        id: 'conditions',
        header: label('conditions'),
        cell: (info) => format(info.getValue(), 'conditions'),
      })
    })
    .with('related', () => {
      return offersColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header: label('related'),
        cell: (info) => format(info.getValue(), 'related'),
      })
    })
    .with('metadata', () => {
      return offersColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return offersColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useOffersTable = (args: OffersArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiOffers({
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
