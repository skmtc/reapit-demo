import { appointmentModel, AppointmentModel } from '@/schemas/appointmentModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiAppointments } from 'services/Appointments.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useAppointmentsTableColumnHelper = createColumnHelper<AppointmentModel>()
export type UseAppointmentsTableArgs = {
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
  columns: ColumnsList<AppointmentModel>
}
export const getuseAppointmentsTableColumn = (property: string, modelConfig: ModelConfig<AppointmentModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useAppointmentsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useAppointmentsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useAppointmentsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useAppointmentsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useAppointmentsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('start', () => {
      const { label: header, format, width, minWidth } = modelConfig['start']

      return useAppointmentsTableColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('end', () => {
      const { label: header, format, width, minWidth } = modelConfig['end']

      return useAppointmentsTableColumnHelper.accessor((row) => row.end, {
        id: 'end',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useAppointmentsTableColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useAppointmentsTableColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('recurring', () => {
      const { label: header, format, width, minWidth } = modelConfig['recurring']

      return useAppointmentsTableColumnHelper.accessor((row) => row.recurring, {
        id: 'recurring',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('recurrence', () => {
      const { label: header, format, width, minWidth } = modelConfig['recurrence']

      return useAppointmentsTableColumnHelper.accessor((row) => row.recurrence, {
        id: 'recurrence',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('cancelled', () => {
      const { label: header, format, width, minWidth } = modelConfig['cancelled']

      return useAppointmentsTableColumnHelper.accessor((row) => row.cancelled, {
        id: 'cancelled',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('followUp', () => {
      const { label: header, format, width, minWidth } = modelConfig['followUp']

      return useAppointmentsTableColumnHelper.accessor((row) => row.followUp, {
        id: 'followUp',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useAppointmentsTableColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('organiserId', () => {
      const { label: header, format, width, minWidth } = modelConfig['organiserId']

      return useAppointmentsTableColumnHelper.accessor((row) => row.organiserId, {
        id: 'organiserId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorIds']

      return useAppointmentsTableColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return useAppointmentsTableColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('attendee', () => {
      const { label: header, format, width, minWidth } = modelConfig['attendee']

      return useAppointmentsTableColumnHelper.accessor((row) => row.attendee, {
        id: 'attendee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('attended', () => {
      const { label: header, format, width, minWidth } = modelConfig['attended']

      return useAppointmentsTableColumnHelper.accessor((row) => row.attended, {
        id: 'attended',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('accompanied', () => {
      const { label: header, format, width, minWidth } = modelConfig['accompanied']

      return useAppointmentsTableColumnHelper.accessor((row) => row.accompanied, {
        id: 'accompanied',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isRepeat', () => {
      const { label: header, format, width, minWidth } = modelConfig['isRepeat']

      return useAppointmentsTableColumnHelper.accessor((row) => row.isRepeat, {
        id: 'isRepeat',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('virtual', () => {
      const { label: header, format, width, minWidth } = modelConfig['virtual']

      return useAppointmentsTableColumnHelper.accessor((row) => row.virtual, {
        id: 'virtual',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorConfirmed', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorConfirmed']

      return useAppointmentsTableColumnHelper.accessor((row) => row.negotiatorConfirmed, {
        id: 'negotiatorConfirmed',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('attendeeConfirmed', () => {
      const { label: header, format, width, minWidth } = modelConfig['attendeeConfirmed']

      return useAppointmentsTableColumnHelper.accessor((row) => row.attendeeConfirmed, {
        id: 'attendeeConfirmed',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyConfirmed', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyConfirmed']

      return useAppointmentsTableColumnHelper.accessor((row) => row.propertyConfirmed, {
        id: 'propertyConfirmed',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return useAppointmentsTableColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('otherAgentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['otherAgentId']

      return useAppointmentsTableColumnHelper.accessor((row) => row.otherAgentId, {
        id: 'otherAgentId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('documents', () => {
      const { label: header, format, width, minWidth } = modelConfig['documents']

      return useAppointmentsTableColumnHelper.accessor((row) => row.documents, {
        id: 'documents',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useAppointmentsTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return useAppointmentsTableColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useAppointmentsTableColumnHelper.accessor((row) => row._eTag, {
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
export const useAppointmentsTable = (args: UseAppointmentsTableArgs) => {
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
