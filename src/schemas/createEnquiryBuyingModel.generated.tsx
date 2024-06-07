import { z } from 'zod'

/** The details specific to a buying enquiry */
export const createEnquiryBuyingModel = /** The details specific to a buying enquiry */
z.object({priceFrom: /** The lower bound of the prospective buyer's budget */
z.number().int().optional(), priceTo: /** The upper bound of the prospective buyer's budget */
z.number().int().optional()});
/** The details specific to a buying enquiry */
export type CreateEnquiryBuyingModel = /** The details specific to a buying enquiry */
{priceFrom?: /** The lower bound of the prospective buyer's budget */
number | undefined, priceTo?: /** The upper bound of the prospective buyer's budget */
number | undefined};