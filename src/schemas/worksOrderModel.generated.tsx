import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { worksOrderItemModel, WorksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'

/** Representation of a works order */
export const worksOrderModel = /** Representation of a works order */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the works order */
z.string().optional(), created: /** The date and time when the works order was created */
z.string().optional(), modified: /** The date and time when the works order was last modified */
z.string().optional(), companyId: /** The unique identifier of the company that has been selected to perform the work */
z.string().optional(), propertyId: /** The unique identifier of the property where the work is to be carried out */
z.string().optional(), tenancyId: /** The unique identifier of the tenancy that the works order originated from */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator that booked the works order */
z.string().optional(), typeId: /** The unique identifier of the type of work that needs to be carried out */
z.string().optional(), status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
z.string().optional(), description: /** A free text description of the work required */
z.string().optional(), reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */
z.string().optional(), priority: /** The priority level of the works order (low/medium/high) */
z.string().optional(), booked: /** The date when the works order was booked */
z.string().optional(), required: /** The date when the work is required to be completed by */
z.string().optional(), completed: /** The date when the work was completed */
z.string().optional(), totalNetAmount: /** The total net cost for all of the items of work to be carried out */
z.number().optional(), totalVatAmount: /** The total additional vat cost for all of the items of work to be carried out */
z.number().optional(), totalGrossAmount: /** The total gross cost for all of the items of work to be carried out */
z.number().optional(), items: /** A collection of jobs/items of work that the works order should fulfill */
z.array(worksOrderItemModel).optional(), metadata: /** App specific metadata that has been set against the works order */
z.record(z.string(), z.object({})).optional(), extrasField: /** The requested extras fields */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the works order. Used for managing update concurrency */
z.string().optional()});
/** Representation of a works order */
export type WorksOrderModel = /** Representation of a works order */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the works order */
string | undefined, created?: /** The date and time when the works order was created */
string | undefined, modified?: /** The date and time when the works order was last modified */
string | undefined, companyId?: /** The unique identifier of the company that has been selected to perform the work */
string | undefined, propertyId?: /** The unique identifier of the property where the work is to be carried out */
string | undefined, tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator that booked the works order */
string | undefined, typeId?: /** The unique identifier of the type of work that needs to be carried out */
string | undefined, status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
string | undefined, description?: /** A free text description of the work required */
string | undefined, reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */
string | undefined, priority?: /** The priority level of the works order (low/medium/high) */
string | undefined, booked?: /** The date when the works order was booked */
string | undefined, required?: /** The date when the work is required to be completed by */
string | undefined, completed?: /** The date when the work was completed */
string | undefined, totalNetAmount?: /** The total net cost for all of the items of work to be carried out */
number | undefined, totalVatAmount?: /** The total additional vat cost for all of the items of work to be carried out */
number | undefined, totalGrossAmount?: /** The total gross cost for all of the items of work to be carried out */
number | undefined, items?: /** A collection of jobs/items of work that the works order should fulfill */
Array<WorksOrderItemModel> | undefined, metadata?: /** App specific metadata that has been set against the works order */
Record<string, Record<string, never>> | undefined, extrasField?: /** The requested extras fields */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the works order. Used for managing update concurrency */
string | undefined};