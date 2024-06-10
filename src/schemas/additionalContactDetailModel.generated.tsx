import { z } from 'zod'

/** Representation of additional contact details */
export const additionalContactDetailModel =
  /** Representation of additional contact details */
  z.object({
    /** The type of contact detail */ type: z.string().optional().nullable(),
    /** The contact detail */ value: z.string().optional().nullable(),
  })
/** Representation of additional contact details */
export type AdditionalContactDetailModel =
  /** Representation of additional contact details */
  {
    type?: /** The type of contact detail */ string | null | undefined
    value?: /** The contact detail */ string | null | undefined
  }
