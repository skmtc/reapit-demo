import { z } from 'zod'

export const invoiceModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual invoice */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** Unique identifier of the invoice */ id: z.string().nullable().optional(),
        /** The date and time when the invoice was created */ created: z.string().nullable().optional(),
        /** The date and time when the invoice was last modified */ modified: z.string().nullable().optional(),
        /** The invoice reference */ reference: z.string().nullable().optional(),
        /** Unique identifier of the negotiator associated with the invoice */
        negotiatorId: z.string().nullable().optional(),
        /** Unique identifier of the property associated with the invoice */
        propertyId: z.string().nullable().optional(),
        /** Description of the invoice */ description: z.string().nullable().optional(),
        /** The status of the invoice */ status: z.string().nullable().optional(),
        /** The date of the invoice */ date: z.string().nullable().optional(),
        /** The due date of the invoice */ dueDate: z.string().nullable().optional(),
        /** Flag indicating whether the invoice has been raised */ isRaised: z.boolean().nullable().optional(),
        /** The net amount due for the invoice in the system base currency */
        netAmount: z.number().nullable().optional(),
        /** The amount of VAT due for the invoice in the system base currency */
        vatAmount: z.number().nullable().optional(),
        /** The value of the invoice outstanding in the system base currency */
        outstandingAmount: z.number().nullable().optional(),
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
