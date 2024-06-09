import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a task, which can also be an internal message */
export const taskModel =
  /** Representation of a task, which can also be an internal message */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the task */ id: z.string().optional(),
    /** The date and time when the task was created */ created: z.string().optional(),
    /** The date and time when the task was last modified */ modified: z.string().optional(),
    /** The date the task becomes active */ activates: z.string().optional(),
    /** The date the task was completed */ completed: z.string().optional(),
    /** The unique identifier of the task type */ typeId: z.string().optional(),
    /** The unique identifer of the negotiator that created the task */ senderId: z.string().optional(),
    /** The textual contents of the task or message */ text: z.string().optional(),
    /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().optional(),
    /** The unique identifier of the property the task is associated to */ propertyId: z.string().optional(),
    /** The unique identifier of the applicant the task is associated to */ applicantId: z.string().optional(),
    /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().optional(),
    /** The unique identifier of the contact the task is associated to */ contactId: z.string().optional(),
    /** The unique identifier of the negotiator or office the task is being sent to */
    recipientId: z.string().optional(),
    /** The type of the recipient (office/negotiator) */ recipientType: z.string().optional(),
    /** App specific metadata that has been set against the task */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the task. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of a task, which can also be an internal message */
export type TaskModel =
  /** Representation of a task, which can also be an internal message */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the task */ string | undefined
    created?: /** The date and time when the task was created */ string | undefined
    modified?: /** The date and time when the task was last modified */ string | undefined
    activates?: /** The date the task becomes active */ string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId?: /** The unique identifer of the negotiator that created the task */ string | undefined
    text?: /** The textual contents of the task or message */ string | undefined
    landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
    propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
    applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
    tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
    contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
    recipientId?: /** The unique identifier of the negotiator or office the task is being sent to */ string | undefined
    recipientType?: /** The type of the recipient (office/negotiator) */ string | undefined
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
    _eTag?: /** The ETag for the current version of the task. Used for managing update concurrency */ string | undefined
  }
