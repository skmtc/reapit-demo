import { z } from 'zod'

/** Represents an unmapped attribute type */
export const unmappedAttributeModel =
  /** Represents an unmapped attribute type */
  z.object({
    /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
    type: z.string().optional(),
    /** The value associated to the unmapped type */ value: z.string().optional(),
  })
/** Represents an unmapped attribute type */
export type UnmappedAttributeModel =
  /** Represents an unmapped attribute type */
  {
    type?: /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */ string | undefined
    value?: /** The value associated to the unmapped type */ string | undefined
  }
