import { z } from 'zod'

/** Representation of a staff member */
export const staffModel = z.object({
  /** The staff member's name */ name: z.string().nullable().optional(),
  /** A flag determining whether or not the staff member is currently active */
  active: z.boolean().nullable().optional(),
  /** The staff member's job title */ jobTitle: z.string().nullable().optional(),
  /** The staff member's work phone */ workPhone: z.string().nullable().optional(),
  /** The staff member's mobile phone */ mobilePhone: z.string().nullable().optional(),
  /** The staff member's email */ email: z.string().nullable().optional(),
  /** The staff member's preferred salutation */ salutation: z.string().nullable().optional(),
})
