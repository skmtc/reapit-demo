import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a task, which can also be an internal message */
export const taskModel =
  /** Representation of a task, which can also be an internal message */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the task */ id: z.string().optional().nullable(),
    /** The date and time when the task was created */ created: z.string().optional().nullable(),
    /** The date and time when the task was last modified */ modified: z.string().optional().nullable(),
    /** The date the task becomes active */ activates: z.string().optional().nullable(),
    /** The date the task was completed */ completed: z.string().optional().nullable(),
    /** The unique identifier of the task type */ typeId: z.string().optional().nullable(),
    /** The unique identifer of the negotiator that created the task */ senderId: z.string().optional().nullable(),
    /** The textual contents of the task or message */ text: z.string().optional().nullable(),
    /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().optional().nullable(),
    /** The unique identifier of the property the task is associated to */ propertyId: z.string().optional().nullable(),
    /** The unique identifier of the applicant the task is associated to */
    applicantId: z.string().optional().nullable(),
    /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().optional().nullable(),
    /** The unique identifier of the contact the task is associated to */ contactId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator or office the task is being sent to */
    recipientId: z.string().optional().nullable(),
    /** The type of the recipient (office/negotiator) */ recipientType: z.string().optional().nullable(),
    /** App specific metadata that has been set against the task */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the task. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
export type TaskModel =
  /** Representation of a task, which can also be an internal message */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the task */ string | null | undefined
    created?: /** The date and time when the task was created */ string | null | undefined
    modified?: /** The date and time when the task was last modified */ string | null | undefined
    activates?: /** The date the task becomes active */ string | null | undefined
    completed?: /** The date the task was completed */ string | null | undefined
    typeId?: /** The unique identifier of the task type */ string | null | undefined
    senderId?: /** The unique identifer of the negotiator that created the task */ string | null | undefined
    text?: /** The textual contents of the task or message */ string | null | undefined
    landlordId?: /** The unique identifier of the landlord the task is associated to */ string | null | undefined
    propertyId?: /** The unique identifier of the property the task is associated to */ string | null | undefined
    applicantId?: /** The unique identifier of the applicant the task is associated to */ string | null | undefined
    tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | null | undefined
    contactId?: /** The unique identifier of the contact the task is associated to */ string | null | undefined
    recipientId?:
      | /** The unique identifier of the negotiator or office the task is being sent to */
      string
      | null
      | undefined
    recipientType?: /** The type of the recipient (office/negotiator) */ string | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the task */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the task. Used for managing update concurrency */
      string
      | null
      | undefined
  }
