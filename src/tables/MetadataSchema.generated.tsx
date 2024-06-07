import { schemaModel, SchemaModel } from '@/schemas/schemaModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiMetadataMetadataSchema } from 'services/MetadataSchema.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useMetadataMetadataSchemaTableColumnHelper = createColumnHelper<SchemaModel>();
export type UseMetadataMetadataSchemaTableArgs = {entityType?: string | undefined, columns: ColumnsList<SchemaModel>};
export const getuseMetadataMetadataSchemaTableColumn = (property:string, modelConfig: ModelConfig<SchemaModel>) => {
      return match(property).with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useMetadataMetadataSchemaTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useMetadataMetadataSchemaTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('schema', () => {
      const { label: header, format, width, minWidth } = modelConfig['schema']

      return useMetadataMetadataSchemaTableColumnHelper.accessor(row => row.schema, {
      id: 'schema',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useMetadataMetadataSchemaTable = (args: UseMetadataMetadataSchemaTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiMetadataMetadataSchema({
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