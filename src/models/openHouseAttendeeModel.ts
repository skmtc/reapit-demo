import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { appointmentAttendeeModel, AppointmentAttendeeModel } from '@/models/appointmentAttendeeModel.ts'

/** Representation of a calendar appointment */
export const openHouseAttendeeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the open house attendee */ id: z.string().nullable().optional(),
  /** The unique identifier of the open house appointment */ openHouseId: z.string().nullable().optional(),
  /** The date and time when the open house attendee was created */ created: z.string().nullable().optional(),
  /** The date and time when the open house attendee was last modified */ modified: z.string().nullable().optional(),
  /** The notes taken regarding the open house attendee */ notes: z.string().nullable().optional(),
  /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
  interestLevel: z.string().nullable().optional(),
  attendee: appointmentAttendeeModel.nullable().optional(),
  /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a calendar appointment */
export type OpenHouseAttendeeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the open house attendee */ string | undefined
  openHouseId?: /** The unique identifier of the open house appointment */ string | undefined
  created?: /** The date and time when the open house attendee was created */ string | undefined
  modified?: /** The date and time when the open house attendee was last modified */ string | undefined
  notes?: /** The notes taken regarding the open house attendee */ string | undefined
  interestLevel?: /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
  string | undefined
  attendee?: AppointmentAttendeeModel | undefined
  _eTag?: /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
  string | undefined
}
