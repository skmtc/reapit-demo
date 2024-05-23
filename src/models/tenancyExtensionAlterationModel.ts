import { z } from 'zod'

/** Represents a tenancy extension or alteration */
export const tenancyExtensionAlterationModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the extension or alteration */ id: z.string().nullable().optional(),
  /** The date and time when the extension or alteration was created */ created: z.string().nullable().optional(),
  /** The date and time when the extension or alteration was last modified */
  modified: z.string().nullable().optional(),
  /** The start date of the extension or alteration */ startDate: z.string().nullable().optional(),
  /** The end date of the extension (alterations do not have an end date) */ endDate: z.string().nullable().optional(),
  /** The type of entry (extension|alteration) */ type: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the extension or alteration */
  negotiatorId: z.string().nullable().optional(),
  /** The extension or alteration rent amount */ rent: z.number().nullable().optional(),
  /** The rent frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().nullable().optional(),
  /** The unique identifier of the tenancy associated to the extension or alteration */
  tenancyId: z.string().nullable().optional(),
  /** Represents a one off fee associated with tenancy extension or alteration */
  fee: z
    .object({
      /** The one fee amount */ amount: z.number().nullable().optional(),
      /** The one of fee summary text */ summary: z.string().nullable().optional(),
      /** The fee type */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
