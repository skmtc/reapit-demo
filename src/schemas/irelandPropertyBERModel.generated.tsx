import { z } from 'zod'

/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export const irelandPropertyBERModel = /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
z.object({exempt: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
z.boolean().optional(), rating: /** The BER rating of the property */
z.string().optional(), refNumber: /** The BER certificate reference number */
z.string().optional(), epi: /** The energy performance indicator for the property */
z.string().optional()});
/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export type IrelandPropertyBERModel = /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
{exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
boolean | undefined, rating?: /** The BER rating of the property */
string | undefined, refNumber?: /** The BER certificate reference number */
string | undefined, epi?: /** The energy performance indicator for the property */
string | undefined};