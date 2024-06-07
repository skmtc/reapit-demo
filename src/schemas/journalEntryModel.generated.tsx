import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a journal entry */
export const journalEntryModel = /** Representation of a journal entry */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), created: /** The date and time when the journal entry was created */
z.string().optional(), propertyId: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
z.string().optional(), associatedType: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
z.string().optional(), associatedId: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
z.string().optional(), typeId: /** The type of journal entry */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator that created the entry */
z.string().optional(), description: /** The textual description of the journal entry event */
z.string().optional()});
/** Representation of a journal entry */
export type JournalEntryModel = /** Representation of a journal entry */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, created?: /** The date and time when the journal entry was created */
string | undefined, propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
string | undefined, associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
string | undefined, associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
string | undefined, typeId?: /** The type of journal entry */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator that created the entry */
string | undefined, description?: /** The textual description of the journal entry event */
string | undefined};