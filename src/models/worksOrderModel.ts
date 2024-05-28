import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { worksOrderItemModel, WorksOrderItemModel } from '@/models/worksOrderItemModel.ts'

/** Representation of a works order */
export const worksOrderModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
  items: z.array(worksOrderItemModel).nullable().optional(),
  /** App specific metadata that has been set against the works order */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the works order. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a works order */
export type WorksOrderModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the works order */ string | undefined
  created?: /** The date and time when the works order was created */ string | undefined
  modified?: /** The date and time when the works order was last modified */ string | undefined
  companyId?: /** The unique identifier of the company that has been selected to perform the work */ string | undefined
  propertyId?: /** The unique identifier of the property where the work is to be carried out */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy that the works order originated from */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that booked the works order */ string | undefined
  typeId?: /** The unique identifier of the type of work that needs to be carried out */ string | undefined
  status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  string | undefined
  description?: /** A free text description of the work required */ string | undefined
  reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */ string | undefined
  priority?: /** The priority level of the works order (low/medium/high) */ string | undefined
  booked?: /** The date when the works order was booked */ string | undefined
  required?: /** The date when the work is required to be completed by */ string | undefined
  completed?: /** The date when the work was completed */ string | undefined
  totalNetAmount?: /** The total net cost for all of the items of work to be carried out */ number | undefined
  totalVatAmount?: /** The total additional vat cost for all of the items of work to be carried out */
  number | undefined
  totalGrossAmount?: /** The total gross cost for all of the items of work to be carried out */ number | undefined
  items?: /** A collection of jobs/items of work that the works order should fulfill */
  Array<WorksOrderItemModel> | undefined
  metadata?: /** App specific metadata that has been set against the works order */
  Record<string, Record<string, never>> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the works order. Used for managing update concurrency */
  string | undefined
}
