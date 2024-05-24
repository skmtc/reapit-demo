import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  start?: string | undefined | null
  end?: string | undefined | null
  typeId?: string | undefined | null
  description?: string | undefined | null
  recurring?: boolean | undefined | null
  recurrence?:
    | { interval?: number | undefined | null; type?: string | undefined | null; until?: string | undefined | null }
    | undefined
    | null
  cancelled?: boolean | undefined | null
  followUp?:
    | { due?: string | undefined | null; responseId?: string | undefined | null; notes?: string | undefined | null }
    | undefined
    | null
  propertyId?: string | undefined | null
  organiserId?: string | undefined | null
  negotiatorIds?: Array<string> | undefined | null
  officeIds?: Array<string> | undefined | null
  attendee?:
    | {
        id?: string | undefined | null
        type?: string | undefined | null
        contacts?:
          | Array<{
              id?: string | undefined | null
              name?: string | undefined | null
              homePhone?: string | undefined | null
              workPhone?: string | undefined | null
              mobilePhone?: string | undefined | null
              email?: string | undefined | null
              fromArchive?: boolean | undefined | null
            }>
          | undefined
          | null
      }
    | undefined
    | null
  attended?: string | undefined | null
  accompanied?: boolean | undefined | null
  isRepeat?: boolean | undefined | null
  virtual?: boolean | undefined | null
  negotiatorConfirmed?: boolean | undefined | null
  attendeeConfirmed?: boolean | undefined | null
  propertyConfirmed?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  otherAgentId?: string | undefined | null
  documents?:
    | {
        draftPropertyInspectionReportId?: string | undefined | null
        finalPropertyInspectionReportId?: string | undefined | null
      }
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  extrasField?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type AppointmentsArgs = {
  sortBy?: string | undefined | null
  embed?: Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'> | undefined | null
  id?: Array<string> | undefined | null
  typeId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  officeId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  attendeeId?: Array<string> | undefined | null
  attendeeType?: Array<'applicant' | 'contact' | 'landlord' | 'tenancy'> | undefined | null
  start?: string | undefined | null
  end?: string | undefined | null
  includeCancelled?: boolean | undefined | null
  includeUnconfirmed?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  followUpFrom?: string | undefined | null
  followUpTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  extrasField?: Array<string> | undefined | null
  metadata?: Array<string> | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  openHouseId?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  notes?: string | undefined | null
  interestLevel?: string | undefined | null
  attendee?:
    | {
        id?: string | undefined | null
        type?: string | undefined | null
        contacts?:
          | Array<{
              id?: string | undefined | null
              name?: string | undefined | null
              homePhone?: string | undefined | null
              workPhone?: string | undefined | null
              mobilePhone?: string | undefined | null
              email?: string | undefined | null
              fromArchive?: boolean | undefined | null
            }>
          | undefined
          | null
      }
    | undefined
    | null
  _eTag?: string | undefined | null
}
export type AppointmentsIdOpenHouseAttendeesArgs = {
  id: string
  columns: ColumnsList<AppointmentsIdOpenHouseAttendeesBody>
}

export const appointmentsColumnHelper = createColumnHelper<AppointmentsBody>()

