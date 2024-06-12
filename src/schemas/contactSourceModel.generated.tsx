import { z } from 'zod'

/** Representation of a contact's source */
export type ContactSourceModel =
  /** Representation of a contact's source */
  {
    id?: /** The unique identifier of the source of the contact */ string | null | undefined
    type?: /** The source type (office/source) */ string | null | undefined
  }
/** Representation of a contact's source */
export const contactSourceModel =
  /** Representation of a contact's source */
  z.object({
    /** The unique identifier of the source of the contact */ id: z.string().optional().nullable(),
    /** The source type (office/source) */ type: z.string().optional().nullable(),
  })
