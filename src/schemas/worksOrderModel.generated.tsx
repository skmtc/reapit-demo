import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { WorksOrderItemModel, worksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'
import { z } from 'zod'

export type WorksOrderModel =
  /** Representation of a works order */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the works order */ string | null | undefined
    created?: /** The date and time when the works order was created */ string | null | undefined
    modified?: /** The date and time when the works order was last modified */ string | null | undefined
    companyId?:
      | /** The unique identifier of the company that has been selected to perform the work */
      string
      | null
      | undefined
    propertyId?:
      | /** The unique identifier of the property where the work is to be carried out */
      string
      | null
      | undefined
    tenancyId?:
      | /** The unique identifier of the tenancy that the works order originated from */
      string
      | null
      | undefined
    negotiatorId?: /** The unique identifier of the negotiator that booked the works order */ string | null | undefined
    typeId?: /** The unique identifier of the type of work that needs to be carried out */ string | null | undefined
    status?:
      | /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
      string
      | null
      | undefined
    description?: /** A free text description of the work required */ string | null | undefined
    reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */ string | null | undefined
    priority?: /** The priority level of the works order (low/medium/high) */ string | null | undefined
    booked?: /** The date when the works order was booked */ string | null | undefined
    required?: /** The date when the work is required to be completed by */ string | null | undefined
    completed?: /** The date when the work was completed */ string | null | undefined
    totalNetAmount?: /** The total net cost for all of the items of work to be carried out */ number | null | undefined
    totalVatAmount?:
      | /** The total additional vat cost for all of the items of work to be carried out */
      number
      | null
      | undefined
    totalGrossAmount?:
      | /** The total gross cost for all of the items of work to be carried out */
      number
      | null
      | undefined
    items?:
      | /** A collection of jobs/items of work that the works order should fulfill */
      Array<WorksOrderItemModel>
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against the works order */
      Record<string, Record<string, never>>
      | null
      | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | null | undefined
    _eTag?:
      | /** The ETag for the current version of the works order. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a works order */
export const worksOrderModel =
  /** Representation of a works order */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the works order */ id: z.string().optional().nullable(),
    /** The date and time when the works order was created */ created: z.string().optional().nullable(),
    /** The date and time when the works order was last modified */ modified: z.string().optional().nullable(),
    /** The unique identifier of the company that has been selected to perform the work */
    companyId: z.string().optional().nullable(),
    /** The unique identifier of the property where the work is to be carried out */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the tenancy that the works order originated from */
    tenancyId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that booked the works order */
    negotiatorId: z.string().optional().nullable(),
    /** The unique identifier of the type of work that needs to be carried out */
    typeId: z.string().optional().nullable(),
    /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    status: z.string().optional().nullable(),
    /** A free text description of the work required */ description: z.string().optional().nullable(),
    /** The party requesting the work to be carried out (landlord/tenant/other) */
    reporter: z.string().optional().nullable(),
    /** The priority level of the works order (low/medium/high) */ priority: z.string().optional().nullable(),
    /** The date when the works order was booked */ booked: z.string().optional().nullable(),
    /** The date when the work is required to be completed by */ required: z.string().optional().nullable(),
    /** The date when the work was completed */ completed: z.string().optional().nullable(),
    /** The total net cost for all of the items of work to be carried out */
    totalNetAmount: z.number().optional().nullable(),
    /** The total additional vat cost for all of the items of work to be carried out */
    totalVatAmount: z.number().optional().nullable(),
    /** The total gross cost for all of the items of work to be carried out */
    totalGrossAmount: z.number().optional().nullable(),
    /** A collection of jobs/items of work that the works order should fulfill */
    items: z.array(worksOrderItemModel).optional().nullable(),
    /** App specific metadata that has been set against the works order */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the works order. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
