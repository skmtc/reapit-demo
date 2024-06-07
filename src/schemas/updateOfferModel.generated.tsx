import { z } from 'zod'

/** Request body used to update an existing offer */
export const updateOfferModel = /** Request body used to update an existing offer */
z.object({negotiatorId: /** The unique identifier of the negotiator associated to the offer */
z.string().optional(), date: /** The date when the offer was made */
z.string().optional(), amount: /** The monetary amount of the offer */
z.number().optional(), status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
z.string().optional(), inclusions: /** A free text field describing items that should be included in the sale */
z.string().optional(), exclusions: /** A free text field describing items that are explicitly excluded from the sale */
z.string().optional(), conditions: /** A free text field describing any other conditions set by either party that relate to the sale */
z.string().optional(), metadata: /** App specific metadata to set against the offer */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing offer */
export type UpdateOfferModel = /** Request body used to update an existing offer */
{negotiatorId?: /** The unique identifier of the negotiator associated to the offer */
string | undefined, date?: /** The date when the offer was made */
string | undefined, amount?: /** The monetary amount of the offer */
number | undefined, status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
string | undefined, inclusions?: /** A free text field describing items that should be included in the sale */
string | undefined, exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
string | undefined, conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
string | undefined, metadata?: /** App specific metadata to set against the offer */
Record<string, Record<string, never>> | undefined};