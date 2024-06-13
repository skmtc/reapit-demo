import { z } from 'zod'

/** Representation of a works order item */
export const createWorksOrderItemModel =
  /** Representation of a works order item */
  z.object({
    /** The notes attached to the works order item */ notes: z.string(),
    /** The party to be charged for the work being carried out (landlord/tenant) */ chargeTo: z.string(),
    /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
    estimate: z.number().optional().nullable(),
    /** The type of estimate supplied (agent/verbal/written) */ estimateType: z.string().optional().nullable(),
    /** The net cost of the work to be carried out */ netAmount: z.number().optional().nullable(),
    /** The cost of the vat associated with the work */ vatAmount: z.number().optional().nullable(),
    /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
    reserveAmount: z.number().optional().nullable(),
  })
/** Representation of a works order item */
export type CreateWorksOrderItemModel =
  /** Representation of a works order item */
  {
    notes: /** The notes attached to the works order item */ string
    chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */ string
    estimate?:
      | /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
      number
      | null
      | undefined
    estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | null | undefined
    netAmount?: /** The net cost of the work to be carried out */ number | null | undefined
    vatAmount?: /** The cost of the vat associated with the work */ number | null | undefined
    reserveAmount?:
      | /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
      number
      | null
      | undefined
  }
