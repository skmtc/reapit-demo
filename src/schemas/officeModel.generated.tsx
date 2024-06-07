import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { officeAddressModel, OfficeAddressModel } from '@/schemas/officeAddressModel.generated.tsx'
import { additionalOfficeContactDetailsModel, AdditionalOfficeContactDetailsModel } from '@/schemas/additionalOfficeContactDetailsModel.generated.tsx'

/** Representation of an office */
export const officeModel = /** Representation of an office */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the office */
z.string().optional(), created: /** The date and time when the office was created */
z.string().optional(), modified: /** The date and time when the office was last modified */
z.string().optional(), name: /** The name of the office */
z.string().optional(), manager: /** The name of the office manager */
z.string().optional(), active: /** A flag denoting whether or not this office is active */
z.boolean().optional(), region: /** The region that the office is in */
z.string().optional(), address: officeAddressModel.optional(), additionalContactDetails: /** A collection of additional contact details */
z.array(additionalOfficeContactDetailsModel).optional(), workPhone: /** The work phone number of the office */
z.string().optional(), email: /** The email address of the office */
z.string().optional(), metadata: /** App specific metadata that has been set against the office */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the office. Used for managing update concurrency */
z.string().optional(), extrasField: /** The requested extras fields */
z.record(z.string(), z.object({})).optional()});
/** Representation of an office */
export type OfficeModel = /** Representation of an office */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the office */
string | undefined, created?: /** The date and time when the office was created */
string | undefined, modified?: /** The date and time when the office was last modified */
string | undefined, name?: /** The name of the office */
string | undefined, manager?: /** The name of the office manager */
string | undefined, active?: /** A flag denoting whether or not this office is active */
boolean | undefined, region?: /** The region that the office is in */
string | undefined, address?: OfficeAddressModel | undefined, additionalContactDetails?: /** A collection of additional contact details */
Array<AdditionalOfficeContactDetailsModel> | undefined, workPhone?: /** The work phone number of the office */
string | undefined, email?: /** The email address of the office */
string | undefined, metadata?: /** App specific metadata that has been set against the office */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the office. Used for managing update concurrency */
string | undefined, extrasField?: /** The requested extras fields */
Record<string, Record<string, never>> | undefined};