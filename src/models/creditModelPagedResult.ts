import { z } from 'zod'

export const creditModelPagedResult = z.object({
  _embedded: z
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
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
