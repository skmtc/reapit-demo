import { z } from 'zod'

/** Represents an unmapped requirement type */
export const unmappedRequirementModel = /** Represents an unmapped requirement type */
z.object({type: /** The type of unmapped requirement */
z.string().optional(), value: /** The value associated to the unmapped type */
z.string().optional()});
/** Represents an unmapped requirement type */
export type UnmappedRequirementModel = /** Represents an unmapped requirement type */
{type?: /** The type of unmapped requirement */
string | undefined, value?: /** The value associated to the unmapped type */
string | undefined};