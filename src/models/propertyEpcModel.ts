import { z } from 'zod'

/** Representation of EPC statistics */
export const propertyEpcModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  exempt: z.boolean().nullable().optional(),
  /** The current energy efficiency rating */ eer: z.number().int().nullable().optional(),
  /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
  eerRating: z.string().nullable().optional(),
  /** The potential energy efficiency rating */ eerPotential: z.number().int().nullable().optional(),
  /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
  eerPotentialRating: z.string().nullable().optional(),
  /** The current environmental impact rating */ eir: z.number().int().nullable().optional(),
  /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
  eirRating: z.string().nullable().optional(),
  /** The potential environmental impact rating */ eirPotential: z.number().int().nullable().optional(),
  /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
  eirPotentialRating: z.string().nullable().optional(),
  /** The URL to access the full EPC document */ fullDocumentUrl: z.string().nullable().optional(),
  /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().nullable().optional(),
})
