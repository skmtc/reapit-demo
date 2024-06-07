import { z } from 'zod'

/** Representation of EPC statistics */
export const propertyEpcModel = /** Representation of EPC statistics */
z.object({exempt: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
z.boolean().optional(), eer: /** The current energy efficiency rating */
z.number().int().optional(), eerRating: /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
z.string().optional(), eerPotential: /** The potential energy efficiency rating */
z.number().int().optional(), eerPotentialRating: /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
z.string().optional(), eir: /** The current environmental impact rating */
z.number().int().optional(), eirRating: /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
z.string().optional(), eirPotential: /** The potential environmental impact rating */
z.number().int().optional(), eirPotentialRating: /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
z.string().optional(), fullDocumentUrl: /** The URL to access the full EPC document */
z.string().optional(), firstPageDocumentUrl: /** The URL to access the first page of the EPC document */
z.string().optional()});
/** Representation of EPC statistics */
export type PropertyEpcModel = /** Representation of EPC statistics */
{exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
boolean | undefined, eer?: /** The current energy efficiency rating */
number | undefined, eerRating?: /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
string | undefined, eerPotential?: /** The potential energy efficiency rating */
number | undefined, eerPotentialRating?: /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
string | undefined, eir?: /** The current environmental impact rating */
number | undefined, eirRating?: /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
string | undefined, eirPotential?: /** The potential environmental impact rating */
number | undefined, eirPotentialRating?: /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
string | undefined, fullDocumentUrl?: /** The URL to access the full EPC document */
string | undefined, firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */
string | undefined};