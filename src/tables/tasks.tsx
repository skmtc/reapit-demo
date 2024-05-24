import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiTasks } from '@/services/tasks.ts'

export const tasksBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  activates: z.string().nullable().optional(),
  completed: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  senderId: z.string().nullable().optional(),
  text: z.string().nullable().optional(),
  landlordId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  applicantId: z.string().nullable().optional(),
  tenancyId: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  recipientId: z.string().nullable().optional(),
  recipientType: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type TasksBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  activates?: string | undefined | null
  completed?: string | undefined | null
  typeId?: string | undefined | null
  senderId?: string | undefined | null
  text?: string | undefined | null
  landlordId?: string | undefined | null
  propertyId?: string | undefined | null
  applicantId?: string | undefined | null
  tenancyId?: string | undefined | null
  contactId?: string | undefined | null
  recipientId?: string | undefined | null
  recipientType?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type TasksArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | undefined | null
  id?: Array<string> | undefined | null
  applicantId?: Array<string> | undefined | null
  contactId?: Array<string> | undefined | null
  landlordId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  recipientId?: Array<string> | undefined | null
  senderId?: Array<string> | undefined | null
  typeId?: Array<string> | undefined | null
  tenancyId?: Array<string> | undefined | null
  activatesFrom?: string | undefined | null
  activatesTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
  columns: ColumnsList<TasksBody>
}

export const tasksColumnHelper = createColumnHelper<TasksBody>()

export const getTasksColumn = (property: string, { label, format }: ConfigItemLookup<TasksBody>) => {
  return match(property)
    .with('_links', () => {
      return tasksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return tasksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return tasksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return tasksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return tasksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('activates', () => {
      return tasksColumnHelper.accessor((row) => row.activates, {
        id: 'activates',
        header: label('activates'),
        cell: (info) => format('activates', info.getValue()),
      })
    })
    .with('completed', () => {
      return tasksColumnHelper.accessor((row) => row.completed, {
        id: 'completed',
        header: label('completed'),
        cell: (info) => format('completed', info.getValue()),
      })
    })
    .with('typeId', () => {
      return tasksColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format('typeId', info.getValue()),
      })
    })
    .with('senderId', () => {
      return tasksColumnHelper.accessor((row) => row.senderId, {
        id: 'senderId',
        header: label('senderId'),
        cell: (info) => format('senderId', info.getValue()),
      })
    })
    .with('text', () => {
      return tasksColumnHelper.accessor((row) => row.text, {
        id: 'text',
        header: label('text'),
        cell: (info) => format('text', info.getValue()),
      })
    })
    .with('landlordId', () => {
      return tasksColumnHelper.accessor((row) => row.landlordId, {
        id: 'landlordId',
        header: label('landlordId'),
        cell: (info) => format('landlordId', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return tasksColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('applicantId', () => {
      return tasksColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header: label('applicantId'),
        cell: (info) => format('applicantId', info.getValue()),
      })
    })
    .with('tenancyId', () => {
      return tasksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format('tenancyId', info.getValue()),
      })
    })
    .with('contactId', () => {
      return tasksColumnHelper.accessor((row) => row.contactId, {
        id: 'contactId',
        header: label('contactId'),
        cell: (info) => format('contactId', info.getValue()),
      })
    })
    .with('recipientId', () => {
      return tasksColumnHelper.accessor((row) => row.recipientId, {
        id: 'recipientId',
        header: label('recipientId'),
        cell: (info) => format('recipientId', info.getValue()),
      })
    })
    .with('recipientType', () => {
      return tasksColumnHelper.accessor((row) => row.recipientType, {
        id: 'recipientType',
        header: label('recipientType'),
        cell: (info) => format('recipientType', info.getValue()),
      })
    })
    .with('metadata', () => {
      return tasksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format('metadata', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return tasksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
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
