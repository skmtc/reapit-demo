import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type ReferralTypeModel =
  /** Representation of a referral type */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: string | null | undefined
    name?: /** The name of the referral type */ string | null | undefined
  }
/** Representation of a referral type */
export const referralTypeModel =
  /** Representation of a referral type */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    id: z.string().optional().nullable(),
    /** The name of the referral type */ name: z.string().optional().nullable(),
  })
