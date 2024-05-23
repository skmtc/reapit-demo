import { z } from 'zod'

export const referralModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a referral */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the referral */ id: z.string().nullable().optional(),
        /** The date and time when the referral was created */ created: z.string().nullable().optional(),
        /** The date and time when the referral was amended */ modified: z.string().nullable().optional(),
        /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
        referralTypeId: z.string().nullable().optional(),
        /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
        type: z.string().nullable().optional(),
        /** The unique identifier of the negotiator the referral is associated with, where applicable */
        negotiatorId: z.string().nullable().optional(),
        /** The unique identifier of the property the referral is associated with, where applicable */
        propertyId: z.string().nullable().optional(),
        /** The unique identifier of the applicant the referral is associated with, where applicable */
        applicantId: z.string().nullable().optional(),
        /** The unique identifier of the applicant the referral is associated with, where applicable */
        contactId: z.string().nullable().optional(),
        /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
        status: z.string().nullable().optional(),
        /** The amount paid to the agent for the referral */ amount: z.number().nullable().optional(),
        /** The date and time when the referral was paid */ paid: z.string().nullable().optional(),
        /** The date and time when the referral was accepted */ accepted: z.string().nullable().optional(),
        /** Representation of a contact */
        related: z
          .object({
            id: z.string().nullable().optional(),
            /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
            /** The contact's forename */ forename: z.string().nullable().optional(),
            /** The contact's surname */ surname: z.string().nullable().optional(),
            /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
            /** The email address of the contact */ email: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** App specific metadata that has been set against the referral */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** The ETag for the current version of the referral. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
