import { z } from 'zod'

/** Representation of an individual payment */
export const paymentModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
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
