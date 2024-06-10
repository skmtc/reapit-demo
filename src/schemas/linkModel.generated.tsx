import { z } from 'zod'

export const linkModel = z.object({ href: z.string().optional().nullable() })
export type LinkModel = { href?: string | null | undefined }
