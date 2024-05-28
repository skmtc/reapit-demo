import { taskModel, TaskModel } from '@/models/taskModel.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { z } from 'zod'
import { useGetApiTasks } from '@/services/tasks.ts'

export type TasksArgs = {
  sortBy?: string | undefined
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | undefined
  id?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  contactId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  recipientId?: Array<string> | undefined
  senderId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  tenancyId?: Array<string> | undefined
  activatesFrom?: string | undefined
  activatesTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<TaskModel>
}

export const tasksColumnHelper = createColumnHelper<TaskModel>()

export const getTasksColumn = (property: string, modelConfig: ModelConfig<TaskModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tasksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tasksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tasksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tasksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tasksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('activates', () => {
      const { label: header, format } = modelConfig['activates']

      return tasksColumnHelper.accessor((row) => row.activates, {
        id: 'activates',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('completed', () => {
      const { label: header, format } = modelConfig['completed']

      return tasksColumnHelper.accessor((row) => row.completed, {
        id: 'completed',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return tasksColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('senderId', () => {
      const { label: header, format } = modelConfig['senderId']

      return tasksColumnHelper.accessor((row) => row.senderId, {
        id: 'senderId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('text', () => {
      const { label: header, format } = modelConfig['text']

      return tasksColumnHelper.accessor((row) => row.text, {
        id: 'text',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('landlordId', () => {
      const { label: header, format } = modelConfig['landlordId']

      return tasksColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return tasksColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('applicantId', () => {
      const { label: header, format } = modelConfig['applicantId']

      return tasksColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tasksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contactId', () => {
      const { label: header, format } = modelConfig['contactId']

      return tasksColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('recipientId', () => {
      const { label: header, format } = modelConfig['recipientId']

      return tasksColumnHelper.accessor((row) => row.recipientId, {
        id: 'recipientId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('recipientType', () => {
      const { label: header, format } = modelConfig['recipientType']

      return tasksColumnHelper.accessor((row) => row.recipientType, {
        id: 'recipientType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return tasksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tasksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTasksTable = (args: TasksArgs) => {
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
