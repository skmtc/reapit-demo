import { z } from 'zod'

export const certificateModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a cerificate */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the certificate */ id: z.string().nullable().optional(),
        /** The date and time when the certificate was created */ created: z.string().nullable().optional(),
        /** The date and time when the certificate was last modified */ modified: z.string().nullable().optional(),
        /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
        category: z.string().nullable().optional(),
        /** The certificate's type */ typeId: z.string().nullable().optional(),
        /** The certificate's start date */ start: z.string().nullable().optional(),
        /** The certificate's expiry date */ expiry: z.string().nullable().optional(),
        /** The unique identifier of the property */ propertyId: z.string().nullable().optional(),
        /** The unique identifier of the company */ companyId: z.string().nullable().optional(),
        /** The unique identifier of the certificates status */ statusId: z.string().nullable().optional(),
        /** Any general notes regarding the certificate */ notes: z.string().nullable().optional(),
        /** The certificate's reference number */ referenceNumber: z.string().nullable().optional(),
        /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
        responsibleParty: z.string().nullable().optional(),
        /** The ETag for the current version of the certificate. Used for managing update concurrency */
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
