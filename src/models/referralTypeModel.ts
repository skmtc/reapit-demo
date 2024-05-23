import { z } from 'zod'

/** Representation of a referral type */
export const referralTypeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  /** The name of the referral type */ name: z.string().nullable().optional(),
})
