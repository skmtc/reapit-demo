import { z } from 'zod'

/** Representation of a certificate type */
export const certificateTypeModel = z.object({
  /** The unique identifier of the list item */ id: z.string().nullable().optional(),
  /** The textual value for the list item */ value: z.string().nullable().optional(),
  /** The configurable statuses associated to the certificate type */
  statuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
