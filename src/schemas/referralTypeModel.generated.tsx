import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a referral type */
export const referralTypeModel = /** Representation of a referral type */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: z.string().optional(), name: /** The name of the referral type */
z.string().optional()});
/** Representation of a referral type */
export type ReferralTypeModel = /** Representation of a referral type */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: string | undefined, name?: /** The name of the referral type */
string | undefined};