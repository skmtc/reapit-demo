import { z } from 'zod'

/** Request body used to create a buying enquiry */
export const enquiryBuyingModel = /** Request body used to create a buying enquiry */
z.object({priceFrom: /** The lower bound of the prospective buyer's budget */
z.number().int().optional(), priceTo: /** The upper bound of the prospective buyer's budget */
z.number().int().optional()});
/** Request body used to create a buying enquiry */
export type EnquiryBuyingModel = /** Request body used to create a buying enquiry */
{priceFrom?: /** The lower bound of the prospective buyer's budget */
number | undefined, priceTo?: /** The upper bound of the prospective buyer's budget */
number | undefined};