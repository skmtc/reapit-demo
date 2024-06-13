import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type ChargeModel =
  /** Representation of an invoice charge */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the charge */ string | null | undefined
    created?: /** The date and time when the charge was created */ string | null | undefined
    modified?: /** The date and time when the charge was last modified */ string | null | undefined
    type?: /** The type of charge (charge/advertising) */ string | null | undefined
    invoiceId?:
      | /** The unique identifier of the invoice with which this charge is associated */
      string
      | null
      | undefined
    propertyId?:
      | /** The unique identifier of the property with which this charge is associated */
      string
      | null
      | undefined
    negotiatorId?:
      | /** The unique identifier of the negotiator with which this charge is associated */
      string
      | null
      | undefined
    vatCode?: /** The code representing the VAT applied to this charge */ string | null | undefined
    description?: /** Description of the charge */ string | null | undefined
    netAmount?: /** The net amount */ number | null | undefined
    vatAmount?: /** The VAT amount */ number | null | undefined
  }
/** Representation of an invoice charge */
export const chargeModel =
  /** Representation of an invoice charge */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the charge */ id: z.string().optional().nullable(),
    /** The date and time when the charge was created */ created: z.string().optional().nullable(),
    /** The date and time when the charge was last modified */ modified: z.string().optional().nullable(),
    /** The type of charge (charge/advertising) */ type: z.string().optional().nullable(),
    /** The unique identifier of the invoice with which this charge is associated */
    invoiceId: z.string().optional().nullable(),
    /** The unique identifier of the property with which this charge is associated */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator with which this charge is associated */
    negotiatorId: z.string().optional().nullable(),
    /** The code representing the VAT applied to this charge */ vatCode: z.string().optional().nullable(),
    /** Description of the charge */ description: z.string().optional().nullable(),
    /** The net amount */ netAmount: z.number().optional().nullable(),
    /** The VAT amount */ vatAmount: z.number().optional().nullable(),
  })
