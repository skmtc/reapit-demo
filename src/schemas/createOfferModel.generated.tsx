import { z } from 'zod'

/** Request body used to create a new offer */
export const createOfferModel =
  /** Request body used to create a new offer */
  z.object({
    /** The unique identifier of the applicant associated to the offer */ applicantId: z.string(),
    /** The unique identifier of the property associated to the offer */ propertyId: z.string(),
    /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().optional(),
    /** The date when the offer was made */ date: z.string(),
    /** The monetary amount of the offer */ amount: z.number(),
    /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */ status: z.string(),
    /** A free text field describing items that should be included in the sale */ inclusions: z.string().optional(),
    /** A free text field describing items that are explicitly excluded from the sale */
    exclusions: z.string().optional(),
    /** A free text field describing any other conditions set by either party that relate to the sale */
    conditions: z.string().optional(),
    /** App specific metadata to set against the offer */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new offer */
export type CreateOfferModel =
  /** Request body used to create a new offer */
  {
    applicantId: /** The unique identifier of the applicant associated to the offer */ string
    propertyId: /** The unique identifier of the property associated to the offer */ string
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined
    date: /** The date when the offer was made */ string
    amount: /** The monetary amount of the offer */ number
    status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */ string
    inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */ string | undefined
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined
    metadata?: /** App specific metadata to set against the offer */ Record<string, Record<string, never>> | undefined
  }
