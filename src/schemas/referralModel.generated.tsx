import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { ReferralContactModel, referralContactModel } from '@/schemas/referralContactModel.generated.tsx'
import { z } from 'zod'

export type ReferralModel =
  /** Representation of a referral */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the referral */ string | null | undefined
    created?: /** The date and time when the referral was created */ string | null | undefined
    modified?: /** The date and time when the referral was amended */ string | null | undefined
    referralTypeId?:
      | /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
      string
      | null
      | undefined
    type?:
      | /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
      string
      | null
      | undefined
    negotiatorId?:
      | /** The unique identifier of the negotiator the referral is associated with, where applicable */
      string
      | null
      | undefined
    propertyId?:
      | /** The unique identifier of the property the referral is associated with, where applicable */
      string
      | null
      | undefined
    applicantId?:
      | /** The unique identifier of the applicant the referral is associated with, where applicable */
      string
      | null
      | undefined
    contactId?:
      | /** The unique identifier of the applicant the referral is associated with, where applicable */
      string
      | null
      | undefined
    status?:
      | /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
      string
      | null
      | undefined
    amount?: /** The amount paid to the agent for the referral */ number | null | undefined
    paid?: /** The date and time when the referral was paid */ string | null | undefined
    accepted?: /** The date and time when the referral was accepted */ string | null | undefined
    related?: ReferralContactModel | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the referral */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the referral. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a referral */
export const referralModel =
  /** Representation of a referral */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the referral */ id: z.string().optional().nullable(),
    /** The date and time when the referral was created */ created: z.string().optional().nullable(),
    /** The date and time when the referral was amended */ modified: z.string().optional().nullable(),
    /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
    referralTypeId: z.string().optional().nullable(),
    /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
    type: z.string().optional().nullable(),
    /** The unique identifier of the negotiator the referral is associated with, where applicable */
    negotiatorId: z.string().optional().nullable(),
    /** The unique identifier of the property the referral is associated with, where applicable */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the applicant the referral is associated with, where applicable */
    applicantId: z.string().optional().nullable(),
    /** The unique identifier of the applicant the referral is associated with, where applicable */
    contactId: z.string().optional().nullable(),
    /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
    status: z.string().optional().nullable(),
    /** The amount paid to the agent for the referral */ amount: z.number().optional().nullable(),
    /** The date and time when the referral was paid */ paid: z.string().optional().nullable(),
    /** The date and time when the referral was accepted */ accepted: z.string().optional().nullable(),
    related: referralContactModel.optional().nullable(),
    /** App specific metadata that has been set against the referral */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the referral. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
