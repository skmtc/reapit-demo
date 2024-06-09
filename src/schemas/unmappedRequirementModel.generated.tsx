import { z } from 'zod'

/** Represents an unmapped requirement type */
export const unmappedRequirementModel =
  /** Represents an unmapped requirement type */
  z.object({
    /** The type of unmapped requirement */ type: z.string().optional(),
    /** The value associated to the unmapped type */ value: z.string().optional(),
  })
/** Represents an unmapped requirement type */
export type UnmappedRequirementModel =
  /** Represents an unmapped requirement type */
  {
    type?: /** The type of unmapped requirement */ string | undefined
    value?: /** The value associated to the unmapped type */ string | undefined
  }
