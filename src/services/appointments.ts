import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiAppointmentsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    followUpOn?: /** The date when the appointment should be followed up */ string | undefined | null
    typeId: /** The unique identifier of the appointment type */ string
    description?: /** A free text description about the appointment */ string | undefined | null
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */
    string | undefined | null
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined | null
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined | null
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined | null
        }
      | undefined
      | null
    propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined | null
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined | null
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined | null
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined | null
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined | null
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined | null
    virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined | null
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined | null
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined | null
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined | null
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
          string | undefined | null
          until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
          string | undefined | null
        }
      | undefined
      | null
    documents?: /** A view of the documents associated to the appointment */
    | {
          draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
          string | undefined | null
          finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
          string | undefined | null
        }
      | undefined
      | null
    metadata?: /** App specific metadata to set against the appointment */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const postApiAppointmentsFn = async ({ body }: UsePostApiAppointmentsArgs) => {
  const res = await fetch(`/appointments/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`, {
    method: 'POST',
    body: JSON.stringify({ body }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
    },
  })

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
  embed?: Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'> | undefined | null
  extrasField?: Array<string> | undefined | null
}
export const getApiAppointmentsIdFn = async ({ id, embed, extrasField }: UseGetApiAppointmentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/appointments/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    start?: /** The date and time when the appointment will start */ string | undefined | null
    end?: /** The date and time when the appointment will end */ string | undefined | null
    followUpOn?: /** The date when the appointment should be followed up */ string | undefined | null
    typeId?: /** The unique identifier of the appointment type */ string | undefined | null
    description?: /** A free text description about the appointment */ string | undefined | null
    propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined | null
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined | null
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */
    string | undefined | null
    cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | undefined | null
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined | null
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined | null
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
          string | undefined | null
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined | null
          confirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
          boolean | undefined | null
        }
      | undefined
      | null
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined | null
    virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined | null
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined | null
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined | null
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined | null
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined | null
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined | null
    followUp?: /** Represents the follow up information on a single appointment */
    | {
          responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined | null
          notes?: /** The internal follow up notes to be stored against the appointment */ string | undefined | null
        }
      | undefined
      | null
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
          string | undefined | null
          interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined | null
          until?: /** The date and time of the last occurrence of the appointment */ string | undefined | null
        }
      | undefined
      | null
    documents?: /** A view of the documents associated to the appointment */
    | {
          draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
          string | undefined | null
          finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
          string | undefined | null
        }
      | undefined
      | null
    metadata?: /** App specific metadata to set against the appointment */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiAppointmentsIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiAppointmentsIdArgs) => {
  const res = await fetch(
    `/appointments/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    string | undefined | null
    notes?: /** Notes on this open house attendee */ string | undefined | null
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined | null
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined | null
        }
      | undefined
      | null
  }
}
export const postApiAppointmentsIdOpenHouseAttendeesFn = async ({
  id,
  body,
}: UsePostApiAppointmentsIdOpenHouseAttendeesArgs) => {
  const res = await fetch(
    `/appointments/${id}/openHouseAttendees${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
    `/appointments/${id}/openHouseAttendees/${openHouseAttendeeId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, openHouseAttendeeId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
    string | undefined | null
    notes?: /** Notes on this open house attendee */ string | undefined | null
  }
}
export const patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async ({
  'If-Match': IfMatch,
  id,
  openHouseAttendeeId,
  body,
}: UsePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs) => {
  const res = await fetch(
    `/appointments/${id}/openHouseAttendees/${openHouseAttendeeId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, openHouseAttendeeId, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
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
