import { z } from 'zod'

export const linkModel = z.object({ href: z.string().nullable().optional() })
export type LinkModel = { href?: string | undefined }
