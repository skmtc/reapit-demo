import { z } from 'zod'

export const linkModel = z.object({href: z.string().optional()});
export type LinkModel = {href?: string | undefined};