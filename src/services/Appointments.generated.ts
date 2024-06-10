import { appointmentModelPagedResult } from '@/schemas/appointmentModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

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
