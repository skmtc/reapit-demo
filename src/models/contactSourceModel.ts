import { z } from 'zod'

/** Representation of a contact's source */
export const contactSourceModel = z.object({
  /** The unique identifier of the source of the contact */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Representation of a contact's source */
export type ContactSourceModel = {
  id?: /** The unique identifier of the source of the contact */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
