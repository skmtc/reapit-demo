import { z } from 'zod'

/** Representation of EPC statistics */
export const propertyEpcModel =
  /** Representation of EPC statistics */
  z.object({
    /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
    exempt: z.boolean().optional(),
    /** The current energy efficiency rating */ eer: z.number().int().optional(),
    /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
    eerRating: z.string().optional(),
    /** The potential energy efficiency rating */ eerPotential: z.number().int().optional(),
    /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
    eerPotentialRating: z.string().optional(),
    /** The current environmental impact rating */ eir: z.number().int().optional(),
    /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
    eirRating: z.string().optional(),
    /** The potential environmental impact rating */ eirPotential: z.number().int().optional(),
    /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
    eirPotentialRating: z.string().optional(),
    /** The URL to access the full EPC document */ fullDocumentUrl: z.string().optional(),
    /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().optional(),
  })
/** Representation of EPC statistics */
export type PropertyEpcModel =
  /** Representation of EPC statistics */
  {
    exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
    boolean | undefined
    eer?: /** The current energy efficiency rating */ number | undefined
    eerRating?: /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
    string | undefined
    eerPotential?: /** The potential energy efficiency rating */ number | undefined
    eerPotentialRating?: /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
    string | undefined
    eir?: /** The current environmental impact rating */ number | undefined
    eirRating?: /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
    string | undefined
    eirPotential?: /** The potential environmental impact rating */ number | undefined
    eirPotentialRating?: /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
    string | undefined
    fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
    firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
  }
