import { z } from 'zod'

/** Request body used to update an existing task, which can also be an internal message */
export const updateTaskModel = /** Request body used to update an existing task, which can also be an internal message */
z.object({activates: /** The date the task becomes active (Required when 'TypeId' is given) */
z.string().optional(), completed: /** The date the task was completed */
z.string().optional(), typeId: /** The unique identifier of the task type */
z.string().optional(), senderId: /** The unique identifer of the negotiator that created the task */
z.string().optional(), text: /** The textual contents of the task or message */
z.string().optional(), landlordId: /** The unique identifier of the landlord the task is associated to */
z.string().optional(), propertyId: /** The unique identifier of the property the task is associated to */
z.string().optional(), applicantId: /** The unique identifier of the applicant the task is associated to */
z.string().optional(), tenancyId: /** The unique identifier of the tenancy the task is associated to */
z.string().optional(), contactId: /** The unique identifier of the contact the task is associated to */
z.string().optional(), recipientId: /** The unique identifier of the negotiator or office the task is being sent to */
z.string().optional(), recipientType: /** The type of the recipient (office/negotiator) */
z.string().optional(), metadata: /** App specific metadata that has been set against the task */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing task, which can also be an internal message */
export type UpdateTaskModel = /** Request body used to update an existing task, which can also be an internal message */
{activates?: /** The date the task becomes active (Required when 'TypeId' is given) */
string | undefined, completed?: /** The date the task was completed */
string | undefined, typeId?: /** The unique identifier of the task type */
string | undefined, senderId?: /** The unique identifer of the negotiator that created the task */
string | undefined, text?: /** The textual contents of the task or message */
string | undefined, landlordId?: /** The unique identifier of the landlord the task is associated to */
string | undefined, propertyId?: /** The unique identifier of the property the task is associated to */
string | undefined, applicantId?: /** The unique identifier of the applicant the task is associated to */
string | undefined, tenancyId?: /** The unique identifier of the tenancy the task is associated to */
string | undefined, contactId?: /** The unique identifier of the contact the task is associated to */
string | undefined, recipientId?: /** The unique identifier of the negotiator or office the task is being sent to */
string | undefined, recipientType?: /** The type of the recipient (office/negotiator) */
string | undefined, metadata?: /** App specific metadata that has been set against the task */
Record<string, Record<string, never>> | undefined};