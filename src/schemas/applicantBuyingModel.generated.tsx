import { z } from 'zod'
import { applicantLeaseRemaining, ApplicantLeaseRemaining } from '@/schemas/applicantLeaseRemaining.generated.tsx'

/** The details specific to applicants with a marketingMode of buying */
export const applicantBuyingModel = /** The details specific to applicants with a marketingMode of buying */
z.object({priceFrom: /** The lower bound of the applicant's budget */
z.number().int().optional(), priceTo: /** The upper bound of the applicant's budget */
z.number().int().optional(), decoration: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
z.array(z.string()).optional(), reasonId: /** The identifier of the applicant's buying reason */
z.string().optional(), positionId: /** The identifier of the applicant's selling position */
z.string().optional(), tenure: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
z.array(z.string()).optional(), mortgageExpiry: /** The date when the applicant's current mortgage expires/is due for renewal */
z.string().optional(), leaseRemaining: applicantLeaseRemaining.optional()});
/** The details specific to applicants with a marketingMode of buying */
export type ApplicantBuyingModel = /** The details specific to applicants with a marketingMode of buying */
{priceFrom?: /** The lower bound of the applicant's budget */
number | undefined, priceTo?: /** The upper bound of the applicant's budget */
number | undefined, decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
Array<string> | undefined, reasonId?: /** The identifier of the applicant's buying reason */
string | undefined, positionId?: /** The identifier of the applicant's selling position */
string | undefined, tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
Array<string> | undefined, mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */
string | undefined, leaseRemaining?: ApplicantLeaseRemaining | undefined};