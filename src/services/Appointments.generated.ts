import { appointmentModelPagedResult } from '@/schemas/appointmentModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiAppointmentsFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
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
export type PostApiAppointmentsFnArgs = { body: CreateAppointmentModel }
export const postApiAppointmentsFn = async ({ body }: PostApiAppointmentsFnArgs) => {
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
export const usePostApiAppointments = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiAppointmentsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
