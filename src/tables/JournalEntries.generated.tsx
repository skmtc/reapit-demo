import { journalEntryModel, JournalEntryModel, landlordJournalEntryModel, LandlordJournalEntryModel } from 'schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiJournalEntries, useGetApiJournalEntriesLandlords } from 'services/JournalEntries.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useJournalEntriesTableColumnHelper = createColumnHelper<JournalEntryModel>();
export type UseJournalEntriesTableArgs = {sortBy?: string | undefined, embed?: Array<'property' | 'negotiator' | 'type'> | undefined, associatedType?: string | undefined, associatedId?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, propertyId?: Array<string> | undefined, typeId?: Array<string> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, columns: ColumnsList<JournalEntryModel>};
export const getuseJournalEntriesTableColumn = (property:string, modelConfig: ModelConfig<JournalEntryModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useJournalEntriesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useJournalEntriesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useJournalEntriesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useJournalEntriesTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return useJournalEntriesTableColumnHelper.accessor(row => row.associatedType, {
      id: 'associatedType',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return useJournalEntriesTableColumnHelper.accessor(row => row.associatedId, {
      id: 'associatedId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useJournalEntriesTableColumnHelper.accessor(row => row.typeId, {
      id: 'typeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useJournalEntriesTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useJournalEntriesTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useJournalEntriesTable = (args: UseJournalEntriesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntries({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};
export const useJournalEntriesLandlordsTableColumnHelper = createColumnHelper<LandlordJournalEntryModel>();
export type UseJournalEntriesLandlordsTableArgs = {sortBy?: string | undefined, landlordId?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, propertyId?: Array<string> | undefined, type?: string | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, columns: ColumnsList<LandlordJournalEntryModel>};
export const getuseJournalEntriesLandlordsTableColumn = (property:string, modelConfig: ModelConfig<LandlordJournalEntryModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('landlordId', () => {
      const { label: header, format, width, minWidth } = modelConfig['landlordId']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row.landlordId, {
      id: 'landlordId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row.type, {
      id: 'type',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useJournalEntriesLandlordsTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useJournalEntriesLandlordsTable = (args: UseJournalEntriesLandlordsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntriesLandlords({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};