import { z } from 'zod'
import { chargeModel } from '@/models/chargeModel.ts'
import { creditModel } from '@/models/creditModel.ts'
import { paymentModel } from '@/models/paymentModel.ts'
import { linkModel } from '@/models/linkModel.ts'

/** Detailed representation of an individual invoice */
export const invoiceDetailModel = z.object({
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
  /** Collection of charges associated with the invoice */ charges: z.array(chargeModel).nullable().optional(),
  /** Collection of credits associated with the invoice */ credits: z.array(creditModel).nullable().optional(),
  /** Collection of payments associated with the invoice */ payments: z.array(paymentModel).nullable().optional(),
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
})
