import { z } from 'zod'

/** Represents an unmapped attribute type */
export const unmappedAttributeModel = z.object({
  /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
  type: z.string().nullable().optional(),
  /** The value associated to the unmapped type */ value: z.string().nullable().optional(),
})
/** Represents an unmapped attribute type */
export type UnmappedAttributeModel = {
  type?: /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */ string | undefined
  value?: /** The value associated to the unmapped type */ string | undefined
}
