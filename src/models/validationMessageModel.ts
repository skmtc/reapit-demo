import { z } from 'zod'

/** Model for validation failure */
export const validationMessageModel = z.object({
  /** Gets the field that the message applies to */ field: z.string().nullable().optional(),
  /** Gets the validation failure message to issue to the client */ message: z.string().nullable().optional(),
})
