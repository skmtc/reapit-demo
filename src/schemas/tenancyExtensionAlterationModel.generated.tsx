import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { tenancyExtensionAlterationFeeModel, TenancyExtensionAlterationFeeModel } from '@/schemas/tenancyExtensionAlterationFeeModel.generated.tsx'

/** Represents a tenancy extension or alteration */
export const tenancyExtensionAlterationModel = /** Represents a tenancy extension or alteration */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the extension or alteration */
z.string().optional(), created: /** The date and time when the extension or alteration was created */
z.string().optional(), modified: /** The date and time when the extension or alteration was last modified */
z.string().optional(), startDate: /** The start date of the extension or alteration */
z.string().optional(), endDate: /** The end date of the extension (alterations do not have an end date) */
z.string().optional(), type: /** The type of entry (extension|alteration) */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator associated to the extension or alteration */
z.string().optional(), rent: /** The extension or alteration rent amount */
z.number().optional(), rentFrequency: /** The rent frequency (weekly/monthly/4weeks/annually) */
z.string().optional(), tenancyId: /** The unique identifier of the tenancy associated to the extension or alteration */
z.string().optional(), fee: tenancyExtensionAlterationFeeModel.optional(), _eTag: /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
z.string().optional()});
/** Represents a tenancy extension or alteration */
export type TenancyExtensionAlterationModel = /** Represents a tenancy extension or alteration */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the extension or alteration */
string | undefined, created?: /** The date and time when the extension or alteration was created */
string | undefined, modified?: /** The date and time when the extension or alteration was last modified */
string | undefined, startDate?: /** The start date of the extension or alteration */
string | undefined, endDate?: /** The end date of the extension (alterations do not have an end date) */
string | undefined, type?: /** The type of entry (extension|alteration) */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator associated to the extension or alteration */
string | undefined, rent?: /** The extension or alteration rent amount */
number | undefined, rentFrequency?: /** The rent frequency (weekly/monthly/4weeks/annually) */
string | undefined, tenancyId?: /** The unique identifier of the tenancy associated to the extension or alteration */
string | undefined, fee?: TenancyExtensionAlterationFeeModel | undefined, _eTag?: /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
string | undefined};