import { z } from 'zod'

/** Representation of additional contact details */
export const additionalContactDetailModel = /** Representation of additional contact details */
z.object({type: /** The type of contact detail */
z.string().optional(), value: /** The contact detail */
z.string().optional()});
/** Representation of additional contact details */
export type AdditionalContactDetailModel = /** Representation of additional contact details */
{type?: /** The type of contact detail */
string | undefined, value?: /** The contact detail */
string | undefined};