import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiCompanies, useGetApiCompaniesIdRelationships } from '@/services/companies.ts'

export const companiesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  branch: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  marketingConsent: z.string().nullable().optional(),
  vatRegistered: z.boolean().nullable().optional(),
  typeIds: z.array(z.string()).nullable().optional(),
  supplierTypeId: z.string().nullable().optional(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  archivedOn: z.string().nullable().optional(),
  fromArchive: z.boolean().nullable().optional(),
  address: z
    .object({
      buildingName: z.string().nullable().optional(),
      buildingNumber: z.string().nullable().optional(),
      line1: z.string().nullable().optional(),
      line2: z.string().nullable().optional(),
      line3: z.string().nullable().optional(),
      line4: z.string().nullable().optional(),
      postcode: z.string().nullable().optional(),
      country: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  payments: z.object({ nominalAccountId: z.string().nullable().optional() }).nullable().optional(),
  additionalContactDetails: z
    .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  officeIds: z.array(z.string()).nullable().optional(),
  negotiatorIds: z.array(z.string()).nullable().optional(),
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  communicationPreferencePhone: z.boolean().nullable().optional(),
  communicationPreferenceSms: z.boolean().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
  relationships: z
    .array(
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        id: z.string().nullable().optional(),
        created: z.string().nullable().optional(),
        modified: z.string().nullable().optional(),
        companyId: z.string().nullable().optional(),
        associatedType: z.string().nullable().optional(),
        associatedId: z.string().nullable().optional(),
        fromArchive: z.boolean().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
export type CompaniesBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  name?: string | undefined | null
  branch?: string | undefined | null
  notes?: string | undefined | null
  active?: boolean | undefined | null
  marketingConsent?: string | undefined | null
  vatRegistered?: boolean | undefined | null
  typeIds?: Array<string> | undefined | null
  supplierTypeId?: string | undefined | null
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
  archivedOn?: string | undefined | null
  fromArchive?: boolean | undefined | null
  address?:
    | {
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        country?: string | undefined | null
      }
    | undefined
    | null
  payments?: { nominalAccountId?: string | undefined | null } | undefined | null
  additionalContactDetails?:
    | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
    | undefined
    | null
  officeIds?: Array<string> | undefined | null
  negotiatorIds?: Array<string> | undefined | null
  communicationPreferenceLetter?: boolean | undefined | null
  communicationPreferenceEmail?: boolean | undefined | null
  communicationPreferencePhone?: boolean | undefined | null
  communicationPreferenceSms?: boolean | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
  relationships?:
    | Array<{
        _links?: Record<string, { href?: string | undefined | null }> | undefined | null
        _embedded?: Record<string, Record<string, never>> | undefined | null
        id?: string | undefined | null
        created?: string | undefined | null
        modified?: string | undefined | null
        companyId?: string | undefined | null
        associatedType?: string | undefined | null
        associatedId?: string | undefined | null
        fromArchive?: boolean | undefined | null
      }>
    | undefined
    | null
}
export type CompaniesArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'companyTypes' | 'relationships'> | undefined | null
  id?: Array<string> | undefined | null
  address?: string | undefined | null
  branch?: string | undefined | null
  name?: string | undefined | null
  typeId?: string | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  contactDetail?: Array<string> | undefined | null
  fromArchive?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<CompaniesBody>
}
export const companiesIdRelationshipsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  companyId: z.string().nullable().optional(),
  associatedType: z.string().nullable().optional(),
  associatedId: z.string().nullable().optional(),
  fromArchive: z.boolean().nullable().optional(),
})
export type CompaniesIdRelationshipsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  companyId?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  fromArchive?: boolean | undefined | null
}
export type CompaniesIdRelationshipsArgs = { id: string; columns: ColumnsList<CompaniesIdRelationshipsBody> }

export const companiesColumnHelper = createColumnHelper<CompaniesBody>()

