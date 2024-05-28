import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a referral type */
export const referralTypeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  /** The name of the referral type */ name: z.string().nullable().optional(),
})
/** Representation of a referral type */
export type ReferralTypeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  name?: /** The name of the referral type */ string | undefined
}
