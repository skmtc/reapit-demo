import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { referralContactModel, ReferralContactModel } from '@/schemas/referralContactModel.generated.tsx'

/** Representation of a referral */
export const referralModel =
  /** Representation of a referral */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the referral */ id: z.string().optional(),
    /** The date and time when the referral was created */ created: z.string().optional(),
    /** The date and time when the referral was amended */ modified: z.string().optional(),
    /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
    referralTypeId: z.string().optional(),
    /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
    type: z.string().optional(),
    /** The unique identifier of the negotiator the referral is associated with, where applicable */
    negotiatorId: z.string().optional(),
    /** The unique identifier of the property the referral is associated with, where applicable */
    propertyId: z.string().optional(),
    /** The unique identifier of the applicant the referral is associated with, where applicable */
    applicantId: z.string().optional(),
    /** The unique identifier of the applicant the referral is associated with, where applicable */
    contactId: z.string().optional(),
    /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
    status: z.string().optional(),
    /** The amount paid to the agent for the referral */ amount: z.number().optional(),
    /** The date and time when the referral was paid */ paid: z.string().optional(),
    /** The date and time when the referral was accepted */ accepted: z.string().optional(),
    related: referralContactModel.optional(),
    /** App specific metadata that has been set against the referral */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the referral. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of a referral */
export type ReferralModel =
  /** Representation of a referral */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the referral */ string | undefined
    created?: /** The date and time when the referral was created */ string | undefined
    modified?: /** The date and time when the referral was amended */ string | undefined
    referralTypeId?: /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
    string | undefined
    type?: /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator the referral is associated with, where applicable */
    string | undefined
    propertyId?: /** The unique identifier of the property the referral is associated with, where applicable */
    string | undefined
    applicantId?: /** The unique identifier of the applicant the referral is associated with, where applicable */
    string | undefined
    contactId?: /** The unique identifier of the applicant the referral is associated with, where applicable */
    string | undefined
    status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
    string | undefined
    amount?: /** The amount paid to the agent for the referral */ number | undefined
    paid?: /** The date and time when the referral was paid */ string | undefined
    accepted?: /** The date and time when the referral was accepted */ string | undefined
    related?: ReferralContactModel | undefined
    metadata?: /** App specific metadata that has been set against the referral */
    Record<string, Record<string, never>> | undefined
    _eTag?: /** The ETag for the current version of the referral. Used for managing update concurrency */
    string | undefined
  }
