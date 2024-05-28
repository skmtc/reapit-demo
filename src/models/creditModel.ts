import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of an individual credit */
export const creditModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** Unique identifier of the credit */ id: z.string().nullable().optional(),
  /** The date and time when the credit was created */ created: z.string().nullable().optional(),
  /** The date and time when the credit was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the credit */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the credit */ propertyId: z.string().nullable().optional(),
  /** Unique identifier of the invoice associated with the credit */ invoiceId: z.string().nullable().optional(),
  /** Description of the credit */ description: z.string().nullable().optional(),
  /** The date of the credit */ date: z.string().nullable().optional(),
  /** The net amount due for the credit in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the credit in the system base currency */ vatAmount: z.number().nullable().optional(),
})
/** Representation of an individual credit */
export type CreditModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** Unique identifier of the credit */ string | undefined
  created?: /** The date and time when the credit was created */ string | undefined
  modified?: /** The date and time when the credit was last modified */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the credit */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the credit */ string | undefined
  invoiceId?: /** Unique identifier of the invoice associated with the credit */ string | undefined
  description?: /** Description of the credit */ string | undefined
  date?: /** The date of the credit */ string | undefined
  netAmount?: /** The net amount due for the credit in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the credit in the system base currency */ number | undefined
}