export const getCompaniesColumn = (property: string, { label, format }: ConfigItemLookup<CompaniesBody>) => {
  return match(property)
    .with('_links', () => {
      return companiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return companiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return companiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return companiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return companiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('name', () => {
      return companiesColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format(info.getValue(), 'name'),
      })
    })
    .with('branch', () => {
      return companiesColumnHelper.accessor((row) => row.branch, {
        id: 'branch',
        header: label('branch'),
        cell: (info) => format(info.getValue(), 'branch'),
      })
    })
    .with('notes', () => {
      return companiesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format(info.getValue(), 'notes'),
      })
    })
    .with('active', () => {
      return companiesColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format(info.getValue(), 'active'),
      })
    })
    .with('marketingConsent', () => {
      return companiesColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header: label('marketingConsent'),
        cell: (info) => format(info.getValue(), 'marketingConsent'),
      })
    })
    .with('vatRegistered', () => {
      return companiesColumnHelper.accessor((row) => row.vatRegistered, {
        id: 'vatRegistered',
        header: label('vatRegistered'),
        cell: (info) => format(info.getValue(), 'vatRegistered'),
      })
    })
    .with('typeIds', () => {
      return companiesColumnHelper.accessor((row) => row.typeIds, {
        id: 'typeIds',
        header: label('typeIds'),
        cell: (info) => format(info.getValue(), 'typeIds'),
      })
    })
    .with('supplierTypeId', () => {
      return companiesColumnHelper.accessor((row) => row.supplierTypeId, {
        id: 'supplierTypeId',
        header: label('supplierTypeId'),
        cell: (info) => format(info.getValue(), 'supplierTypeId'),
      })
    })
    .with('workPhone', () => {
      return companiesColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header: label('workPhone'),
        cell: (info) => format(info.getValue(), 'workPhone'),
      })
    })
    .with('mobilePhone', () => {
      return companiesColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header: label('mobilePhone'),
        cell: (info) => format(info.getValue(), 'mobilePhone'),
      })
    })
    .with('email', () => {
      return companiesColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header: label('email'),
        cell: (info) => format(info.getValue(), 'email'),
      })
    })
    .with('archivedOn', () => {
      return companiesColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header: label('archivedOn'),
        cell: (info) => format(info.getValue(), 'archivedOn'),
      })
    })
    .with('fromArchive', () => {
      return companiesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .with('address', () => {
      return companiesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header: label('address'),
        cell: (info) => format(info.getValue(), 'address'),
      })
    })
    .with('payments', () => {
      return companiesColumnHelper.accessor((row) => row.payments, {
        id: 'payments',
        header: label('payments'),
        cell: (info) => format(info.getValue(), 'payments'),
      })
    })
    .with('additionalContactDetails', () => {
      return companiesColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header: label('additionalContactDetails'),
        cell: (info) => format(info.getValue(), 'additionalContactDetails'),
      })
    })
    .with('officeIds', () => {
      return companiesColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header: label('officeIds'),
        cell: (info) => format(info.getValue(), 'officeIds'),
      })
    })
    .with('negotiatorIds', () => {
      return companiesColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header: label('negotiatorIds'),
        cell: (info) => format(info.getValue(), 'negotiatorIds'),
      })
    })
    .with('communicationPreferenceLetter', () => {
      return companiesColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header: label('communicationPreferenceLetter'),
        cell: (info) => format(info.getValue(), 'communicationPreferenceLetter'),
      })
    })
    .with('communicationPreferenceEmail', () => {
      return companiesColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header: label('communicationPreferenceEmail'),
        cell: (info) => format(info.getValue(), 'communicationPreferenceEmail'),
      })
    })
    .with('communicationPreferencePhone', () => {
      return companiesColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header: label('communicationPreferencePhone'),
        cell: (info) => format(info.getValue(), 'communicationPreferencePhone'),
      })
    })
    .with('communicationPreferenceSms', () => {
      return companiesColumnHelper.accessor((row) => row.communicationPreferenceSms, {
        id: 'communicationPreferenceSms',
        header: label('communicationPreferenceSms'),
        cell: (info) => format(info.getValue(), 'communicationPreferenceSms'),
      })
    })
    .with('metadata', () => {
      return companiesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return companiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .with('relationships', () => {
      return companiesColumnHelper.accessor((row) => row.relationships, {
        id: 'relationships',
        header: label('relationships'),
        cell: (info) => format(info.getValue(), 'relationships'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useCompaniesTable = (args: CompaniesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiCompanies({
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
export const companiesIdRelationshipsColumnHelper = createColumnHelper<CompaniesIdRelationshipsBody>()

export const getCompaniesIdRelationshipsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<CompaniesIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('companyId', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header: label('companyId'),
        cell: (info) => format(info.getValue(), 'companyId'),
      })
    })
    .with('associatedType', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header: label('associatedType'),
        cell: (info) => format(info.getValue(), 'associatedType'),
      })
    })
    .with('associatedId', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header: label('associatedId'),
        cell: (info) => format(info.getValue(), 'associatedId'),
      })
    })
    .with('fromArchive', () => {
      return companiesIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useCompaniesIdRelationshipsTable = (args: CompaniesIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiCompaniesIdRelationships({
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
