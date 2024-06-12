import { z } from 'zod'

export type LinkModel = { href?: string | null | undefined }
export const linkModel = z.object({ href: z.string().optional().nullable() })
