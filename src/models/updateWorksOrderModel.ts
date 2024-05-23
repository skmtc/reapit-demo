import { z } from 'zod'

/** Request body used to update an existing works order */
export const updateWorksOrderModel = z.object({
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the property where the work is to be carried out */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that booked the works order */
  negotiatorId: z.string().nullable().optional(),
  /** The unique id of the type of work that needs to be carried out */ typeId: z.string().nullable().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string().nullable().optional(),
  /** A free text description of the work required */ description: z.string().nullable().optional(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */
  reporter: z.string().nullable().optional(),
  /** The priority level of the works order (low/medium/high) */ priority: z.string().nullable().optional(),
  /** The date when the works order was booked */ booked: z.string().nullable().optional(),
  /** The date when the work is required to be completed by */ required: z.string().nullable().optional(),
  /** The date when the work was completed */ completed: z.string().nullable().optional(),
  /** App specific metadata to set against the works order */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
