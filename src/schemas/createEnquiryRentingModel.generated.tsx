import { z } from 'zod'

/** The details specific to renting enquiry. When type is renting. */
export const createEnquiryRentingModel = /** The details specific to renting enquiry. When type is renting. */
z.object({rentFrom: /** The lower bound of the prospective tenant's budget */
z.number().int().optional(), rentTo: /** The upper bound of the prospective tenant's budget */
z.number().int().optional(), rentFrequency: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
z.string().optional()});
/** The details specific to renting enquiry. When type is renting. */
export type CreateEnquiryRentingModel = /** The details specific to renting enquiry. When type is renting. */
{rentFrom?: /** The lower bound of the prospective tenant's budget */
number | undefined, rentTo?: /** The upper bound of the prospective tenant's budget */
number | undefined, rentFrequency?: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
string | undefined};