import { z } from 'zod'

/** Request body used to set the EPC statistic of a new property */
export const createPropertyEpcModel =
  /** Request body used to set the EPC statistic of a new property */
  z.object({
    /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
    exempt: z.boolean().optional().nullable(),
    /** The current energy efficiency rating */ eer: z.number().int().optional().nullable(),
    /** The potential energy efficiency rating */ eerPotential: z.number().int().optional().nullable(),
    /** The current environmental impact rating */ eir: z.number().int().optional().nullable(),
    /** The potential environmental impact rating */ eirPotential: z.number().int().optional().nullable(),
    /** The URL to access the full EPC document */ fullDocumentUrl: z.string().optional().nullable(),
    /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().optional().nullable(),
  })
/** Request body used to set the EPC statistic of a new property */
export type CreatePropertyEpcModel =
  /** Request body used to set the EPC statistic of a new property */
  {
    exempt?:
      | /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
      boolean
      | null
      | undefined
    eer?: /** The current energy efficiency rating */ number | null | undefined
    eerPotential?: /** The potential energy efficiency rating */ number | null | undefined
    eir?: /** The current environmental impact rating */ number | null | undefined
    eirPotential?: /** The potential environmental impact rating */ number | null | undefined
    fullDocumentUrl?: /** The URL to access the full EPC document */ string | null | undefined
    firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | null | undefined
  }
