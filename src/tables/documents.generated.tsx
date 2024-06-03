import { documentModel, DocumentModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiDocuments } from '@/services/documents.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export type UseDocumentsTableArgs = {
  sortBy?: string | undefined
  embed?: Array<'documentType'> | undefined
  id?: Array<string> | undefined
  associatedId?: Array<string> | undefined
  associatedType?:
    | Array<
        | 'appliance'
        | 'applicant'
        | 'bankStatement'
        | 'batch'
        | 'certificate'
        | 'contact'
        | 'depositCertificate'
        | 'estate'
        | 'estateUnit'
        | 'idCheck'
        | 'keySet'
        | 'landlord'
        | 'nominalTransaction'
        | 'property'
        | 'tenancy'
        | 'tenancyCheck'
        | 'tenancyRenewal'
        | 'worksOrder'
      >
    | undefined
  typeId?: Array<string> | undefined
  includeRoleDocuments?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<DocumentModel>
}

export const useDocumentsTableColumnHelper = createColumnHelper<DocumentModel>()

export const getuseDocumentsTableColumn = (property: string, modelConfig: ModelConfig<DocumentModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useDocumentsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useDocumentsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useDocumentsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useDocumentsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useDocumentsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return useDocumentsTableColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isPrivate', () => {
      const { label: header, format, width, minWidth } = modelConfig['isPrivate']

      return useDocumentsTableColumnHelper.accessor((row) => row.isPrivate, {
        id: 'isPrivate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return useDocumentsTableColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useDocumentsTableColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('name', () => {
      const { label: header, format, width, minWidth } = modelConfig['name']

      return useDocumentsTableColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useDocumentsTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useDocumentsTableColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
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

export const useDocumentsTable = (args: UseDocumentsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiDocuments({
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
