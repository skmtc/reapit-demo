import { z } from 'zod'

/** Representation of the tenure of a property */
export const propertyTenureModel = /** Representation of the tenure of a property */
z.object({type: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
z.string().optional(), expiry: /** The tenure expiration date */
z.string().optional()});
/** Representation of the tenure of a property */
export type PropertyTenureModel = /** Representation of the tenure of a property */
{type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
string | undefined, expiry?: /** The tenure expiration date */
string | undefined};