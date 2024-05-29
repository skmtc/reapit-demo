import {
  journalEntryModel,
  JournalEntryModel,
  landlordJournalEntryModel,
  LandlordJournalEntryModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig2, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiJournalEntries, useGetApiJournalEntriesLandlords } from '@/services/journalentries.ts'

export type JournalEntriesArgs = {
  sortBy?: string | undefined
  embed?: Array<'property' | 'negotiator' | 'type'> | undefined
  associatedType?: string | undefined
  associatedId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  columns: ColumnsList<JournalEntryModel>
}
export type JournalEntriesLandlordsArgs = {
  sortBy?: string | undefined
  landlordId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  type?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  columns: ColumnsList<LandlordJournalEntryModel>
}

export const journalEntriesColumnHelper = createColumnHelper<JournalEntryModel>()

export const getJournalEntriesColumn = (property: string, modelConfig: ModelConfig2<JournalEntryModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return journalEntriesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return journalEntriesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return journalEntriesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return journalEntriesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedType', () => {
      const { label: header, format } = modelConfig['associatedType']

      return journalEntriesColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedId', () => {
      const { label: header, format } = modelConfig['associatedId']

      return journalEntriesColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return journalEntriesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return journalEntriesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return journalEntriesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useJournalEntriesTable = (args: JournalEntriesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntries({
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
export const journalEntriesLandlordsColumnHelper = createColumnHelper<LandlordJournalEntryModel>()

export const getJournalEntriesLandlordsColumn = (
  property: string,
  modelConfig: ModelConfig2<LandlordJournalEntryModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('landlordId', () => {
      const { label: header, format } = modelConfig['landlordId']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return journalEntriesLandlordsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useJournalEntriesLandlordsTable = (args: JournalEntriesLandlordsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntriesLandlords({
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
