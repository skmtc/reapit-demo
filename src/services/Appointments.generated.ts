import { CreateAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateOpenHouseAttendeeModel } from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'
import { appointmentModelPagedResult } from '@/schemas/appointmentModelPagedResult.generated.tsx'
import { openHouseAttendeeModelPagedResult } from '@/schemas/openHouseAttendeeModelPagedResult.generated.tsx'

export type CreateAppointmentFnArgs = { body: CreateAppointmentModel }
export const createAppointmentFn = async ({ body }: CreateAppointmentFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useCreateAppointment = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createAppointmentFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
export type CreateOpenHouseAttendeeFnArgs = { id: string; body: CreateOpenHouseAttendeeModel }
export const createOpenHouseAttendeeFn = async ({ id, body }: CreateOpenHouseAttendeeFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useCreateOpenHouseAttendee = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOpenHouseAttendeeFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
export type GetApiAppointmentsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
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
}
export const getApiAppointmentsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  typeId,
  negotiatorId,
  officeId,
  propertyId,
  attendeeId,
  attendeeType,
  start,
  end,
  includeCancelled,
  includeUnconfirmed,
  fromArchive,
  followUpFrom,
  followUpTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  extrasField,
  metadata,
}: GetApiAppointmentsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, typeId, negotiatorId, officeId, propertyId, attendeeId, attendeeType, start, end, includeCancelled, includeUnconfirmed, fromArchive, followUpFrom, followUpTo, createdFrom, createdTo, modifiedFrom, modifiedTo, extrasField, metadata }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return appointmentModelPagedResult.parse(data)
}
export const useGetApiAppointments = (args: GetApiAppointmentsFnArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiAppointmentsIdOpenHouseAttendeesFnArgs = {
  id: string
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
}
export const getApiAppointmentsIdOpenHouseAttendeesFn = async ({
  id,
  pageSize,
  pageNumber,
}: GetApiAppointmentsIdOpenHouseAttendeesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return openHouseAttendeeModelPagedResult.parse(data)
}
export const useGetApiAppointmentsIdOpenHouseAttendees = (args: GetApiAppointmentsIdOpenHouseAttendeesFnArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsIdOpenHouseAttendeesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
