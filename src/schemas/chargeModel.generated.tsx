import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an invoice charge */
export const chargeModel = /** Representation of an invoice charge */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the charge */
z.string().optional(), created: /** The date and time when the charge was created */
z.string().optional(), modified: /** The date and time when the charge was last modified */
z.string().optional(), type: /** The type of charge (charge/advertising) */
z.string().optional(), invoiceId: /** The unique identifier of the invoice with which this charge is associated */
z.string().optional(), propertyId: /** The unique identifier of the property with which this charge is associated */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator with which this charge is associated */
z.string().optional(), vatCode: /** The code representing the VAT applied to this charge */
z.string().optional(), description: /** Description of the charge */
z.string().optional(), netAmount: /** The net amount */
z.number().optional(), vatAmount: /** The VAT amount */
z.number().optional()});
/** Representation of an invoice charge */
export type ChargeModel = /** Representation of an invoice charge */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the charge */
string | undefined, created?: /** The date and time when the charge was created */
string | undefined, modified?: /** The date and time when the charge was last modified */
string | undefined, type?: /** The type of charge (charge/advertising) */
string | undefined, invoiceId?: /** The unique identifier of the invoice with which this charge is associated */
string | undefined, propertyId?: /** The unique identifier of the property with which this charge is associated */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator with which this charge is associated */
string | undefined, vatCode?: /** The code representing the VAT applied to this charge */
string | undefined, description?: /** Description of the charge */
string | undefined, netAmount?: /** The net amount */
number | undefined, vatAmount?: /** The VAT amount */
number | undefined};