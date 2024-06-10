import { z } from 'zod'

/** Representation of EPC statistics */
export const propertyEpcModel =
  /** Representation of EPC statistics */
  z.object({
    /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
    exempt: z.boolean().optional().nullable(),
    /** The current energy efficiency rating */ eer: z.number().int().optional().nullable(),
    /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
    eerRating: z.string().optional().nullable(),
    /** The potential energy efficiency rating */ eerPotential: z.number().int().optional().nullable(),
    /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
    eerPotentialRating: z.string().optional().nullable(),
    /** The current environmental impact rating */ eir: z.number().int().optional().nullable(),
    /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
    eirRating: z.string().optional().nullable(),
    /** The potential environmental impact rating */ eirPotential: z.number().int().optional().nullable(),
    /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
    eirPotentialRating: z.string().optional().nullable(),
    /** The URL to access the full EPC document */ fullDocumentUrl: z.string().optional().nullable(),
    /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().optional().nullable(),
  })
/** Representation of EPC statistics */
export type PropertyEpcModel =
  /** Representation of EPC statistics */
  {
    exempt?:
      | /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
      boolean
      | null
      | undefined
    eer?: /** The current energy efficiency rating */ number | null | undefined
    eerRating?:
      | /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
      string
      | null
      | undefined
    eerPotential?: /** The potential energy efficiency rating */ number | null | undefined
    eerPotentialRating?:
      | /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
      string
      | null
      | undefined
    eir?: /** The current environmental impact rating */ number | null | undefined
    eirRating?:
      | /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
      string
      | null
      | undefined
    eirPotential?: /** The potential environmental impact rating */ number | null | undefined
    eirPotentialRating?:
      | /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
      string
      | null
      | undefined
    fullDocumentUrl?: /** The URL to access the full EPC document */ string | null | undefined
    firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | null | undefined
  }
