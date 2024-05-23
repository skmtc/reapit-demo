import { z } from 'zod'

/** Create Referral Model */
export const createReferralModel = z.object({
  /** The unique identifier of the referral type */ referralTypeId: z.string(),
  /** The unique identifier of the negotiator creating the referral */ negotiatorId: z.string().nullable().optional(),
  /** The unique identifier of the property */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the contact that has been referred */ contactId: z.string(),
  /** The amount paid to the agent for the referral */ amount: z.number().nullable().optional(),
})
