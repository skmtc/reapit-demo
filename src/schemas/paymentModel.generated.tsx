import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an individual payment */
export const paymentModel = /** Representation of an individual payment */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** Unique identifier of the payment */
z.string().optional(), created: /** The date and time when the payment was created */
z.string().optional(), modified: /** The date and time when the payment was last modified */
z.string().optional(), negotiatorId: /** Unique identifier of the negotiator associated with the payment */
z.string().optional(), propertyId: /** Unique identifier of the property associated with the payment */
z.string().optional(), invoiceId: /** Unique identifier of the invoice associated with the payment */
z.string().optional(), description: /** Description of the payment */
z.string().optional(), type: /** The type of payment */
z.string().optional(), date: /** The date of the payment */
z.string().optional(), netAmount: /** The net amount due for the payment in the system base currency */
z.number().optional(), vatAmount: /** The amount of VAT due for the payment in the system base currency */
z.number().optional()});
/** Representation of an individual payment */
export type PaymentModel = /** Representation of an individual payment */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** Unique identifier of the payment */
string | undefined, created?: /** The date and time when the payment was created */
string | undefined, modified?: /** The date and time when the payment was last modified */
string | undefined, negotiatorId?: /** Unique identifier of the negotiator associated with the payment */
string | undefined, propertyId?: /** Unique identifier of the property associated with the payment */
string | undefined, invoiceId?: /** Unique identifier of the invoice associated with the payment */
string | undefined, description?: /** Description of the payment */
string | undefined, type?: /** The type of payment */
string | undefined, date?: /** The date of the payment */
string | undefined, netAmount?: /** The net amount due for the payment in the system base currency */
number | undefined, vatAmount?: /** The amount of VAT due for the payment in the system base currency */
number | undefined};