export const getAppointmentsColumn = (property: string, { label, format }: ConfigItemLookup<AppointmentsBody>) => {
  return match(property)
    .with('_links', () => {
      return appointmentsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return appointmentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return appointmentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return appointmentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return appointmentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('start', () => {
      return appointmentsColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header: label('start'),
        cell: (info) => format('start', info.getValue()),
      })
    })
    .with('end', () => {
      return appointmentsColumnHelper.accessor((row) => row.end, {
        id: 'end',
        header: label('end'),
        cell: (info) => format('end', info.getValue()),
      })
    })
    .with('typeId', () => {
      return appointmentsColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format('typeId', info.getValue()),
      })
    })
    .with('description', () => {
      return appointmentsColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format('description', info.getValue()),
      })
    })
    .with('recurring', () => {
      return appointmentsColumnHelper.accessor((row) => row.recurring, {
        id: 'recurring',
        header: label('recurring'),
        cell: (info) => format('recurring', info.getValue()),
      })
    })
    .with('recurrence', () => {
      return appointmentsColumnHelper.accessor((row) => row.recurrence, {
        id: 'recurrence',
        header: label('recurrence'),
        cell: (info) => format('recurrence', info.getValue()),
      })
    })
    .with('cancelled', () => {
      return appointmentsColumnHelper.accessor((row) => row.cancelled, {
        id: 'cancelled',
        header: label('cancelled'),
        cell: (info) => format('cancelled', info.getValue()),
      })
    })
    .with('followUp', () => {
      return appointmentsColumnHelper.accessor((row) => row.followUp, {
        id: 'followUp',
        header: label('followUp'),
        cell: (info) => format('followUp', info.getValue()),
      })
    })
    .with('propertyId', () => {
      return appointmentsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format('propertyId', info.getValue()),
      })
    })
    .with('organiserId', () => {
      return appointmentsColumnHelper.accessor((row) => row.organiserId, {
        id: 'organiserId',
        header: label('organiserId'),
        cell: (info) => format('organiserId', info.getValue()),
      })
    })
    .with('negotiatorIds', () => {
      return appointmentsColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header: label('negotiatorIds'),
        cell: (info) => format('negotiatorIds', info.getValue()),
      })
    })
    .with('officeIds', () => {
      return appointmentsColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header: label('officeIds'),
        cell: (info) => format('officeIds', info.getValue()),
      })
    })
    .with('attendee', () => {
      return appointmentsColumnHelper.accessor((row) => row.attendee, {
        id: 'attendee',
        header: label('attendee'),
        cell: (info) => format('attendee', info.getValue()),
      })
    })
    .with('attended', () => {
      return appointmentsColumnHelper.accessor((row) => row.attended, {
        id: 'attended',
        header: label('attended'),
        cell: (info) => format('attended', info.getValue()),
      })
    })
    .with('accompanied', () => {
      return appointmentsColumnHelper.accessor((row) => row.accompanied, {
        id: 'accompanied',
        header: label('accompanied'),
        cell: (info) => format('accompanied', info.getValue()),
      })
    })
    .with('isRepeat', () => {
      return appointmentsColumnHelper.accessor((row) => row.isRepeat, {
        id: 'isRepeat',
        header: label('isRepeat'),
        cell: (info) => format('isRepeat', info.getValue()),
      })
    })
    .with('virtual', () => {
      return appointmentsColumnHelper.accessor((row) => row.virtual, {
        id: 'virtual',
        header: label('virtual'),
        cell: (info) => format('virtual', info.getValue()),
      })
    })
    .with('negotiatorConfirmed', () => {
      return appointmentsColumnHelper.accessor((row) => row.negotiatorConfirmed, {
        id: 'negotiatorConfirmed',
        header: label('negotiatorConfirmed'),
        cell: (info) => format('negotiatorConfirmed', info.getValue()),
      })
    })
    .with('attendeeConfirmed', () => {
      return appointmentsColumnHelper.accessor((row) => row.attendeeConfirmed, {
        id: 'attendeeConfirmed',
        header: label('attendeeConfirmed'),
        cell: (info) => format('attendeeConfirmed', info.getValue()),
      })
    })
    .with('propertyConfirmed', () => {
      return appointmentsColumnHelper.accessor((row) => row.propertyConfirmed, {
        id: 'propertyConfirmed',
        header: label('propertyConfirmed'),
        cell: (info) => format('propertyConfirmed', info.getValue()),
      })
    })
    .with('fromArchive', () => {
      return appointmentsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format('fromArchive', info.getValue()),
      })
    })
    .with('otherAgentId', () => {
      return appointmentsColumnHelper.accessor((row) => row.otherAgentId, {
        id: 'otherAgentId',
        header: label('otherAgentId'),
        cell: (info) => format('otherAgentId', info.getValue()),
      })
    })
    .with('documents', () => {
      return appointmentsColumnHelper.accessor((row) => row.documents, {
        id: 'documents',
        header: label('documents'),
        cell: (info) => format('documents', info.getValue()),
      })
    })
    .with('metadata', () => {
      return appointmentsColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format('metadata', info.getValue()),
      })
    })
    .with('extrasField', () => {
      return appointmentsColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header: label('extrasField'),
        cell: (info) => format('extrasField', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return appointmentsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
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
  { label, format }: ConfigItemLookup<AppointmentsIdOpenHouseAttendeesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('openHouseId', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.openHouseId, {
        id: 'openHouseId',
        header: label('openHouseId'),
        cell: (info) => format('openHouseId', info.getValue()),
      })
    })
    .with('created', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('notes', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header: label('notes'),
        cell: (info) => format('notes', info.getValue()),
      })
    })
    .with('interestLevel', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.interestLevel, {
        id: 'interestLevel',
        header: label('interestLevel'),
        cell: (info) => format('interestLevel', info.getValue()),
      })
    })
    .with('attendee', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row.attendee, {
        id: 'attendee',
        header: label('attendee'),
        cell: (info) => format('attendee', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return appointmentsIdOpenHouseAttendeesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
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
