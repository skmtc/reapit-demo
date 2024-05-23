import { z } from 'zod'

/** Request body used to update an existing offer */
export const updateOfferModel = z.object({
  /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().nullable().optional(),
  /** The date when the offer was made */ date: z.string().nullable().optional(),
  /** The monetary amount of the offer */ amount: z.number().nullable().optional(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string().nullable().optional(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().nullable().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().nullable().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().nullable().optional(),
  /** App specific metadata to set against the offer */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
