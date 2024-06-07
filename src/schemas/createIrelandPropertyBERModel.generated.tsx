import { z } from 'zod'

/** Request body used to set the energy performance rating information for properties in Ireland */
export const createIrelandPropertyBERModel = /** Request body used to set the energy performance rating information for properties in Ireland */
z.object({exempt: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
z.boolean().optional(), rating: /** The BER rating of the property */
z.string().optional(), refNumber: /** The BER certificate reference number */
z.string().optional(), epi: /** The energy performance indicator for the property */
z.string().optional()});
/** Request body used to set the energy performance rating information for properties in Ireland */
export type CreateIrelandPropertyBERModel = /** Request body used to set the energy performance rating information for properties in Ireland */
{exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
boolean | undefined, rating?: /** The BER rating of the property */
string | undefined, refNumber?: /** The BER certificate reference number */
string | undefined, epi?: /** The energy performance indicator for the property */
string | undefined};