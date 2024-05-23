import { z } from 'zod'

/** Representation of a works order item */
export const worksOrderItemModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the works order item */ id: z.string().nullable().optional(),
  /** The unique identifier of the parent works order */ worksOrderId: z.string().nullable().optional(),
  /** The date and time when the works order item was created */ created: z.string().nullable().optional(),
  /** The date and time when the works order item was last modified */ modified: z.string().nullable().optional(),
  /** The notes attached to the works order item */ notes: z.string().nullable().optional(),
  /** The party to be charged for the work being carried out (landlord/tenant) */
  chargeTo: z.string().nullable().optional(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().nullable().optional(),
  /** The type of estimate supplied (agent/verbal/written) */ estimateType: z.string().nullable().optional(),
  /** The net cost of the work to be carried out */ netAmount: z.number().nullable().optional(),
  /** The additional vat cost for the work to be carried out */ vatAmount: z.number().nullable().optional(),
  /** The gross cost of the work to be carried out */ grossAmount: z.number().nullable().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().nullable().optional(),
  /** The unique identifier of the nominal account the works order financial transactions are allocated to */
  nominalAccountId: z.string().nullable().optional(),
  /** The ETag for the current version of the works order item. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
