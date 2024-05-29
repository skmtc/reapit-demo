import { identityCheckModel, IdentityCheckModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig2, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiIdentityChecks } from '@/services/identitychecks.ts'

export type IdentityChecksArgs = {
  sortBy?: string | undefined
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | undefined
  id?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | undefined
  checkDateFrom?: string | undefined
  checkDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<IdentityCheckModel>
}

export const identityChecksColumnHelper = createColumnHelper<IdentityCheckModel>()

export const getIdentityChecksColumn = (property: string, modelConfig: ModelConfig2<IdentityCheckModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return identityChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return identityChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return identityChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contactId', () => {
      const { label: header, format } = modelConfig['contactId']

      return identityChecksColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return identityChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return identityChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkDate', () => {
      const { label: header, format } = modelConfig['checkDate']

      return identityChecksColumnHelper.accessor((row) => row.checkDate, {
        id: 'checkDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return identityChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return identityChecksColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('identityDocument1', () => {
      const { label: header, format } = modelConfig['identityDocument1']

      return identityChecksColumnHelper.accessor((row) => row.identityDocument1, {
        id: 'identityDocument1',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('identityDocument2', () => {
      const { label: header, format } = modelConfig['identityDocument2']

      return identityChecksColumnHelper.accessor((row) => row.identityDocument2, {
        id: 'identityDocument2',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return identityChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return identityChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useIdentityChecksTable = (args: IdentityChecksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiIdentityChecks({
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
