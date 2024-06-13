import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type PaymentModel =
  /** Representation of an individual payment */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** Unique identifier of the payment */ string | null | undefined
    created?: /** The date and time when the payment was created */ string | null | undefined
    modified?: /** The date and time when the payment was last modified */ string | null | undefined
    negotiatorId?: /** Unique identifier of the negotiator associated with the payment */ string | null | undefined
    propertyId?: /** Unique identifier of the property associated with the payment */ string | null | undefined
    invoiceId?: /** Unique identifier of the invoice associated with the payment */ string | null | undefined
    description?: /** Description of the payment */ string | null | undefined
    type?: /** The type of payment */ string | null | undefined
    date?: /** The date of the payment */ string | null | undefined
    netAmount?: /** The net amount due for the payment in the system base currency */ number | null | undefined
    vatAmount?: /** The amount of VAT due for the payment in the system base currency */ number | null | undefined
  }
/** Representation of an individual payment */
export const paymentModel =
  /** Representation of an individual payment */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** Unique identifier of the payment */ id: z.string().optional().nullable(),
    /** The date and time when the payment was created */ created: z.string().optional().nullable(),
    /** The date and time when the payment was last modified */ modified: z.string().optional().nullable(),
    /** Unique identifier of the negotiator associated with the payment */
    negotiatorId: z.string().optional().nullable(),
    /** Unique identifier of the property associated with the payment */ propertyId: z.string().optional().nullable(),
    /** Unique identifier of the invoice associated with the payment */ invoiceId: z.string().optional().nullable(),
    /** Description of the payment */ description: z.string().optional().nullable(),
    /** The type of payment */ type: z.string().optional().nullable(),
    /** The date of the payment */ date: z.string().optional().nullable(),
    /** The net amount due for the payment in the system base currency */ netAmount: z.number().optional().nullable(),
    /** The amount of VAT due for the payment in the system base currency */
    vatAmount: z.number().optional().nullable(),
  })
