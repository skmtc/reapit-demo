import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of an individual invoice */
export const invoiceModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** Unique identifier of the invoice */ id: z.string().nullable().optional(),
  /** The date and time when the invoice was created */ created: z.string().nullable().optional(),
  /** The date and time when the invoice was last modified */ modified: z.string().nullable().optional(),
  /** The invoice reference */ reference: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the invoice */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the invoice */ propertyId: z.string().nullable().optional(),
  /** Description of the invoice */ description: z.string().nullable().optional(),
  /** The status of the invoice */ status: z.string().nullable().optional(),
  /** The date of the invoice */ date: z.string().nullable().optional(),
  /** The due date of the invoice */ dueDate: z.string().nullable().optional(),
  /** Flag indicating whether the invoice has been raised */ isRaised: z.boolean().nullable().optional(),
  /** The net amount due for the invoice in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the invoice in the system base currency */ vatAmount: z.number().nullable().optional(),
  /** The value of the invoice outstanding in the system base currency */
  outstandingAmount: z.number().nullable().optional(),
})
/** Representation of an individual invoice */
export type InvoiceModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** Unique identifier of the invoice */ string | undefined
  created?: /** The date and time when the invoice was created */ string | undefined
  modified?: /** The date and time when the invoice was last modified */ string | undefined
  reference?: /** The invoice reference */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the invoice */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the invoice */ string | undefined
  description?: /** Description of the invoice */ string | undefined
  status?: /** The status of the invoice */ string | undefined
  date?: /** The date of the invoice */ string | undefined
  dueDate?: /** The due date of the invoice */ string | undefined
  isRaised?: /** Flag indicating whether the invoice has been raised */ boolean | undefined
  netAmount?: /** The net amount due for the invoice in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the invoice in the system base currency */ number | undefined
  outstandingAmount?: /** The value of the invoice outstanding in the system base currency */ number | undefined
}
