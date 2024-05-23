import { z } from 'zod'

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
  /** Collection of charges associated with the invoice */
  charges: z
    .array(
      /** Representation of an invoice charge */
      z.object({
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
      }),
    )
    .nullable()
    .optional(),
  /** Collection of credits associated with the invoice */
  credits: z
    .array(
      /** Representation of an individual credit */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** Unique identifier of the credit */ id: z.string().nullable().optional(),
        /** The date and time when the credit was created */ created: z.string().nullable().optional(),
        /** The date and time when the credit was last modified */ modified: z.string().nullable().optional(),
        /** Unique identifier of the negotiator associated with the credit */
        negotiatorId: z.string().nullable().optional(),
        /** Unique identifier of the property associated with the credit */
        propertyId: z.string().nullable().optional(),
        /** Unique identifier of the invoice associated with the credit */ invoiceId: z.string().nullable().optional(),
        /** Description of the credit */ description: z.string().nullable().optional(),
        /** The date of the credit */ date: z.string().nullable().optional(),
        /** The net amount due for the credit in the system base currency */
        netAmount: z.number().nullable().optional(),
        /** The amount of VAT due for the credit in the system base currency */
        vatAmount: z.number().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** Collection of payments associated with the invoice */
  payments: z
    .array(
      /** Representation of an individual payment */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** Unique identifier of the payment */ id: z.string().nullable().optional(),
        /** The date and time when the payment was created */ created: z.string().nullable().optional(),
        /** The date and time when the payment was last modified */ modified: z.string().nullable().optional(),
        /** Unique identifier of the negotiator associated with the payment */
        negotiatorId: z.string().nullable().optional(),
        /** Unique identifier of the property associated with the payment */
        propertyId: z.string().nullable().optional(),
        /** Unique identifier of the invoice associated with the payment */ invoiceId: z.string().nullable().optional(),
        /** Description of the payment */ description: z.string().nullable().optional(),
        /** The type of payment */ type: z.string().nullable().optional(),
        /** The date of the payment */ date: z.string().nullable().optional(),
        /** The net amount due for the payment in the system base currency */
        netAmount: z.number().nullable().optional(),
        /** The amount of VAT due for the payment in the system base currency */
        vatAmount: z.number().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
})
