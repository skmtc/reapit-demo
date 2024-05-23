import { z } from 'zod'

/** Request body for associating this offer to another one below it in the chain */
export const createDownwardLinkModel = z.object({
  /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  offerId: z.string().nullable().optional(),
  /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
  propertyAddress: z.string().nullable().optional(),
  /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  agent: z.string().nullable().optional(),
  /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
  buyer: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
  buyerSolicitorId: z.string().nullable().optional(),
})
