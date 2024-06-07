import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { offerContactModel, OfferContactModel } from '@/schemas/offerContactModel.generated.tsx'

/** Representation of an offer */
export const offerModel = /** Representation of an offer */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the offer */
z.string().optional(), created: /** The the date and time when the offer was created */
z.string().optional(), modified: /** The date and time when the offer was last modified */
z.string().optional(), currency: /** The currency that applies to monetary amounts exposed in the model */
z.string().optional(), applicantId: /** The unique identifier of the applicant associated to the offer */
z.string().optional(), companyId: /** The unique identifier of the company associated to the offer */
z.string().optional(), contactId: /** The unique identifier of the contact associated to the offer */
z.string().optional(), propertyId: /** The unique identifier of the property associated to the offer */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator associated to the offer */
z.string().optional(), date: /** The date when the offer was made */
z.string().optional(), amount: /** The monetary amount of the offer */
z.number().optional(), status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
z.string().optional(), inclusions: /** A free text field describing items that should be included in the sale */
z.string().optional(), exclusions: /** A free text field describing items that are explicitly excluded from the sale */
z.string().optional(), conditions: /** A free text field describing any other conditions set by either party that relate to the sale */
z.string().optional(), related: /** A collection of contacts associated to the offer */
z.array(offerContactModel).optional(), metadata: /** App specific metadata that has been set against the offer */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the offer. Used for managing update concurrency */
z.string().optional()});
/** Representation of an offer */
export type OfferModel = /** Representation of an offer */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the offer */
string | undefined, created?: /** The the date and time when the offer was created */
string | undefined, modified?: /** The date and time when the offer was last modified */
string | undefined, currency?: /** The currency that applies to monetary amounts exposed in the model */
string | undefined, applicantId?: /** The unique identifier of the applicant associated to the offer */
string | undefined, companyId?: /** The unique identifier of the company associated to the offer */
string | undefined, contactId?: /** The unique identifier of the contact associated to the offer */
string | undefined, propertyId?: /** The unique identifier of the property associated to the offer */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator associated to the offer */
string | undefined, date?: /** The date when the offer was made */
string | undefined, amount?: /** The monetary amount of the offer */
number | undefined, status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
string | undefined, inclusions?: /** A free text field describing items that should be included in the sale */
string | undefined, exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
string | undefined, conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
string | undefined, related?: /** A collection of contacts associated to the offer */
Array<OfferContactModel> | undefined, metadata?: /** App specific metadata that has been set against the offer */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the offer. Used for managing update concurrency */
string | undefined};