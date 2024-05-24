import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiContacts,
  useGetApiContactsIdRelationships,
  useGetApiContactsIdSubscriptions,
} from '@/services/contacts.ts'

export const contactsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  title: z.string().nullable().optional(),
  forename: z.string().nullable().optional(),
  surname: z.string().nullable().optional(),
  dateOfBirth: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  marketingConsent: z.string().nullable().optional(),
  identityCheck: z.string().nullable().optional(),
  source: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
  homePhone: z.string().nullable().optional(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  archivedOn: z.string().nullable().optional(),
  fromArchive: z.boolean().nullable().optional(),
  primaryAddress: z
    .object({
      type: z.string().nullable().optional(),
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
  secondaryAddress: z
    .object({
      type: z.string().nullable().optional(),
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
  workAddress: z
    .object({
      type: z.string().nullable().optional(),
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
  officeIds: z.array(z.string()).nullable().optional(),
  negotiatorIds: z.array(z.string()).nullable().optional(),
  categoryIds: z.array(z.string()).nullable().optional(),
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  communicationPreferencePhone: z.boolean().nullable().optional(),
  communicationPreferenceSMS: z.boolean().nullable().optional(),
  additionalContactDetails: z
    .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
  extrasField: z.record(z.string(), z.object({})).nullable().optional(),
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
        contactId: z.string().nullable().optional(),
        associatedType: z.string().nullable().optional(),
        associatedId: z.string().nullable().optional(),
        fromArchive: z.boolean().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
export type ContactsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  title?: string | undefined | null
  forename?: string | undefined | null
  surname?: string | undefined | null
  dateOfBirth?: string | undefined | null
  active?: boolean | undefined | null
  marketingConsent?: string | undefined | null
  identityCheck?: string | undefined | null
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  homePhone?: string | undefined | null
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
  archivedOn?: string | undefined | null
  fromArchive?: boolean | undefined | null
  primaryAddress?:
    | {
        type?: string | undefined | null
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
  secondaryAddress?:
    | {
        type?: string | undefined | null
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
  workAddress?:
    | {
        type?: string | undefined | null
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
  officeIds?: Array<string> | undefined | null
  negotiatorIds?: Array<string> | undefined | null
  categoryIds?: Array<string> | undefined | null
  communicationPreferenceLetter?: boolean | undefined | null
  communicationPreferenceEmail?: boolean | undefined | null
  communicationPreferencePhone?: boolean | undefined | null
  communicationPreferenceSMS?: boolean | undefined | null
  additionalContactDetails?:
    | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
  extrasField?: Record<string, Record<string, never>> | undefined | null
  relationships?:
    | Array<{
        _links?: Record<string, { href?: string | undefined | null }> | undefined | null
        _embedded?: Record<string, Record<string, never>> | undefined | null
        id?: string | undefined | null
        created?: string | undefined | null
        modified?: string | undefined | null
        contactId?: string | undefined | null
        associatedType?: string | undefined | null
        associatedId?: string | undefined | null
        fromArchive?: boolean | undefined | null
      }>
    | undefined
    | null
}
export type ContactsArgs = {
  sortBy?: string | undefined | null
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | undefined
    | null
  id?: Array<string> | undefined | null
  contactDetail?: Array<string> | undefined | null
  email?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  address?: string | undefined | null
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined | null
  name?: string | undefined | null
  nameType?: string | undefined | null
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined | null
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined | null
  active?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
  columns: ColumnsList<ContactsBody>
}
export const contactsIdRelationshipsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  associatedType: z.string().nullable().optional(),
  associatedId: z.string().nullable().optional(),
  fromArchive: z.boolean().nullable().optional(),
})
export type ContactsIdRelationshipsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  contactId?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  fromArchive?: boolean | undefined | null
}
export type ContactsIdRelationshipsArgs = { id: string; columns: ColumnsList<ContactsIdRelationshipsBody> }
export const contactsIdSubscriptionsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  group: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  subscribedOn: z.string().nullable().optional(),
  unsubscribedOn: z.string().nullable().optional(),
})
export type ContactsIdSubscriptionsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  contactId?: string | undefined | null
  name?: string | undefined | null
  group?: string | undefined | null
  status?: string | undefined | null
  type?: string | undefined | null
  subscribedOn?: string | undefined | null
  unsubscribedOn?: string | undefined | null
}
export type ContactsIdSubscriptionsArgs = {
  id: string
  type?: string | undefined | null
  status?: string | undefined | null
  columns: ColumnsList<ContactsIdSubscriptionsBody>
}

export const contactsColumnHelper = createColumnHelper<ContactsBody>()

export const getContactsColumn = (property: string, { label, format }: ConfigItemLookup<ContactsBody>) => {
  return match(property)
    .with('_links', () => {
      return contactsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return contactsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return contactsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return contactsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return contactsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('title', () => {
      return contactsColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header: label('title'),
        cell: (info) => format('title', info.getValue()),
      })
    })
    .with('forename', () => {
      return contactsColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header: label('forename'),
        cell: (info) => format('forename', info.getValue()),
      })
    })
    .with('surname', () => {
      return contactsColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header: label('surname'),
        cell: (info) => format('surname', info.getValue()),
      })
    })
    .with('dateOfBirth', () => {
      return contactsColumnHelper.accessor((row) => row.dateOfBirth, {
        id: 'dateOfBirth',
        header: label('dateOfBirth'),
        cell: (info) => format('dateOfBirth', info.getValue()),
      })
    })
    .with('active', () => {
      return contactsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format('active', info.getValue()),
      })
    })
    .with('marketingConsent', () => {
      return contactsColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header: label('marketingConsent'),
        cell: (info) => format('marketingConsent', info.getValue()),
      })
    })
    .with('identityCheck', () => {
      return contactsColumnHelper.accessor((row) => row.identityCheck, {
        id: 'identityCheck',
        header: label('identityCheck'),
        cell: (info) => format('identityCheck', info.getValue()),
      })
    })
    .with('source', () => {
      return contactsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header: label('source'),
        cell: (info) => format('source', info.getValue()),
      })
    })
    .with('homePhone', () => {
      return contactsColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header: label('homePhone'),
        cell: (info) => format('homePhone', info.getValue()),
      })
    })
    .with('workPhone', () => {
      return contactsColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header: label('workPhone'),
        cell: (info) => format('workPhone', info.getValue()),
      })
    })
    .with('mobilePhone', () => {
      return contactsColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header: label('mobilePhone'),
        cell: (info) => format('mobilePhone', info.getValue()),
      })
    })
    .with('email', () => {
      return contactsColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header: label('email'),
        cell: (info) => format('email', info.getValue()),
      })
    })
    .with('archivedOn', () => {
      return contactsColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header: label('archivedOn'),
        cell: (info) => format('archivedOn', info.getValue()),
      })
    })
    .with('fromArchive', () => {
      return contactsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format('fromArchive', info.getValue()),
      })
    })
    .with('primaryAddress', () => {
      return contactsColumnHelper.accessor((row) => row.primaryAddress, {
        id: 'primaryAddress',
        header: label('primaryAddress'),
        cell: (info) => format('primaryAddress', info.getValue()),
      })
    })
    .with('secondaryAddress', () => {
      return contactsColumnHelper.accessor((row) => row.secondaryAddress, {
        id: 'secondaryAddress',
        header: label('secondaryAddress'),
        cell: (info) => format('secondaryAddress', info.getValue()),
      })
    })
    .with('workAddress', () => {
      return contactsColumnHelper.accessor((row) => row.workAddress, {
        id: 'workAddress',
        header: label('workAddress'),
        cell: (info) => format('workAddress', info.getValue()),
      })
    })
    .with('officeIds', () => {
      return contactsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header: label('officeIds'),
        cell: (info) => format('officeIds', info.getValue()),
      })
    })
    .with('negotiatorIds', () => {
      return contactsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header: label('negotiatorIds'),
        cell: (info) => format('negotiatorIds', info.getValue()),
      })
    })
    .with('categoryIds', () => {
      return contactsColumnHelper.accessor((row) => row.categoryIds, {
        id: 'categoryIds',
        header: label('categoryIds'),
        cell: (info) => format('categoryIds', info.getValue()),
      })
    })
    .with('communicationPreferenceLetter', () => {
      return contactsColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header: label('communicationPreferenceLetter'),
        cell: (info) => format('communicationPreferenceLetter', info.getValue()),
      })
    })
    .with('communicationPreferenceEmail', () => {
      return contactsColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header: label('communicationPreferenceEmail'),
        cell: (info) => format('communicationPreferenceEmail', info.getValue()),
      })
    })
    .with('communicationPreferencePhone', () => {
      return contactsColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header: label('communicationPreferencePhone'),
        cell: (info) => format('communicationPreferencePhone', info.getValue()),
      })
    })
    .with('communicationPreferenceSMS', () => {
      return contactsColumnHelper.accessor((row) => row.communicationPreferenceSMS, {
        id: 'communicationPreferenceSMS',
        header: label('communicationPreferenceSMS'),
        cell: (info) => format('communicationPreferenceSMS', info.getValue()),
      })
    })
    .with('additionalContactDetails', () => {
      return contactsColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header: label('additionalContactDetails'),
        cell: (info) => format('additionalContactDetails', info.getValue()),
      })
    })
    .with('metadata', () => {
      return contactsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format('metadata', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return contactsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
      })
    })
    .with('extrasField', () => {
      return contactsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header: label('extrasField'),
        cell: (info) => format('extrasField', info.getValue()),
      })
    })
    .with('relationships', () => {
      return contactsColumnHelper.accessor((row) => row.relationships, {
        id: 'relationships',
        header: label('relationships'),
        cell: (info) => format('relationships', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useContactsTable = (args: ContactsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiContacts({
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
export const contactsIdRelationshipsColumnHelper = createColumnHelper<ContactsIdRelationshipsBody>()

export const getContactsIdRelationshipsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<ContactsIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('contactId', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header: label('contactId'),
        cell: (info) => format('contactId', info.getValue()),
      })
    })
    .with('associatedType', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header: label('associatedType'),
        cell: (info) => format('associatedType', info.getValue()),
      })
    })
    .with('associatedId', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header: label('associatedId'),
        cell: (info) => format('associatedId', info.getValue()),
      })
    })
    .with('fromArchive', () => {
      return contactsIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format('fromArchive', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useContactsIdRelationshipsTable = (args: ContactsIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiContactsIdRelationships({
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
export const contactsIdSubscriptionsColumnHelper = createColumnHelper<ContactsIdSubscriptionsBody>()

export const getContactsIdSubscriptionsColumn = (
  property: string,
  { label, format }: ConfigItemLookup<ContactsIdSubscriptionsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('contactId', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header: label('contactId'),
        cell: (info) => format('contactId', info.getValue()),
      })
    })
    .with('name', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format('name', info.getValue()),
      })
    })
    .with('group', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.group, {
        id: 'group',
        header: label('group'),
        cell: (info) => format('group', info.getValue()),
      })
    })
    .with('status', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format('status', info.getValue()),
      })
    })
    .with('type', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format('type', info.getValue()),
      })
    })
    .with('subscribedOn', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.subscribedOn, {
        id: 'subscribedOn',
        header: label('subscribedOn'),
        cell: (info) => format('subscribedOn', info.getValue()),
      })
    })
    .with('unsubscribedOn', () => {
      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.unsubscribedOn, {
        id: 'unsubscribedOn',
        header: label('unsubscribedOn'),
        cell: (info) => format('unsubscribedOn', info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useContactsIdSubscriptionsTable = (args: ContactsIdSubscriptionsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiContactsIdSubscriptions({
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
