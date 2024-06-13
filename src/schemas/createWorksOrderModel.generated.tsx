import { CreateWorksOrderItemModel, createWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new works order */
export type CreateWorksOrderModel =
  /** Request body used to create a new works order */
  {
    companyId?:
      | /** The unique identifier of the company that has been selected to perform the work */
      string
      | null
      | undefined
    propertyId: /** The unique identifier of the property where the work is to be carried out */ string
    tenancyId?:
      | /** The unique identifier of the tenancy that the works order originated from */
      string
      | null
      | undefined
    negotiatorId: /** The unique identifier of the negotiator that booked the works order */ string
    typeId?: /** The unique id of the type of work that needs to be carried out */ string | null | undefined
    status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string
    description: /** A free text description of the work required */ string
    reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */ string
    priority?: /** The priority level of the works order (low/medium/high) */ string | null | undefined
    booked?: /** The date when the works order was booked */ string | null | undefined
    required?: /** The date when the work is required to be completed by */ string | null | undefined
    completed?: /** The date when the work was completed */ string | null | undefined
    items: /** Individual work items to attach to the works order */ Array<CreateWorksOrderItemModel>
    metadata?:
      | /** App specific metadata to set against the works order */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createWorksOrderModel =
  /** Request body used to create a new works order */
  z.object({
    /** The unique identifier of the company that has been selected to perform the work */
    companyId: z.string().optional().nullable(),
    /** The unique identifier of the property where the work is to be carried out */ propertyId: z.string(),
    /** The unique identifier of the tenancy that the works order originated from */
    tenancyId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that booked the works order */ negotiatorId: z.string(),
    /** The unique id of the type of work that needs to be carried out */ typeId: z.string().optional().nullable(),
    /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    status: z.string(),
    /** A free text description of the work required */ description: z.string(),
    /** The party requesting the work to be carried out (landlord/tenant/other) */ reporter: z.string(),
    /** The priority level of the works order (low/medium/high) */ priority: z.string().optional().nullable(),
    /** The date when the works order was booked */ booked: z.string().optional().nullable(),
    /** The date when the work is required to be completed by */ required: z.string().optional().nullable(),
    /** The date when the work was completed */ completed: z.string().optional().nullable(),
    /** Individual work items to attach to the works order */ items: z.array(createWorksOrderItemModel),
    /** App specific metadata to set against the works order */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
