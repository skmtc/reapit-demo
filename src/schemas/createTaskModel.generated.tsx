import { z } from 'zod'

/** Request body used to create a new task, which can also be an internal message */
export const createTaskModel =
  /** Request body used to create a new task, which can also be an internal message */
  z.object({
    /** The date the task becomes active (Required when 'TypeId' is given) */ activates: z.string().optional(),
    /** The date the task was completed */ completed: z.string().optional(),
    /** The unique identifier of the task type */ typeId: z.string().optional(),
    /** The unique identifer of the negotiator that created the task */ senderId: z.string(),
    /** The textual contents of the task or message */ text: z.string(),
    /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().optional(),
    /** The unique identifier of the property the task is associated to */ propertyId: z.string().optional(),
    /** The unique identifier of the applicant the task is associated to */ applicantId: z.string().optional(),
    /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().optional(),
    /** The unique identifier of the contact the task is associated to */ contactId: z.string().optional(),
    /** The unique identifier of the negotiator or office the task is being sent to */ recipientId: z.string(),
    /** The type of the recipient (office/negotiator) */ recipientType: z.string(),
    /** App specific metadata that has been set against the task */
    metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new task, which can also be an internal message */
export type CreateTaskModel =
  /** Request body used to create a new task, which can also be an internal message */
  {
    activates?: /** The date the task becomes active (Required when 'TypeId' is given) */ string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId: /** The unique identifer of the negotiator that created the task */ string
    text: /** The textual contents of the task or message */ string
    landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
    propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
    applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
    tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
    contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
    recipientId: /** The unique identifier of the negotiator or office the task is being sent to */ string
    recipientType: /** The type of the recipient (office/negotiator) */ string
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
  }
