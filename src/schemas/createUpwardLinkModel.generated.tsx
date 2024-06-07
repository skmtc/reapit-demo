import { z } from 'zod'

/** Request body for associating this offer to another one above it in the chain */
export const createUpwardLinkModel = /** Request body for associating this offer to another one above it in the chain */
z.object({offerId: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
z.string().optional(), propertyAddress: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
z.string().optional(), agent: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
z.string().optional(), vendor: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
z.string().optional(), vendorSolicitorId: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
z.string().optional()});
/** Request body for associating this offer to another one above it in the chain */
export type CreateUpwardLinkModel = /** Request body for associating this offer to another one above it in the chain */
{offerId?: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
string | undefined, propertyAddress?: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
string | undefined, agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
string | undefined, vendor?: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
string | undefined, vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
string | undefined};