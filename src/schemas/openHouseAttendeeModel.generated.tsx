import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { AppointmentAttendeeModel, appointmentAttendeeModel } from '@/schemas/appointmentAttendeeModel.generated.tsx'
import { z } from 'zod'

export type OpenHouseAttendeeModel =
  /** Representation of a calendar appointment */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the open house attendee */ string | null | undefined
    openHouseId?: /** The unique identifier of the open house appointment */ string | null | undefined
    created?: /** The date and time when the open house attendee was created */ string | null | undefined
    modified?: /** The date and time when the open house attendee was last modified */ string | null | undefined
    notes?: /** The notes taken regarding the open house attendee */ string | null | undefined
    interestLevel?:
      | /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
      string
      | null
      | undefined
    attendee?: AppointmentAttendeeModel | null | undefined
    _eTag?:
      | /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a calendar appointment */
export const openHouseAttendeeModel =
  /** Representation of a calendar appointment */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the open house attendee */ id: z.string().optional().nullable(),
    /** The unique identifier of the open house appointment */ openHouseId: z.string().optional().nullable(),
    /** The date and time when the open house attendee was created */ created: z.string().optional().nullable(),
    /** The date and time when the open house attendee was last modified */ modified: z.string().optional().nullable(),
    /** The notes taken regarding the open house attendee */ notes: z.string().optional().nullable(),
    /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
    interestLevel: z.string().optional().nullable(),
    attendee: appointmentAttendeeModel.optional().nullable(),
    /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
