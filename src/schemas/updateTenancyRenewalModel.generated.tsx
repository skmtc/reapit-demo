import { z } from 'zod'
import { updateLettingFeeRenewalModel, UpdateLettingFeeRenewalModel } from '@/schemas/updateLettingFeeRenewalModel.generated.tsx'
import { updateManagementFeeRenewalModel, UpdateManagementFeeRenewalModel } from '@/schemas/updateManagementFeeRenewalModel.generated.tsx'

/** Request body used to update a tenancy renewal negotiation */
export const updateTenancyRenewalModel = /** Request body used to update a tenancy renewal negotiation */
z.object({startDate: /** The proposed start date of the tenancy renewal */
z.string().optional(), endDate: /** The proposed end date of the tenancy renewal */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator who is managing this tenancy renewal */
z.string().optional(), rent: /** The amount of rent required, returned in relation to the collection frequency */
z.number().optional(), rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
z.string().optional(), lettingFee: updateLettingFeeRenewalModel.optional(), managementFee: updateManagementFeeRenewalModel.optional()});
/** Request body used to update a tenancy renewal negotiation */
export type UpdateTenancyRenewalModel = /** Request body used to update a tenancy renewal negotiation */
{startDate?: /** The proposed start date of the tenancy renewal */
string | undefined, endDate?: /** The proposed end date of the tenancy renewal */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */
string | undefined, rent?: /** The amount of rent required, returned in relation to the collection frequency */
number | undefined, rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
string | undefined, lettingFee?: UpdateLettingFeeRenewalModel | undefined, managementFee?: UpdateManagementFeeRenewalModel | undefined};