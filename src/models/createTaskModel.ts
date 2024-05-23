import { z } from 'zod'

/** Request body used to create a new task, which can also be an internal message */
export const createTaskModel = z.object({
  /** The date the task becomes active (Required when 'TypeId' is given) */ activates: z.string().nullable().optional(),
  /** The date the task was completed */ completed: z.string().nullable().optional(),
  /** The unique identifier of the task type */ typeId: z.string().nullable().optional(),
  /** The unique identifer of the negotiator that created the task */ senderId: z.string(),
  /** The textual contents of the task or message */ text: z.string(),
  /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().nullable().optional(),
  /** The unique identifier of the property the task is associated to */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant the task is associated to */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the contact the task is associated to */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */ recipientId: z.string(),
  /** The type of the recipient (office/negotiator) */ recipientType: z.string(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
