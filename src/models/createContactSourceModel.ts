import { z } from 'zod'

/** Request body used to set the source of a new contact */
export const createContactSourceModel = z.object({
  /** The unique identifier of the source of the contact */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
