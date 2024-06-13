import { z } from 'zod'

/** Request body used to create a new supplier invoice */
export type CreateSupplierInvoiceModel =
  /** Request body used to create a new supplier invoice */
  {
    worksOrderId?:
      | /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
      string
      | null
      | undefined
    propertyId?:
      | /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
      string
      | null
      | undefined
    companyId?:
      | /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
      string
      | null
      | undefined
    tenancyId?:
      | /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
      string
      | null
      | undefined
    description: /** The supplier invoice work description */ string
    accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */ string
    invoiceRef: /** The invoice reference */ string
    negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
    string
    invoiceDate: /** The invoice date */ string
    dueDate?: /** The date the invoice should be paid by */ string | null | undefined
    netAmount: /** The invoice net amount */ number
    taxAmount: /** The invoice tax amount */ number
  }
export const createSupplierInvoiceModel =
  /** Request body used to create a new supplier invoice */
  z.object({
    /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
    worksOrderId: z.string().optional().nullable(),
    /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
    companyId: z.string().optional().nullable(),
    /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
    tenancyId: z.string().optional().nullable(),
    /** The supplier invoice work description */ description: z.string(),
    /** The identifier of the nominal account the supplier invoice should be attributed to */ accountId: z.string(),
    /** The invoice reference */ invoiceRef: z.string(),
    /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
    negotiatorId: z.string(),
    /** The invoice date */ invoiceDate: z.string(),
    /** The date the invoice should be paid by */ dueDate: z.string().optional().nullable(),
    /** The invoice net amount */ netAmount: z.number(),
    /** The invoice tax amount */ taxAmount: z.number(),
  })
