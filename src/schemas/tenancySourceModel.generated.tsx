import { z } from 'zod'

/** A tenancy source of enquiry */
export const tenancySourceModel = /** A tenancy source of enquiry */
z.object({id: /** The unique identifier of the source for this tenancy */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** A tenancy source of enquiry */
export type TenancySourceModel = /** A tenancy source of enquiry */
{id?: /** The unique identifier of the source for this tenancy */
string | undefined, type?: /** The source type (office/source) */
string | undefined};