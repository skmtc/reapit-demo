import { z } from 'zod'

/** Representation of a works order item */
export const updateWorksOrderItemModel = z.object({
  /** The notes attached to the works order item */ notes: z.string().nullable().optional(),
  /** The party to be charged for the work being carried out (landlord/tenant) */
  chargeTo: z.string().nullable().optional(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().nullable().optional(),
  /** The type of estimate supplied (agent/verbal/written) */ estimateType: z.string().nullable().optional(),
  /** The net cost of the work to be carried out */ netAmount: z.number().nullable().optional(),
  /** The cost of the vat associated with the work */ vatAmount: z.number().nullable().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().nullable().optional(),
})
