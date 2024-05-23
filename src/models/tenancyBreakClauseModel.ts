import { z } from 'zod'

/** Representation of a tenancy break clause */
export const tenancyBreakClauseModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the break clause */ id: z.string().nullable().optional(),
  /** The date and time when the break clause was created */ created: z.string().nullable().optional(),
  /** The date and time when the break clause last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated break clause */ clauseTypeId: z.string().nullable().optional(),
  /** The break clauses description */ description: z.string().nullable().optional(),
  /** The date the break clause became (or becomes) active */ active: z.string().nullable().optional(),
  /** The parties that the break clause applies to (landlord/tenant/mutual) */
  appliesTo: z.string().nullable().optional(),
  /** Tenancy agreement text relating to the break clause */ letterText: z.string().nullable().optional(),
  /** Representation of a tenancy break clauses break from details */
  breakFrom: z
    .object({
      /** The earliest date at which the tenant/landlord can end the tenancy agreement */
      date: z.string().nullable().optional(),
      /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
      minTermMonths: z.number().int().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of a tenancy break clauses notice requirements */
  noticeRequired: z
    .object({
      /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
      date: z.string().nullable().optional(),
      /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
      beforeBreakMonths: z.number().int().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
      /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the break clause. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
