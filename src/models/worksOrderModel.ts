import { z } from 'zod'

/** Representation of a works order */
export const worksOrderModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the works order */ id: z.string().nullable().optional(),
  /** The date and time when the works order was created */ created: z.string().nullable().optional(),
  /** The date and time when the works order was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the property where the work is to be carried out */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that booked the works order */
  negotiatorId: z.string().nullable().optional(),
  /** The unique identifier of the type of work that needs to be carried out */
  typeId: z.string().nullable().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string().nullable().optional(),
  /** A free text description of the work required */ description: z.string().nullable().optional(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */
  reporter: z.string().nullable().optional(),
  /** The priority level of the works order (low/medium/high) */ priority: z.string().nullable().optional(),
  /** The date when the works order was booked */ booked: z.string().nullable().optional(),
  /** The date when the work is required to be completed by */ required: z.string().nullable().optional(),
  /** The date when the work was completed */ completed: z.string().nullable().optional(),
  /** The total net cost for all of the items of work to be carried out */
  totalNetAmount: z.number().nullable().optional(),
  /** The total additional vat cost for all of the items of work to be carried out */
  totalVatAmount: z.number().nullable().optional(),
  /** The total gross cost for all of the items of work to be carried out */
  totalGrossAmount: z.number().nullable().optional(),
  /** A collection of jobs/items of work that the works order should fulfill */
  items: z
    .array(
      /** Representation of a works order item */
      z.object({
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
      }),
    )
    .nullable()
    .optional(),
  /** App specific metadata that has been set against the works order */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the works order. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
