import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiAppointmentsArgs = {
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
}: UseGetApiAppointmentsArgs) => {
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
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
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiAppointments = (args: UseGetApiAppointmentsArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiAppointmentsArgs = {
  body: /** Request body used to create a new calendar appointment */
  {
    start: /** The date and time when the appointment will start */ string
    end: /** The date and time when the appointment will end */ string
    followUpOn?: /** The date when the appointment should be followed up */ string | undefined
    typeId: /** The unique identifier of the appointment type */ string
    description?: /** A free text description about the appointment */ string | undefined
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined
        }
      | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
          until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
          string | undefined
        }
      | undefined
    documents?: /** A view of the documents associated to the appointment */
    | {
          draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
          string | undefined
          finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the appointment */
    Record<string, Record<string, never>> | undefined
  }
}
export const postApiAppointmentsFn = async ({ body }: UsePostApiAppointmentsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
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
export type UseGetApiAppointmentsIdArgs = {
  id: string
  embed?: Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'> | undefined
  extrasField?: Array<string> | undefined
}
export const getApiAppointmentsIdFn = async ({ id, embed, extrasField }: UseGetApiAppointmentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}
export const useGetApiAppointmentsId = (args: UseGetApiAppointmentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsIdFn(args),
  })

  return result
}
export type UsePatchApiAppointmentsIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing calendar appointment */
  {
    start?: /** The date and time when the appointment will start */ string | undefined
    end?: /** The date and time when the appointment will end */ string | undefined
    followUpOn?: /** The date when the appointment should be followed up */ string | undefined
    typeId?: /** The unique identifier of the appointment type */ string | undefined
    description?: /** A free text description about the appointment */ string | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
    cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
          string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined
          confirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
          boolean | undefined
        }
      | undefined
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
    followUp?: /** Represents the follow up information on a single appointment */
    | {
          responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined
          notes?: /** The internal follow up notes to be stored against the appointment */ string | undefined
        }
      | undefined
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
          interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined
          until?: /** The date and time of the last occurrence of the appointment */ string | undefined
        }
      | undefined
    documents?: /** A view of the documents associated to the appointment */
    | {
          draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
          string | undefined
          finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the appointment */
    Record<string, Record<string, never>> | undefined
  }
}
export const patchApiAppointmentsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiAppointmentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
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
export const usePatchApiAppointmentsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiAppointmentsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
export type UseGetApiAppointmentsIdOpenHouseAttendeesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiAppointmentsIdOpenHouseAttendeesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiAppointmentsIdOpenHouseAttendeesArgs) => {
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
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
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiAppointmentsIdOpenHouseAttendees = (args: UseGetApiAppointmentsIdOpenHouseAttendeesArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsIdOpenHouseAttendeesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiAppointmentsIdOpenHouseAttendeesArgs = {
  id: string
  body: /** Request body used to create a new open house attendee */
  {
    interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    string | undefined
    notes?: /** Notes on this open house attendee */ string | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined
        }
      | undefined
  }
}
export const postApiAppointmentsIdOpenHouseAttendeesFn = async ({
  id,
  body,
}: UsePostApiAppointmentsIdOpenHouseAttendeesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
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
export const usePostApiAppointmentsIdOpenHouseAttendees = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiAppointmentsIdOpenHouseAttendeesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
export type UseGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {
  id: string
  openHouseAttendeeId: string
}
export const getApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async ({
  id,
  openHouseAttendeeId,
}: UseGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees/${openHouseAttendeeId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}
export const useGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId = (
  args: UseGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn(args),
  })

  return result
}
export type UseDeleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {
  id: string
  openHouseAttendeeId: string
}
export const deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async ({
  id,
  openHouseAttendeeId,
}: UseDeleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees/${openHouseAttendeeId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, openHouseAttendeeId }),
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
export const useDeleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
export type UsePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {
  'If-Match'?: string
  id: string
  openHouseAttendeeId: string
  body: /** Request body used to upda te a new open house attendee */
  {
    interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    string | undefined
    notes?: /** Notes on this open house attendee */ string | undefined
  }
}
export const patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async ({
  'If-Match': IfMatch,
  id,
  openHouseAttendeeId,
  body,
}: UsePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}/openHouseAttendees/${openHouseAttendeeId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, openHouseAttendeeId, body }),
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
export const usePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    },
  })
}
