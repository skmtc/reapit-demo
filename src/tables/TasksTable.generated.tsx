import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiTasks } from '@/services/Tasks.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { TaskModel } from '@/schemas/taskModel.generated.tsx'

export const useTasksTableColumnHelper = createColumnHelper<TaskModel>()
export type UseTasksTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | null | undefined
  id?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  landlordId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  recipientId?: Array<string> | null | undefined
  senderId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  tenancyId?: Array<string> | null | undefined
  activatesFrom?: string | null | undefined
  activatesTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  columns: ColumnsList<TaskModel>
}
export const getuseTasksTableColumn = (property: string, modelConfig: ModelConfig<TaskModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTasksTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTasksTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTasksTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTasksTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTasksTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('activates', () => {
      const { label: header, format, width, minWidth } = modelConfig['activates']

      return useTasksTableColumnHelper.accessor((row) => row.activates, {
        id: 'activates',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('completed', () => {
      const { label: header, format, width, minWidth } = modelConfig['completed']

      return useTasksTableColumnHelper.accessor((row) => row.completed, {
        id: 'completed',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useTasksTableColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('senderId', () => {
      const { label: header, format, width, minWidth } = modelConfig['senderId']

      return useTasksTableColumnHelper.accessor((row) => row.senderId, {
        id: 'senderId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('text', () => {
      const { label: header, format, width, minWidth } = modelConfig['text']

      return useTasksTableColumnHelper.accessor((row) => row.text, {
        id: 'text',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('landlordId', () => {
      const { label: header, format, width, minWidth } = modelConfig['landlordId']

      return useTasksTableColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useTasksTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return useTasksTableColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTasksTableColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contactId', () => {
      const { label: header, format, width, minWidth } = modelConfig['contactId']

      return useTasksTableColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('recipientId', () => {
      const { label: header, format, width, minWidth } = modelConfig['recipientId']

      return useTasksTableColumnHelper.accessor((row) => row.recipientId, {
        id: 'recipientId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('recipientType', () => {
      const { label: header, format, width, minWidth } = modelConfig['recipientType']

      return useTasksTableColumnHelper.accessor((row) => row.recipientType, {
        id: 'recipientType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useTasksTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTasksTableColumnHelper.accessor((row) => row._eTag, {
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
export const useTasksTable = (args: UseTasksTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTasks({
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
