import { z } from 'zod'

/** Represents an unmapped requirement type */
export const unmappedRequirementModel = z.object({
  /** The type of unmapped requirement */ type: z.string().nullable().optional(),
  /** The value associated to the unmapped type */ value: z.string().nullable().optional(),
})
