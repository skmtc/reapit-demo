import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a task, which can also be an internal message */
export const taskModel = /** Representation of a task, which can also be an internal message */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the task */
z.string().optional(), created: /** The date and time when the task was created */
z.string().optional(), modified: /** The date and time when the task was last modified */
z.string().optional(), activates: /** The date the task becomes active */
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
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the task. Used for managing update concurrency */
z.string().optional()});
/** Representation of a task, which can also be an internal message */
export type TaskModel = /** Representation of a task, which can also be an internal message */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the task */
string | undefined, created?: /** The date and time when the task was created */
string | undefined, modified?: /** The date and time when the task was last modified */
string | undefined, activates?: /** The date the task becomes active */
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
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the task. Used for managing update concurrency */
string | undefined};