import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiAppointments, useGetApiAppointmentsIdOpenHouseAttendees } from '@/services/appointments.ts'

export const appointmentsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  start: z.string().nullable().optional(),
  end: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  recurring: z.boolean().nullable().optional(),
  recurrence: z
    .object({
      interval: z.number().int().nullable().optional(),
      type: z.string().nullable().optional(),
      until: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  cancelled: z.boolean().nullable().optional(),
  followUp: z
    .object({
      due: z.string().nullable().optional(),
      responseId: z.string().nullable().optional(),
      notes: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  propertyId: z.string().nullable().optional(),
  organiserId: z.string().nullable().optional(),
  negotiatorIds: z.array(z.string()).nullable().optional(),
  officeIds: z.array(z.string()).nullable().optional(),
  attendee: z
    .object({
      id: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      contacts: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  attended: z.string().nullable().optional(),
  accompanied: z.boolean().nullable().optional(),
  isRepeat: z.boolean().nullable().optional(),
  virtual: z.boolean().nullable().optional(),
  negotiatorConfirmed: z.boolean().nullable().optional(),
  attendeeConfirmed: z.boolean().nullable().optional(),
  propertyConfirmed: z.boolean().nullable().optional(),
  fromArchive: z.boolean().nullable().optional(),
  otherAgentId: z.string().nullable().optional(),
  documents: z
    .object({
      draftPropertyInspectionReportId: z.string().nullable().optional(),
      finalPropertyInspectionReportId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type AppointmentsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  start?: string | undefined
  end?: string | undefined
  typeId?: string | undefined
  description?: string | undefined
  recurring?: boolean | undefined
  recurrence?: { interval?: number | undefined; type?: string | undefined; until?: string | undefined } | undefined
  cancelled?: boolean | undefined
  followUp?: { due?: string | undefined; responseId?: string | undefined; notes?: string | undefined } | undefined
  propertyId?: string | undefined
  organiserId?: string | undefined
  negotiatorIds?: Array<string> | undefined
  officeIds?: Array<string> | undefined
  attendee?:
    | {
        id?: string | undefined
        type?: string | undefined
        contacts?:
          | Array<{
              id?: string | undefined
              name?: string | undefined
              homePhone?: string | undefined
              workPhone?: string | undefined
              mobilePhone?: string | undefined
              email?: string | undefined
              fromArchive?: boolean | undefined
            }>
          | undefined
      }
    | undefined
  attended?: string | undefined
  accompanied?: boolean | undefined
  isRepeat?: boolean | undefined
  virtual?: boolean | undefined
  negotiatorConfirmed?: boolean | undefined
  attendeeConfirmed?: boolean | undefined
  propertyConfirmed?: boolean | undefined
  fromArchive?: boolean | undefined
  otherAgentId?: string | undefined
  documents?:
    | { draftPropertyInspectionReportId?: string | undefined; finalPropertyInspectionReportId?: string | undefined }
    | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  extrasField?: Record<string, Record<string, never>> | undefined
  _eTag?: string | undefined
}
export type AppointmentsArgs = {
  sortBy?: string | undefined
  embed?: Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'> | undefined
  id?: Array<string> | undefined
  typeId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  attendeeId?: Array<string> | undefined
  attendeeType?: Array<'applicant' | 'contact' | 'landlord' | 'tenancy'> | undefined
  start?: string | undefined
  end?: string | undefined
  includeCancelled?: boolean | undefined
  includeUnconfirmed?: boolean | undefined
  fromArchive?: boolean | undefined
  followUpFrom?: string | undefined
  followUpTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  extrasField?: Array<string> | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<AppointmentsBody>
}
export const appointmentsIdOpenHouseAttendeesBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  openHouseId: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  interestLevel: z.string().nullable().optional(),
  attendee: z
    .object({
      id: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      contacts: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  _eTag: z.string().nullable().optional(),
})
export type AppointmentsIdOpenHouseAttendeesBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  openHouseId?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  notes?: string | undefined
  interestLevel?: string | undefined
  attendee?:
    | {
        id?: string | undefined
        type?: string | undefined
        contacts?:
          | Array<{
              id?: string | undefined
              name?: string | undefined
              homePhone?: string | undefined
              workPhone?: string | undefined
              mobilePhone?: string | undefined
              email?: string | undefined
              fromArchive?: boolean | undefined
            }>
          | undefined
      }
    | undefined
  _eTag?: string | undefined
}
export type AppointmentsIdOpenHouseAttendeesArgs = {
  id: string
  columns: ColumnsList<AppointmentsIdOpenHouseAttendeesBody>
}

export const appointmentsColumnHelper = createColumnHelper<AppointmentsBody>()

export const getAppointmentsColumn = (property: string, modelConfig: ModelConfig<AppointmentsBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return appointmentsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return appointmentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return appointmentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return appointmentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return appointmentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('start', () => {
      const { label: header, format } = modelConfig['start']

      return appointmentsColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('end', () => {
      const { label: header, format } = modelConfig['end']

      return appointmentsColumnHelper.accessor((row) => row.end, {
        id: 'end',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return appointmentsColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return appointmentsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('recurring', () => {
      const { label: header, format } = modelConfig['recurring']

      return appointmentsColumnHelper.accessor((row) => row.recurring, {
        id: 'recurring',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('recurrence', () => {
      const { label: header, format } = modelConfig['recurrence']

      return appointmentsColumnHelper.accessor((row) => row.recurrence, {
        id: 'recurrence',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('cancelled', () => {
      const { label: header, format } = modelConfig['cancelled']

      return appointmentsColumnHelper.accessor((row) => row.cancelled, {
        id: 'cancelled',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('followUp', () => {
      const { label: header, format } = modelConfig['followUp']

      return appointmentsColumnHelper.accessor((row) => row.followUp, {
        id: 'followUp',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return appointmentsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('organiserId', () => {
      const { label: header, format } = modelConfig['organiserId']

      return appointmentsColumnHelper.accessor((row) => row.organiserId, {
        id: 'organiserId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format } = modelConfig['negotiatorIds']

      return appointmentsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeIds', () => {
      const { label: header, format } = modelConfig['officeIds']

      return appointmentsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('attendee', () => {
      const { label: header, format } = modelConfig['attendee']

      return appointmentsColumnHelper.accessor((row) => row.attendee, {
        id: 'attendee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('attended', () => {
      const { label: header, format } = modelConfig['attended']

      return appointmentsColumnHelper.accessor((row) => row.attended, {
        id: 'attended',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('accompanied', () => {
      const { label: header, format } = modelConfig['accompanied']

      return appointmentsColumnHelper.accessor((row) => row.accompanied, {
        id: 'accompanied',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isRepeat', () => {
      const { label: header, format } = modelConfig['isRepeat']

      return appointmentsColumnHelper.accessor((row) => row.isRepeat, {
        id: 'isRepeat',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('virtual', () => {
      const { label: header, format } = modelConfig['virtual']

      return appointmentsColumnHelper.accessor((row) => row.virtual, {
        id: 'virtual',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorConfirmed', () => {
      const { label: header, format } = modelConfig['negotiatorConfirmed']

      return appointmentsColumnHelper.accessor((row) => row.negotiatorConfirmed, {
        id: 'negotiatorConfirmed',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('attendeeConfirmed', () => {
      const { label: header, format } = modelConfig['attendeeConfirmed']

      return appointmentsColumnHelper.accessor((row) => row.attendeeConfirmed, {
        id: 'attendeeConfirmed',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyConfirmed', () => {
      const { label: header, format } = modelConfig['propertyConfirmed']

      return appointmentsColumnHelper.accessor((row) => row.propertyConfirmed, {
        id: 'propertyConfirmed',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return appointmentsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('otherAgentId', () => {
      const { label: header, format } = modelConfig['otherAgentId']

      return appointmentsColumnHelper.accessor((row) => row.otherAgentId, {
        id: 'otherAgentId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('documents', () => {
      const { label: header, format } = modelConfig['documents']

      return appointmentsColumnHelper.accessor((row) => row.documents, {
        id: 'documents',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return appointmentsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('extrasField', () => {
      const { label: header, format } = modelConfig['extrasField']

      return appointmentsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return appointmentsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useAppointmentsTable = (args: AppointmentsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiAppointments({
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
export const appointmentsIdOpenHouseAttendeesColumnHelper = createColumnHelper<AppointmentsIdOpenHouseAttendeesBody>()

export const getAppointmentsIdOpenHouseAttendeesColumn = (
  property: string,
  modelConfig: ModelConfig<AppointmentsIdOpenHouseAttendeesBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('openHouseId', () => {
      const { label: header, format } = modelConfig['openHouseId']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.openHouseId, {
        id: 'openHouseId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('interestLevel', () => {
      const { label: header, format } = modelConfig['interestLevel']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.interestLevel, {
        id: 'interestLevel',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('attendee', () => {
      const { label: header, format } = modelConfig['attendee']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.attendee, {
        id: 'attendee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useAppointmentsIdOpenHouseAttendeesTable = (args: AppointmentsIdOpenHouseAttendeesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiAppointmentsIdOpenHouseAttendees({
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
