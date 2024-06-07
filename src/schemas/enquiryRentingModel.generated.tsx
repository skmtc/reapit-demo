import { z } from 'zod'

/** The details specific to enquiries with a type of lettingsApplicant */
export const enquiryRentingModel = /** The details specific to enquiries with a type of lettingsApplicant */
z.object({rentFrom: /** The lower bound of the prospective tenant's budget */
z.number().optional(), rentTo: /** The upper bound of the prospective tenant's budget */
z.number().optional(), rentFrequency: /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
z.string().optional()});
/** The details specific to enquiries with a type of lettingsApplicant */
export type EnquiryRentingModel = /** The details specific to enquiries with a type of lettingsApplicant */
{rentFrom?: /** The lower bound of the prospective tenant's budget */
number | undefined, rentTo?: /** The upper bound of the prospective tenant's budget */
number | undefined, rentFrequency?: /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
string | undefined};