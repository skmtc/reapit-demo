import { z } from 'zod'

/** Represents an unmapped attribute type */
export const unmappedAttributeModel = /** Represents an unmapped attribute type */
z.object({type: /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
z.string().optional(), value: /** The value associated to the unmapped type */
z.string().optional()});
/** Represents an unmapped attribute type */
export type UnmappedAttributeModel = /** Represents an unmapped attribute type */
{type?: /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
string | undefined, value?: /** The value associated to the unmapped type */
string | undefined};