import { z } from 'zod'

/** Representation of an invoice charge */
export const chargeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the charge */ id: z.string().nullable().optional(),
  /** The date and time when the charge was created */ created: z.string().nullable().optional(),
  /** The date and time when the charge was last modified */ modified: z.string().nullable().optional(),
  /** The type of charge (charge/advertising) */ type: z.string().nullable().optional(),
  /** The unique identifier of the invoice with which this charge is associated */
  invoiceId: z.string().nullable().optional(),
  /** The unique identifier of the property with which this charge is associated */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator with which this charge is associated */
  negotiatorId: z.string().nullable().optional(),
  /** The code representing the VAT applied to this charge */ vatCode: z.string().nullable().optional(),
  /** Description of the charge */ description: z.string().nullable().optional(),
  /** The net amount */ netAmount: z.number().nullable().optional(),
  /** The VAT amount */ vatAmount: z.number().nullable().optional(),
})
