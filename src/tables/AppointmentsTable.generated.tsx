import { appointmentModelConfig } from '@/config/appointmentModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiAppointments, useGetApiAppointmentsIdOpenHouseAttendees } from '@/services/Appointments.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { AppointmentModel } from '@/schemas/appointmentModel.generated.tsx'
import { openHouseAttendeeModelConfig } from '@/config/openHouseAttendeeModelConfig.example.tsx'
import { OpenHouseAttendeeModel } from '@/schemas/openHouseAttendeeModel.generated.tsx'

export const getAppointmentsTableColumn = (
  property: string,
  modelConfig: ModelConfig<AppointmentModel>,
  row: AppointmentModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('start', () => ({
      id: 'start',
      label: modelConfig['start'].label,
      value: modelConfig['start'].format(row['start']),
    }))
    .with('end', () => ({
      id: 'end',
      label: modelConfig['end'].label,
      value: modelConfig['end'].format(row['end']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('recurring', () => ({
      id: 'recurring',
      label: modelConfig['recurring'].label,
      value: modelConfig['recurring'].format(row['recurring']),
    }))
    .with('recurrence', () => ({
      id: 'recurrence',
      label: modelConfig['recurrence'].label,
      value: modelConfig['recurrence'].format(row['recurrence']),
    }))
    .with('cancelled', () => ({
      id: 'cancelled',
      label: modelConfig['cancelled'].label,
      value: modelConfig['cancelled'].format(row['cancelled']),
    }))
    .with('followUp', () => ({
      id: 'followUp',
      label: modelConfig['followUp'].label,
      value: modelConfig['followUp'].format(row['followUp']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('organiserId', () => ({
      id: 'organiserId',
      label: modelConfig['organiserId'].label,
      value: modelConfig['organiserId'].format(row['organiserId']),
    }))
    .with('negotiatorIds', () => ({
      id: 'negotiatorIds',
      label: modelConfig['negotiatorIds'].label,
      value: modelConfig['negotiatorIds'].format(row['negotiatorIds']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('attendee', () => ({
      id: 'attendee',
      label: modelConfig['attendee'].label,
      value: modelConfig['attendee'].format(row['attendee']),
    }))
    .with('attended', () => ({
      id: 'attended',
      label: modelConfig['attended'].label,
      value: modelConfig['attended'].format(row['attended']),
    }))
    .with('accompanied', () => ({
      id: 'accompanied',
      label: modelConfig['accompanied'].label,
      value: modelConfig['accompanied'].format(row['accompanied']),
    }))
    .with('isRepeat', () => ({
      id: 'isRepeat',
      label: modelConfig['isRepeat'].label,
      value: modelConfig['isRepeat'].format(row['isRepeat']),
    }))
    .with('virtual', () => ({
      id: 'virtual',
      label: modelConfig['virtual'].label,
      value: modelConfig['virtual'].format(row['virtual']),
    }))
    .with('negotiatorConfirmed', () => ({
      id: 'negotiatorConfirmed',
      label: modelConfig['negotiatorConfirmed'].label,
      value: modelConfig['negotiatorConfirmed'].format(row['negotiatorConfirmed']),
    }))
    .with('attendeeConfirmed', () => ({
      id: 'attendeeConfirmed',
      label: modelConfig['attendeeConfirmed'].label,
      value: modelConfig['attendeeConfirmed'].format(row['attendeeConfirmed']),
    }))
    .with('propertyConfirmed', () => ({
      id: 'propertyConfirmed',
      label: modelConfig['propertyConfirmed'].label,
      value: modelConfig['propertyConfirmed'].format(row['propertyConfirmed']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .with('otherAgentId', () => ({
      id: 'otherAgentId',
      label: modelConfig['otherAgentId'].label,
      value: modelConfig['otherAgentId'].format(row['otherAgentId']),
    }))
    .with('documents', () => ({
      id: 'documents',
      label: modelConfig['documents'].label,
      value: modelConfig['documents'].format(row['documents']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .with('extrasField', () => ({
      id: 'extrasField',
      label: modelConfig['extrasField'].label,
      value: modelConfig['extrasField'].format(row['extrasField']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseAppointmentsTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'> | null | undefined
  id?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  attendeeId?: Array<string> | null | undefined
  attendeeType?: Array<'applicant' | 'contact' | 'landlord' | 'tenancy'> | null | undefined
  start?: string | null | undefined
  end?: string | null | undefined
  includeCancelled?: boolean | null | undefined
  includeUnconfirmed?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  followUpFrom?: string | null | undefined
  followUpTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  extrasField?: Array<string> | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof AppointmentModel)[]
}
export const useAppointmentsTable = (args: UseAppointmentsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiAppointments({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof AppointmentModel => c in row)
        .map((fieldName) => getAppointmentsTableColumn(fieldName, appointmentModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getAppointmentsIdOpenHouseAttendeesTableColumn = (
  property: string,
  modelConfig: ModelConfig<OpenHouseAttendeeModel>,
  row: OpenHouseAttendeeModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('openHouseId', () => ({
      id: 'openHouseId',
      label: modelConfig['openHouseId'].label,
      value: modelConfig['openHouseId'].format(row['openHouseId']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('interestLevel', () => ({
      id: 'interestLevel',
      label: modelConfig['interestLevel'].label,
      value: modelConfig['interestLevel'].format(row['interestLevel']),
    }))
    .with('attendee', () => ({
      id: 'attendee',
      label: modelConfig['attendee'].label,
      value: modelConfig['attendee'].format(row['attendee']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseAppointmentsIdOpenHouseAttendeesTableArgs = { id: string; fieldNames: (keyof OpenHouseAttendeeModel)[] }
export const useAppointmentsIdOpenHouseAttendeesTable = (args: UseAppointmentsIdOpenHouseAttendeesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiAppointmentsIdOpenHouseAttendees({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof OpenHouseAttendeeModel => c in row)
        .map((fieldName) =>
          getAppointmentsIdOpenHouseAttendeesTableColumn(fieldName, openHouseAttendeeModelConfig, row),
        ),
    })) ?? []

  return { rows, dataQuery }
}
