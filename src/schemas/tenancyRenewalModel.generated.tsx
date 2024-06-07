import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { tenancyRentChangeModel, TenancyRentChangeModel } from '@/schemas/tenancyRentChangeModel.generated.tsx'
import { tenancyLettingFeeModel, TenancyLettingFeeModel } from '@/schemas/tenancyLettingFeeModel.generated.tsx'
import { tenancyManagementFeeModel, TenancyManagementFeeModel } from '@/schemas/tenancyManagementFeeModel.generated.tsx'

/** Represents a tenancies renewal negotiation */
export const tenancyRenewalModel = /** Represents a tenancies renewal negotiation */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the renewal negotiation */
z.string().optional(), created: /** The date and time when the renewal was created */
z.string().optional(), modified: /** The date and time when the renewal was last modified */
z.string().optional(), startDate: z.string().optional(), endDate: z.string().optional(), status: /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator associated to the renewal */
z.string().optional(), rent: /** The tenancies rent amount */
z.number().optional(), rentFrequency: /** The rent collection frequency (weekly/monthly/4weeks/annually) */
z.string().optional(), rentChange: tenancyRentChangeModel.optional(), tenancyId: /** The unique identifier of the tenancy associated to the renewal */
z.string().optional(), lettingFee: tenancyLettingFeeModel.optional(), managementFee: tenancyManagementFeeModel.optional(), _eTag: /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
z.string().optional()});
/** Represents a tenancies renewal negotiation */
export type TenancyRenewalModel = /** Represents a tenancies renewal negotiation */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the renewal negotiation */
string | undefined, created?: /** The date and time when the renewal was created */
string | undefined, modified?: /** The date and time when the renewal was last modified */
string | undefined, startDate?: string | undefined, endDate?: string | undefined, status?: /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator associated to the renewal */
string | undefined, rent?: /** The tenancies rent amount */
number | undefined, rentFrequency?: /** The rent collection frequency (weekly/monthly/4weeks/annually) */
string | undefined, rentChange?: TenancyRentChangeModel | undefined, tenancyId?: /** The unique identifier of the tenancy associated to the renewal */
string | undefined, lettingFee?: TenancyLettingFeeModel | undefined, managementFee?: TenancyManagementFeeModel | undefined, _eTag?: /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
string | undefined};