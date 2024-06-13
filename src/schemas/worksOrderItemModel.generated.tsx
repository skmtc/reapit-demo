import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

/** Representation of a works order item */
export type WorksOrderItemModel =
  /** Representation of a works order item */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the works order item */ string | null | undefined
    worksOrderId?: /** The unique identifier of the parent works order */ string | null | undefined
    created?: /** The date and time when the works order item was created */ string | null | undefined
    modified?: /** The date and time when the works order item was last modified */ string | null | undefined
    notes?: /** The notes attached to the works order item */ string | null | undefined
    chargeTo?: /** The party to be charged for the work being carried out (landlord/tenant) */ string | null | undefined
    estimate?:
      | /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
      number
      | null
      | undefined
    estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | null | undefined
    netAmount?: /** The net cost of the work to be carried out */ number | null | undefined
    vatAmount?: /** The additional vat cost for the work to be carried out */ number | null | undefined
    grossAmount?: /** The gross cost of the work to be carried out */ number | null | undefined
    reserveAmount?:
      | /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
      number
      | null
      | undefined
    nominalAccountId?:
      | /** The unique identifier of the nominal account the works order financial transactions are allocated to */
      string
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the works order item. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a works order item */
export const worksOrderItemModel =
  /** Representation of a works order item */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the works order item */ id: z.string().optional().nullable(),
    /** The unique identifier of the parent works order */ worksOrderId: z.string().optional().nullable(),
    /** The date and time when the works order item was created */ created: z.string().optional().nullable(),
    /** The date and time when the works order item was last modified */ modified: z.string().optional().nullable(),
    /** The notes attached to the works order item */ notes: z.string().optional().nullable(),
    /** The party to be charged for the work being carried out (landlord/tenant) */
    chargeTo: z.string().optional().nullable(),
    /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
    estimate: z.number().optional().nullable(),
    /** The type of estimate supplied (agent/verbal/written) */ estimateType: z.string().optional().nullable(),
    /** The net cost of the work to be carried out */ netAmount: z.number().optional().nullable(),
    /** The additional vat cost for the work to be carried out */ vatAmount: z.number().optional().nullable(),
    /** The gross cost of the work to be carried out */ grossAmount: z.number().optional().nullable(),
    /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
    reserveAmount: z.number().optional().nullable(),
    /** The unique identifier of the nominal account the works order financial transactions are allocated to */
    nominalAccountId: z.string().optional().nullable(),
    /** The ETag for the current version of the works order item. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
