import { z } from 'zod'

/** Request body used to create a new supplier invoice */
export const createSupplierInvoiceModel = /** Request body used to create a new supplier invoice */
z.object({worksOrderId: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
z.string().optional(), propertyId: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
z.string().optional(), companyId: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
z.string().optional(), tenancyId: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
z.string().optional(), description: /** The supplier invoice work description */
z.string(), accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */
z.string(), invoiceRef: /** The invoice reference */
z.string(), negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
z.string(), invoiceDate: /** The invoice date */
z.string(), dueDate: /** The date the invoice should be paid by */
z.string().optional(), netAmount: /** The invoice net amount */
z.number(), taxAmount: /** The invoice tax amount */
z.number()});
/** Request body used to create a new supplier invoice */
export type CreateSupplierInvoiceModel = /** Request body used to create a new supplier invoice */
{worksOrderId?: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
string | undefined, propertyId?: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
string | undefined, companyId?: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
string | undefined, tenancyId?: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
string | undefined, description: /** The supplier invoice work description */
string, accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */
string, invoiceRef: /** The invoice reference */
string, negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
string, invoiceDate: /** The invoice date */
string, dueDate?: /** The date the invoice should be paid by */
string | undefined, netAmount: /** The invoice net amount */
number, taxAmount: /** The invoice tax amount */
number};