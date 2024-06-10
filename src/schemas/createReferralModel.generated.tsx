import { z } from 'zod'

/** Create Referral Model */
export const createReferralModel =
  /** Create Referral Model */
  z.object({
    /** The unique identifier of the referral type */ referralTypeId: z.string(),
    /** The unique identifier of the negotiator creating the referral */ negotiatorId: z.string().optional().nullable(),
    /** The unique identifier of the property */ propertyId: z.string().optional().nullable(),
    /** The unique identifier of the applicant */ applicantId: z.string().optional().nullable(),
    /** The unique identifier of the contact that has been referred */ contactId: z.string(),
    /** The amount paid to the agent for the referral */ amount: z.number().optional().nullable(),
  })
/** Create Referral Model */
export type CreateReferralModel =
  /** Create Referral Model */
  {
    referralTypeId: /** The unique identifier of the referral type */ string
    negotiatorId?: /** The unique identifier of the negotiator creating the referral */ string | null | undefined
    propertyId?: /** The unique identifier of the property */ string | null | undefined
    applicantId?: /** The unique identifier of the applicant */ string | null | undefined
    contactId: /** The unique identifier of the contact that has been referred */ string
    amount?: /** The amount paid to the agent for the referral */ number | null | undefined
  }
