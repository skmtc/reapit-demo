import { z } from 'zod'
import { createWorksOrderItemModel, CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'

/** Request body used to create a new works order */
export const createWorksOrderModel = /** Request body used to create a new works order */
z.object({companyId: /** The unique identifier of the company that has been selected to perform the work */
z.string().optional(), propertyId: /** The unique identifier of the property where the work is to be carried out */
z.string(), tenancyId: /** The unique identifier of the tenancy that the works order originated from */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator that booked the works order */
z.string(), typeId: /** The unique id of the type of work that needs to be carried out */
z.string().optional(), status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
z.string(), description: /** A free text description of the work required */
z.string(), reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */
z.string(), priority: /** The priority level of the works order (low/medium/high) */
z.string().optional(), booked: /** The date when the works order was booked */
z.string().optional(), required: /** The date when the work is required to be completed by */
z.string().optional(), completed: /** The date when the work was completed */
z.string().optional(), items: /** Individual work items to attach to the works order */
z.array(createWorksOrderItemModel), metadata: /** App specific metadata to set against the works order */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new works order */
export type CreateWorksOrderModel = /** Request body used to create a new works order */
{companyId?: /** The unique identifier of the company that has been selected to perform the work */
string | undefined, propertyId: /** The unique identifier of the property where the work is to be carried out */
string, tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
string | undefined, negotiatorId: /** The unique identifier of the negotiator that booked the works order */
string, typeId?: /** The unique id of the type of work that needs to be carried out */
string | undefined, status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
string, description: /** A free text description of the work required */
string, reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */
string, priority?: /** The priority level of the works order (low/medium/high) */
string | undefined, booked?: /** The date when the works order was booked */
string | undefined, required?: /** The date when the work is required to be completed by */
string | undefined, completed?: /** The date when the work was completed */
string | undefined, items: /** Individual work items to attach to the works order */
Array<CreateWorksOrderItemModel>, metadata?: /** App specific metadata to set against the works order */
Record<string, Record<string, never>> | undefined};