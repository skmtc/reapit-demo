import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type CreditModel =
  /** Representation of an individual credit */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** Unique identifier of the credit */ string | null | undefined
    created?: /** The date and time when the credit was created */ string | null | undefined
    modified?: /** The date and time when the credit was last modified */ string | null | undefined
    negotiatorId?: /** Unique identifier of the negotiator associated with the credit */ string | null | undefined
    propertyId?: /** Unique identifier of the property associated with the credit */ string | null | undefined
    invoiceId?: /** Unique identifier of the invoice associated with the credit */ string | null | undefined
    description?: /** Description of the credit */ string | null | undefined
    date?: /** The date of the credit */ string | null | undefined
    netAmount?: /** The net amount due for the credit in the system base currency */ number | null | undefined
    vatAmount?: /** The amount of VAT due for the credit in the system base currency */ number | null | undefined
  }
/** Representation of an individual credit */
export const creditModel =
  /** Representation of an individual credit */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** Unique identifier of the credit */ id: z.string().optional().nullable(),
    /** The date and time when the credit was created */ created: z.string().optional().nullable(),
    /** The date and time when the credit was last modified */ modified: z.string().optional().nullable(),
    /** Unique identifier of the negotiator associated with the credit */
    negotiatorId: z.string().optional().nullable(),
    /** Unique identifier of the property associated with the credit */ propertyId: z.string().optional().nullable(),
    /** Unique identifier of the invoice associated with the credit */ invoiceId: z.string().optional().nullable(),
    /** Description of the credit */ description: z.string().optional().nullable(),
    /** The date of the credit */ date: z.string().optional().nullable(),
    /** The net amount due for the credit in the system base currency */ netAmount: z.number().optional().nullable(),
    /** The amount of VAT due for the credit in the system base currency */ vatAmount: z.number().optional().nullable(),
  })
