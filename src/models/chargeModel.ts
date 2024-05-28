import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of an invoice charge */
export const chargeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
/** Representation of an invoice charge */
export type ChargeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the charge */ string | undefined
  created?: /** The date and time when the charge was created */ string | undefined
  modified?: /** The date and time when the charge was last modified */ string | undefined
  type?: /** The type of charge (charge/advertising) */ string | undefined
  invoiceId?: /** The unique identifier of the invoice with which this charge is associated */ string | undefined
  propertyId?: /** The unique identifier of the property with which this charge is associated */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator with which this charge is associated */ string | undefined
  vatCode?: /** The code representing the VAT applied to this charge */ string | undefined
  description?: /** Description of the charge */ string | undefined
  netAmount?: /** The net amount */ number | undefined
  vatAmount?: /** The VAT amount */ number | undefined
}
