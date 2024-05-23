import { z } from 'zod'

/** Request body used to set the EPC statistic of a new property */
export const createPropertyEpcModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  exempt: z.boolean().nullable().optional(),
  /** The current energy efficiency rating */ eer: z.number().int().nullable().optional(),
  /** The potential energy efficiency rating */ eerPotential: z.number().int().nullable().optional(),
  /** The current environmental impact rating */ eir: z.number().int().nullable().optional(),
  /** The potential environmental impact rating */ eirPotential: z.number().int().nullable().optional(),
  /** The URL to access the full EPC document */ fullDocumentUrl: z.string().nullable().optional(),
  /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().nullable().optional(),
})
