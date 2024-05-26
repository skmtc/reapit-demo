import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  title?: string | undefined
  forename?: string | undefined
  surname?: string | undefined
  dateOfBirth?: string | undefined
  active?: boolean | undefined
  marketingConsent?: string | undefined
  identityCheck?: string | undefined
  source?: { id?: string | undefined; type?: string | undefined } | undefined
  homePhone?: string | undefined
  workPhone?: string | undefined
  mobilePhone?: string | undefined
  email?: string | undefined
  archivedOn?: string | undefined
  fromArchive?: boolean | undefined
  primaryAddress?:
    | {
        type?: string | undefined
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
  secondaryAddress?:
    | {
        type?: string | undefined
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
  workAddress?:
    | {
        type?: string | undefined
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
  officeIds?: Array<string> | undefined
  negotiatorIds?: Array<string> | undefined
  categoryIds?: Array<string> | undefined
  communicationPreferenceLetter?: boolean | undefined
  communicationPreferenceEmail?: boolean | undefined
  communicationPreferencePhone?: boolean | undefined
  communicationPreferenceSMS?: boolean | undefined
  additionalContactDetails?: Array<{ type?: string | undefined; value?: string | undefined }> | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  _eTag?: string | undefined
  extrasField?: Record<string, Record<string, never>> | undefined
  relationships?:
    | Array<{
        _links?: Record<string, { href?: string | undefined }> | undefined
        _embedded?: Record<string, Record<string, never>> | undefined
        id?: string | undefined
        created?: string | undefined
        modified?: string | undefined
        contactId?: string | undefined
        associatedType?: string | undefined
        associatedId?: string | undefined
        fromArchive?: boolean | undefined
      }>
    | undefined
}
export type ContactsArgs = {
  sortBy?: string | undefined
  embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined
  id?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  email?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  address?: string | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined
  name?: string | undefined
  nameType?: string | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
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
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  contactId?: string | undefined
  associatedType?: string | undefined
  associatedId?: string | undefined
  fromArchive?: boolean | undefined
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
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  contactId?: string | undefined
  name?: string | undefined
  group?: string | undefined
  status?: string | undefined
  type?: string | undefined
  subscribedOn?: string | undefined
  unsubscribedOn?: string | undefined
}
export type ContactsIdSubscriptionsArgs = {
  id: string
  type?: string | undefined
  status?: string | undefined
  columns: ColumnsList<ContactsIdSubscriptionsBody>
}

export const contactsColumnHelper = createColumnHelper<ContactsBody>()

export const getContactsColumn = (property: string, modelConfig: ModelConfig<ContactsBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return contactsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return contactsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return contactsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return contactsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return contactsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('title', () => {
      const { label: header, format } = modelConfig['title']

      return contactsColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('forename', () => {
      const { label: header, format } = modelConfig['forename']

      return contactsColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('surname', () => {
      const { label: header, format } = modelConfig['surname']

      return contactsColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('dateOfBirth', () => {
      const { label: header, format } = modelConfig['dateOfBirth']

      return contactsColumnHelper.accessor((row) => row.dateOfBirth, {
        id: 'dateOfBirth',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return contactsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format } = modelConfig['marketingConsent']

      return contactsColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('identityCheck', () => {
      const { label: header, format } = modelConfig['identityCheck']

      return contactsColumnHelper.accessor((row) => row.identityCheck, {
        id: 'identityCheck',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('source', () => {
      const { label: header, format } = modelConfig['source']

      return contactsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('homePhone', () => {
      const { label: header, format } = modelConfig['homePhone']

      return contactsColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('workPhone', () => {
      const { label: header, format } = modelConfig['workPhone']

      return contactsColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format } = modelConfig['mobilePhone']

      return contactsColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('email', () => {
      const { label: header, format } = modelConfig['email']

      return contactsColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('archivedOn', () => {
      const { label: header, format } = modelConfig['archivedOn']

      return contactsColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return contactsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('primaryAddress', () => {
      const { label: header, format } = modelConfig['primaryAddress']

      return contactsColumnHelper.accessor((row) => row.primaryAddress, {
        id: 'primaryAddress',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('secondaryAddress', () => {
      const { label: header, format } = modelConfig['secondaryAddress']

      return contactsColumnHelper.accessor((row) => row.secondaryAddress, {
        id: 'secondaryAddress',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('workAddress', () => {
      const { label: header, format } = modelConfig['workAddress']

      return contactsColumnHelper.accessor((row) => row.workAddress, {
        id: 'workAddress',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeIds', () => {
      const { label: header, format } = modelConfig['officeIds']

      return contactsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format } = modelConfig['negotiatorIds']

      return contactsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('categoryIds', () => {
      const { label: header, format } = modelConfig['categoryIds']

      return contactsColumnHelper.accessor((row) => row.categoryIds, {
        id: 'categoryIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferenceLetter', () => {
      const { label: header, format } = modelConfig['communicationPreferenceLetter']

      return contactsColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferenceEmail', () => {
      const { label: header, format } = modelConfig['communicationPreferenceEmail']

      return contactsColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferencePhone', () => {
      const { label: header, format } = modelConfig['communicationPreferencePhone']

      return contactsColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferenceSMS', () => {
      const { label: header, format } = modelConfig['communicationPreferenceSMS']

      return contactsColumnHelper.accessor((row) => row.communicationPreferenceSMS, {
        id: 'communicationPreferenceSMS',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalContactDetails', () => {
      const { label: header, format } = modelConfig['additionalContactDetails']

      return contactsColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return contactsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return contactsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('extrasField', () => {
      const { label: header, format } = modelConfig['extrasField']

      return contactsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('relationships', () => {
      const { label: header, format } = modelConfig['relationships']

      return contactsColumnHelper.accessor((row) => row.relationships, {
        id: 'relationships',
        header,
        cell: (info) => format(info.getValue()),
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
  modelConfig: ModelConfig<ContactsIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contactId', () => {
      const { label: header, format } = modelConfig['contactId']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedType', () => {
      const { label: header, format } = modelConfig['associatedType']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedId', () => {
      const { label: header, format } = modelConfig['associatedId']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
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
  modelConfig: ModelConfig<ContactsIdSubscriptionsBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contactId', () => {
      const { label: header, format } = modelConfig['contactId']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('name', () => {
      const { label: header, format } = modelConfig['name']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('group', () => {
      const { label: header, format } = modelConfig['group']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.group, {
        id: 'group',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('subscribedOn', () => {
      const { label: header, format } = modelConfig['subscribedOn']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.subscribedOn, {
        id: 'subscribedOn',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('unsubscribedOn', () => {
      const { label: header, format } = modelConfig['unsubscribedOn']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.unsubscribedOn, {
        id: 'unsubscribedOn',
        header,
        cell: (info) => format(info.getValue()),
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
