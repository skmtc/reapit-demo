import { z } from 'zod'

/** Request body for associating this offer to another one above it in the chain */
export const createUpwardLinkModel = z.object({
  /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  offerId: z.string().nullable().optional(),
  /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
  propertyAddress: z.string().nullable().optional(),
  /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  agent: z.string().nullable().optional(),
  /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
  vendor: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
  vendorSolicitorId: z.string().nullable().optional(),
})
