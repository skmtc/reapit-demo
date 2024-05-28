import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of an individual payment */
export const paymentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** Unique identifier of the payment */ id: z.string().nullable().optional(),
  /** The date and time when the payment was created */ created: z.string().nullable().optional(),
  /** The date and time when the payment was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the payment */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the payment */ propertyId: z.string().nullable().optional(),
  /** Unique identifier of the invoice associated with the payment */ invoiceId: z.string().nullable().optional(),
  /** Description of the payment */ description: z.string().nullable().optional(),
  /** The type of payment */ type: z.string().nullable().optional(),
  /** The date of the payment */ date: z.string().nullable().optional(),
  /** The net amount due for the payment in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the payment in the system base currency */ vatAmount: z.number().nullable().optional(),
})
/** Representation of an individual payment */
export type PaymentModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** Unique identifier of the payment */ string | undefined
  created?: /** The date and time when the payment was created */ string | undefined
  modified?: /** The date and time when the payment was last modified */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the payment */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the payment */ string | undefined
  invoiceId?: /** Unique identifier of the invoice associated with the payment */ string | undefined
  description?: /** Description of the payment */ string | undefined
  type?: /** The type of payment */ string | undefined
  date?: /** The date of the payment */ string | undefined
  netAmount?: /** The net amount due for the payment in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the payment in the system base currency */ number | undefined
}
