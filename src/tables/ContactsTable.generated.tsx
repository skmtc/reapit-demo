import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiContacts } from '@/services/Contacts.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { ContactModel } from '@/schemas/contactModel.generated.tsx'

export const useContactsTableColumnHelper = createColumnHelper<ContactModel>()
export type UseContactsTableArgs = {
  sortBy?: string | null | undefined
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | null
    | undefined
  id?: Array<string> | null | undefined
  contactDetail?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  address?: string | null | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | null | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | null | undefined
  active?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  columns: ColumnsList<ContactModel>
}
export const getuseContactsTableColumn = (property: string, modelConfig: ModelConfig<ContactModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useContactsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useContactsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useContactsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useContactsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useContactsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('title', () => {
      const { label: header, format, width, minWidth } = modelConfig['title']

      return useContactsTableColumnHelper.accessor((row) => row.title, {
        id: 'title',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('forename', () => {
      const { label: header, format, width, minWidth } = modelConfig['forename']

      return useContactsTableColumnHelper.accessor((row) => row.forename, {
        id: 'forename',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('surname', () => {
      const { label: header, format, width, minWidth } = modelConfig['surname']

      return useContactsTableColumnHelper.accessor((row) => row.surname, {
        id: 'surname',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('dateOfBirth', () => {
      const { label: header, format, width, minWidth } = modelConfig['dateOfBirth']

      return useContactsTableColumnHelper.accessor((row) => row.dateOfBirth, {
        id: 'dateOfBirth',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return useContactsTableColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingConsent']

      return useContactsTableColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('identityCheck', () => {
      const { label: header, format, width, minWidth } = modelConfig['identityCheck']

      return useContactsTableColumnHelper.accessor((row) => row.identityCheck, {
        id: 'identityCheck',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return useContactsTableColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('homePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['homePhone']

      return useContactsTableColumnHelper.accessor((row) => row.homePhone, {
        id: 'homePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('workPhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['workPhone']

      return useContactsTableColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['mobilePhone']

      return useContactsTableColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('email', () => {
      const { label: header, format, width, minWidth } = modelConfig['email']

      return useContactsTableColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('archivedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['archivedOn']

      return useContactsTableColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return useContactsTableColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('primaryAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['primaryAddress']

      return useContactsTableColumnHelper.accessor((row) => row.primaryAddress, {
        id: 'primaryAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('secondaryAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['secondaryAddress']

      return useContactsTableColumnHelper.accessor((row) => row.secondaryAddress, {
        id: 'secondaryAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('workAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['workAddress']

      return useContactsTableColumnHelper.accessor((row) => row.workAddress, {
        id: 'workAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return useContactsTableColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorIds']

      return useContactsTableColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('categoryIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['categoryIds']

      return useContactsTableColumnHelper.accessor((row) => row.categoryIds, {
        id: 'categoryIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceLetter', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceLetter']

      return useContactsTableColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceEmail', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceEmail']

      return useContactsTableColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferencePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferencePhone']

      return useContactsTableColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceSMS', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceSMS']

      return useContactsTableColumnHelper.accessor((row) => row.communicationPreferenceSMS, {
        id: 'communicationPreferenceSMS',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalContactDetails', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalContactDetails']

      return useContactsTableColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useContactsTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useContactsTableColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return useContactsTableColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('relationships', () => {
      const { label: header, format, width, minWidth } = modelConfig['relationships']

      return useContactsTableColumnHelper.accessor((row) => row.relationships, {
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
export const useContactsTable = (args: UseContactsTableArgs) => {
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
