import { z } from 'zod'

/** Represents an unmapped requirement type */
export const unmappedRequirementModel =
  /** Represents an unmapped requirement type */
  z.object({
    /** The type of unmapped requirement */ type: z.string().optional().nullable(),
    /** The value associated to the unmapped type */ value: z.string().optional().nullable(),
  })
/** Represents an unmapped requirement type */
export type UnmappedRequirementModel =
  /** Represents an unmapped requirement type */
  {
    type?: /** The type of unmapped requirement */ string | null | undefined
    value?: /** The value associated to the unmapped type */ string | null | undefined
  }
