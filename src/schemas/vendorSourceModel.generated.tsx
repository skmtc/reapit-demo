import { z } from 'zod'

/** Representation of a vendor's source */
export const vendorSourceModel = /** Representation of a vendor's source */
z.object({id: /** The unique identifier of the source of the vendor */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** Representation of a vendor's source */
export type VendorSourceModel = /** Representation of a vendor's source */
{id?: /** The unique identifier of the source of the vendor */
string | undefined, type?: /** The source type (office/source) */
string | undefined};