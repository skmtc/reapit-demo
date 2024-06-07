import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an individual credit */
export const creditModel = /** Representation of an individual credit */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** Unique identifier of the credit */
z.string().optional(), created: /** The date and time when the credit was created */
z.string().optional(), modified: /** The date and time when the credit was last modified */
z.string().optional(), negotiatorId: /** Unique identifier of the negotiator associated with the credit */
z.string().optional(), propertyId: /** Unique identifier of the property associated with the credit */
z.string().optional(), invoiceId: /** Unique identifier of the invoice associated with the credit */
z.string().optional(), description: /** Description of the credit */
z.string().optional(), date: /** The date of the credit */
z.string().optional(), netAmount: /** The net amount due for the credit in the system base currency */
z.number().optional(), vatAmount: /** The amount of VAT due for the credit in the system base currency */
z.number().optional()});
/** Representation of an individual credit */
export type CreditModel = /** Representation of an individual credit */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** Unique identifier of the credit */
string | undefined, created?: /** The date and time when the credit was created */
string | undefined, modified?: /** The date and time when the credit was last modified */
string | undefined, negotiatorId?: /** Unique identifier of the negotiator associated with the credit */
string | undefined, propertyId?: /** Unique identifier of the property associated with the credit */
string | undefined, invoiceId?: /** Unique identifier of the invoice associated with the credit */
string | undefined, description?: /** Description of the credit */
string | undefined, date?: /** The date of the credit */
string | undefined, netAmount?: /** The net amount due for the credit in the system base currency */
number | undefined, vatAmount?: /** The amount of VAT due for the credit in the system base currency */
number | undefined};