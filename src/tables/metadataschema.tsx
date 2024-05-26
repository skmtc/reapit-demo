import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiMetadataMetadataSchema } from '@/services/metadataschema.ts'

export const metadataMetadataSchemaBody = z.object({
  id: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  schema: z.string().nullable().optional(),
})
export type MetadataMetadataSchemaBody = {
  id?: string | undefined
  modified?: string | undefined
  schema?: string | undefined
}
export type MetadataMetadataSchemaArgs = {
  entityType?: string | undefined
  columns: ColumnsList<MetadataMetadataSchemaBody>
}

export const metadataMetadataSchemaColumnHelper = createColumnHelper<MetadataMetadataSchemaBody>()

export const getMetadataMetadataSchemaColumn = (
  property: string,
  modelConfig: ModelConfig<MetadataMetadataSchemaBody>,
) => {
  return match(property)
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return metadataMetadataSchemaColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return metadataMetadataSchemaColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('schema', () => {
      const { label: header, format } = modelConfig['schema']

      return metadataMetadataSchemaColumnHelper.accessor((row) => row.schema, {
        id: 'schema',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useMetadataMetadataSchemaTable = (args: MetadataMetadataSchemaArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiMetadataMetadataSchema({
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
