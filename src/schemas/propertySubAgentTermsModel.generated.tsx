import { z } from 'zod'

/** Representation of the sub agent terms */
export const propertySubAgentTermsModel = /** Representation of the sub agent terms */
z.object({feeAvailable: /** A flag denoting whether or not fee is available */
z.boolean().optional(), type: /** The type of fee (percent/fixed/callForFees) */
z.string().optional(), amount: /** The fee amount */
z.number().optional()});
/** Representation of the sub agent terms */
export type PropertySubAgentTermsModel = /** Representation of the sub agent terms */
{feeAvailable?: /** A flag denoting whether or not fee is available */
boolean | undefined, type?: /** The type of fee (percent/fixed/callForFees) */
string | undefined, amount?: /** The fee amount */
number | undefined};