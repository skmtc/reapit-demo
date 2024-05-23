import { z } from 'zod'

export const operation = z.object({
  operationType: z
    .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)])
    .nullable()
    .optional(),
  path: z.string().nullable().optional(),
  op: z.string().nullable().optional(),
  from: z.string().nullable().optional(),
})
