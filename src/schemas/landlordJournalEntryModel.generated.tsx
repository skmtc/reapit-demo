import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a landlord related journal entry */
export const landlordJournalEntryModel = /** Representation of a landlord related journal entry */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), created: /** The date and time when the journal entry was created */
z.string().optional(), propertyId: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
z.string().optional(), landlordId: /** The unique identifier of the landlord the journal entry is related to. */
z.string().optional(), type: /** The type of journal entry */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator that created the entry */
z.string().optional(), description: /** The textual description of the journal entry event */
z.string().optional()});
/** Representation of a landlord related journal entry */
export type LandlordJournalEntryModel = /** Representation of a landlord related journal entry */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, created?: /** The date and time when the journal entry was created */
string | undefined, propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
string | undefined, landlordId?: /** The unique identifier of the landlord the journal entry is related to. */
string | undefined, type?: /** The type of journal entry */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator that created the entry */
string | undefined, description?: /** The textual description of the journal entry event */
string | undefined};