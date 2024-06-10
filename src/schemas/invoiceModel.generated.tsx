import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an individual invoice */
export const invoiceModel =
  /** Representation of an individual invoice */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** Unique identifier of the invoice */ id: z.string().optional().nullable(),
    /** The date and time when the invoice was created */ created: z.string().optional().nullable(),
    /** The date and time when the invoice was last modified */ modified: z.string().optional().nullable(),
    /** The invoice reference */ reference: z.string().optional().nullable(),
    /** Unique identifier of the negotiator associated with the invoice */
    negotiatorId: z.string().optional().nullable(),
    /** Unique identifier of the property associated with the invoice */ propertyId: z.string().optional().nullable(),
    /** Description of the invoice */ description: z.string().optional().nullable(),
    /** The status of the invoice */ status: z.string().optional().nullable(),
    /** The date of the invoice */ date: z.string().optional().nullable(),
    /** The due date of the invoice */ dueDate: z.string().optional().nullable(),
    /** Flag indicating whether the invoice has been raised */ isRaised: z.boolean().optional().nullable(),
    /** The net amount due for the invoice in the system base currency */ netAmount: z.number().optional().nullable(),
    /** The amount of VAT due for the invoice in the system base currency */
    vatAmount: z.number().optional().nullable(),
    /** The value of the invoice outstanding in the system base currency */
    outstandingAmount: z.number().optional().nullable(),
  })
export type InvoiceModel =
  /** Representation of an individual invoice */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** Unique identifier of the invoice */ string | null | undefined
    created?: /** The date and time when the invoice was created */ string | null | undefined
    modified?: /** The date and time when the invoice was last modified */ string | null | undefined
    reference?: /** The invoice reference */ string | null | undefined
    negotiatorId?: /** Unique identifier of the negotiator associated with the invoice */ string | null | undefined
    propertyId?: /** Unique identifier of the property associated with the invoice */ string | null | undefined
    description?: /** Description of the invoice */ string | null | undefined
    status?: /** The status of the invoice */ string | null | undefined
    date?: /** The date of the invoice */ string | null | undefined
    dueDate?: /** The due date of the invoice */ string | null | undefined
    isRaised?: /** Flag indicating whether the invoice has been raised */ boolean | null | undefined
    netAmount?: /** The net amount due for the invoice in the system base currency */ number | null | undefined
    vatAmount?: /** The amount of VAT due for the invoice in the system base currency */ number | null | undefined
    outstandingAmount?:
      | /** The value of the invoice outstanding in the system base currency */
      number
      | null
      | undefined
  }
