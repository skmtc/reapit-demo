import { z } from 'zod'

export const linkModel = z.object({ href: z.string().nullable().optional() })
