import { z } from 'zod'

/** Representation of a task, which can also be an internal message */
export const taskModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the task */ id: z.string().nullable().optional(),
  /** The date and time when the task was created */ created: z.string().nullable().optional(),
  /** The date and time when the task was last modified */ modified: z.string().nullable().optional(),
  /** The date the task becomes active */ activates: z.string().nullable().optional(),
  /** The date the task was completed */ completed: z.string().nullable().optional(),
  /** The unique identifier of the task type */ typeId: z.string().nullable().optional(),
  /** The unique identifer of the negotiator that created the task */ senderId: z.string().nullable().optional(),
  /** The textual contents of the task or message */ text: z.string().nullable().optional(),
  /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().nullable().optional(),
  /** The unique identifier of the property the task is associated to */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant the task is associated to */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the contact the task is associated to */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */
  recipientId: z.string().nullable().optional(),
  /** The type of the recipient (office/negotiator) */ recipientType: z.string().nullable().optional(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the task. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
