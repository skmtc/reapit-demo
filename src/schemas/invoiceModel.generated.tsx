import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of an individual invoice */
export const invoiceModel = /** Representation of an individual invoice */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** Unique identifier of the invoice */
z.string().optional(), created: /** The date and time when the invoice was created */
z.string().optional(), modified: /** The date and time when the invoice was last modified */
z.string().optional(), reference: /** The invoice reference */
z.string().optional(), negotiatorId: /** Unique identifier of the negotiator associated with the invoice */
z.string().optional(), propertyId: /** Unique identifier of the property associated with the invoice */
z.string().optional(), description: /** Description of the invoice */
z.string().optional(), status: /** The status of the invoice */
z.string().optional(), date: /** The date of the invoice */
z.string().optional(), dueDate: /** The due date of the invoice */
z.string().optional(), isRaised: /** Flag indicating whether the invoice has been raised */
z.boolean().optional(), netAmount: /** The net amount due for the invoice in the system base currency */
z.number().optional(), vatAmount: /** The amount of VAT due for the invoice in the system base currency */
z.number().optional(), outstandingAmount: /** The value of the invoice outstanding in the system base currency */
z.number().optional()});
/** Representation of an individual invoice */
export type InvoiceModel = /** Representation of an individual invoice */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** Unique identifier of the invoice */
string | undefined, created?: /** The date and time when the invoice was created */
string | undefined, modified?: /** The date and time when the invoice was last modified */
string | undefined, reference?: /** The invoice reference */
string | undefined, negotiatorId?: /** Unique identifier of the negotiator associated with the invoice */
string | undefined, propertyId?: /** Unique identifier of the property associated with the invoice */
string | undefined, description?: /** Description of the invoice */
string | undefined, status?: /** The status of the invoice */
string | undefined, date?: /** The date of the invoice */
string | undefined, dueDate?: /** The due date of the invoice */
string | undefined, isRaised?: /** Flag indicating whether the invoice has been raised */
boolean | undefined, netAmount?: /** The net amount due for the invoice in the system base currency */
number | undefined, vatAmount?: /** The amount of VAT due for the invoice in the system base currency */
number | undefined, outstandingAmount?: /** The value of the invoice outstanding in the system base currency */
number | undefined};