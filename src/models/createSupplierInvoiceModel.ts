import { z } from 'zod'

/** Request body used to create a new supplier invoice */
export const createSupplierInvoiceModel = z.object({
  /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
  worksOrderId: z.string().nullable().optional(),
  /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
  tenancyId: z.string().nullable().optional(),
  /** The supplier invoice work description */ description: z.string(),
  /** The identifier of the nominal account the supplier invoice should be attributed to */ accountId: z.string(),
  /** The invoice reference */ invoiceRef: z.string(),
  /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
  negotiatorId: z.string(),
  /** The invoice date */ invoiceDate: z.string(),
  /** The date the invoice should be paid by */ dueDate: z.string().nullable().optional(),
  /** The invoice net amount */ netAmount: z.number(),
  /** The invoice tax amount */ taxAmount: z.number(),
})
