import { z } from 'zod'
import { createWorksOrderItemModel, CreateWorksOrderItemModel } from '@/models/createWorksOrderItemModel.ts'

/** Request body used to create a new works order */
export const createWorksOrderModel = z.object({
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the property where the work is to be carried out */ propertyId: z.string(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that booked the works order */ negotiatorId: z.string(),
  /** The unique id of the type of work that needs to be carried out */ typeId: z.string().nullable().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string(),
  /** A free text description of the work required */ description: z.string(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */ reporter: z.string(),
  /** The priority level of the works order (low/medium/high) */ priority: z.string().nullable().optional(),
  /** The date when the works order was booked */ booked: z.string().nullable().optional(),
  /** The date when the work is required to be completed by */ required: z.string().nullable().optional(),
  /** The date when the work was completed */ completed: z.string().nullable().optional(),
  /** Individual work items to attach to the works order */ items: z.array(createWorksOrderItemModel),
  /** App specific metadata to set against the works order */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new works order */
export type CreateWorksOrderModel = {
  companyId?: /** The unique identifier of the company that has been selected to perform the work */ string | undefined
  propertyId: /** The unique identifier of the property where the work is to be carried out */ string
  tenancyId?: /** The unique identifier of the tenancy that the works order originated from */ string | undefined
  negotiatorId: /** The unique identifier of the negotiator that booked the works order */ string
  typeId?: /** The unique id of the type of work that needs to be carried out */ string | undefined
  status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  string
  description: /** A free text description of the work required */ string
  reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */ string
  priority?: /** The priority level of the works order (low/medium/high) */ string | undefined
  booked?: /** The date when the works order was booked */ string | undefined
  required?: /** The date when the work is required to be completed by */ string | undefined
  completed?: /** The date when the work was completed */ string | undefined
  items: /** Individual work items to attach to the works order */ Array<CreateWorksOrderItemModel>
  metadata?: /** App specific metadata to set against the works order */
  Record<string, Record<string, never>> | undefined
}
