import { z } from 'zod'

export const pagingLinkModel = z.object({ href: z.string().nullable().optional() })
