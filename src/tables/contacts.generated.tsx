import {
  contactModel,
  ContactModel,
  contactRoleModel,
  ContactRoleModel,
  contactSubscriptionModel,
  ContactSubscriptionModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiContacts,
  useGetApiContactsIdRelationships,
  useGetApiContactsIdSubscriptions,
} from '@/services/contacts.generated.ts'

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
  columns: ColumnsList<ContactModel>
}
export type ContactsIdRelationshipsArgs = { id: string; columns: ColumnsList<ContactRoleModel> }
export type ContactsIdSubscriptionsArgs = {
  id: string
  type?: string | undefined
  status?: string | undefined
  columns: ColumnsList<ContactSubscriptionModel>
}

export const contactsColumnHelper = createColumnHelper<ContactModel>()

export const getContactsColumn = (property: string, modelConfig: ModelConfig<ContactModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return contactsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return contactsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return contactsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return contactsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return contactsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('title', () => {
      const { label: header, format, width, minWidth } = modelConfig['title']

      return contactsColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('forename', () => {
      const { label: header, format, width, minWidth } = modelConfig['forename']

      return contactsColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('surname', () => {
      const { label: header, format, width, minWidth } = modelConfig['surname']

      return contactsColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('dateOfBirth', () => {
      const { label: header, format, width, minWidth } = modelConfig['dateOfBirth']

      return contactsColumnHelper.accessor((row) => row.dateOfBirth, {
        id: 'dateOfBirth',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return contactsColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingConsent']

      return contactsColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('identityCheck', () => {
      const { label: header, format, width, minWidth } = modelConfig['identityCheck']

      return contactsColumnHelper.accessor((row) => row.identityCheck, {
        id: 'identityCheck',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return contactsColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('homePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['homePhone']

      return contactsColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('workPhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['workPhone']

      return contactsColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['mobilePhone']

      return contactsColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('email', () => {
      const { label: header, format, width, minWidth } = modelConfig['email']

      return contactsColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('archivedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['archivedOn']

      return contactsColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return contactsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('primaryAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['primaryAddress']

      return contactsColumnHelper.accessor((row) => row.primaryAddress, {
        id: 'primaryAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('secondaryAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['secondaryAddress']

      return contactsColumnHelper.accessor((row) => row.secondaryAddress, {
        id: 'secondaryAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('workAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['workAddress']

      return contactsColumnHelper.accessor((row) => row.workAddress, {
        id: 'workAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return contactsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorIds']

      return contactsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('categoryIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['categoryIds']

      return contactsColumnHelper.accessor((row) => row.categoryIds, {
        id: 'categoryIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceLetter', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceLetter']

      return contactsColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceEmail', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceEmail']

      return contactsColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferencePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferencePhone']

      return contactsColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceSMS', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceSMS']

      return contactsColumnHelper.accessor((row) => row.communicationPreferenceSMS, {
        id: 'communicationPreferenceSMS',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalContactDetails', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalContactDetails']

      return contactsColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return contactsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return contactsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return contactsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('relationships', () => {
      const { label: header, format, width, minWidth } = modelConfig['relationships']

      return contactsColumnHelper.accessor((row) => row.relationships, {
        id: 'relationships',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
export const contactsIdRelationshipsColumnHelper = createColumnHelper<ContactRoleModel>()

export const getContactsIdRelationshipsColumn = (property: string, modelConfig: ModelConfig<ContactRoleModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contactId', () => {
      const { label: header, format, width, minWidth } = modelConfig['contactId']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return contactsIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
export const contactsIdSubscriptionsColumnHelper = createColumnHelper<ContactSubscriptionModel>()

export const getContactsIdSubscriptionsColumn = (
  property: string,
  modelConfig: ModelConfig<ContactSubscriptionModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contactId', () => {
      const { label: header, format, width, minWidth } = modelConfig['contactId']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('name', () => {
      const { label: header, format, width, minWidth } = modelConfig['name']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('group', () => {
      const { label: header, format, width, minWidth } = modelConfig['group']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.group, {
        id: 'group',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('subscribedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['subscribedOn']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.subscribedOn, {
        id: 'subscribedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('unsubscribedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['unsubscribedOn']

      return contactsIdSubscriptionsColumnHelper.accessor((row) => row.unsubscribedOn, {
        id: 'unsubscribedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
