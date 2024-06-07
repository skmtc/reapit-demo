import { z } from 'zod'

/** Request body used to set the tenure of an existing property */
export const updatePropertyTenureModel = /** Request body used to set the tenure of an existing property */
z.object({type: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
z.string().optional(), expiry: /** The tenure expiration date */
z.string().optional()});
/** Request body used to set the tenure of an existing property */
export type UpdatePropertyTenureModel = /** Request body used to set the tenure of an existing property */
{type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
string | undefined, expiry?: /** The tenure expiration date */
string | undefined};