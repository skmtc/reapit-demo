import { z } from 'zod'
import { createLettingFeeRenewalModel, CreateLettingFeeRenewalModel } from '@/schemas/createLettingFeeRenewalModel.generated.tsx'
import { createManagementFeeRenewalModel, CreateManagementFeeRenewalModel } from '@/schemas/createManagementFeeRenewalModel.generated.tsx'

/** Request body used to create a tenancy renewal negotiation */
export const createTenancyRenewalModel = /** Request body used to create a tenancy renewal negotiation */
z.object({startDate: /** The proposed start date of the tenancy renewal */
z.string().optional(), endDate: /** The proposed end date of the tenancy renewal */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator who is managing this tenancy renewal */
z.string().optional(), rent: /** The amount of rent required, returned in relation to the collection frequency */
z.number().optional(), rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
z.string().optional(), lettingFee: createLettingFeeRenewalModel.optional(), managementFee: createManagementFeeRenewalModel.optional()});
/** Request body used to create a tenancy renewal negotiation */
export type CreateTenancyRenewalModel = /** Request body used to create a tenancy renewal negotiation */
{startDate?: /** The proposed start date of the tenancy renewal */
string | undefined, endDate?: /** The proposed end date of the tenancy renewal */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */
string | undefined, rent?: /** The amount of rent required, returned in relation to the collection frequency */
number | undefined, rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
string | undefined, lettingFee?: CreateLettingFeeRenewalModel | undefined, managementFee?: CreateManagementFeeRenewalModel | undefined};