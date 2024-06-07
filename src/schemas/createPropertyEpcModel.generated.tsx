import { z } from 'zod'

/** Request body used to set the EPC statistic of a new property */
export const createPropertyEpcModel = /** Request body used to set the EPC statistic of a new property */
z.object({exempt: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
z.boolean().optional(), eer: /** The current energy efficiency rating */
z.number().int().optional(), eerPotential: /** The potential energy efficiency rating */
z.number().int().optional(), eir: /** The current environmental impact rating */
z.number().int().optional(), eirPotential: /** The potential environmental impact rating */
z.number().int().optional(), fullDocumentUrl: /** The URL to access the full EPC document */
z.string().optional(), firstPageDocumentUrl: /** The URL to access the first page of the EPC document */
z.string().optional()});
/** Request body used to set the EPC statistic of a new property */
export type CreatePropertyEpcModel = /** Request body used to set the EPC statistic of a new property */
{exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
boolean | undefined, eer?: /** The current energy efficiency rating */
number | undefined, eerPotential?: /** The potential energy efficiency rating */
number | undefined, eir?: /** The current environmental impact rating */
number | undefined, eirPotential?: /** The potential environmental impact rating */
number | undefined, fullDocumentUrl?: /** The URL to access the full EPC document */
string | undefined, firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */
string | undefined};