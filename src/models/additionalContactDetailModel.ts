import { z } from 'zod'

/** Representation of additional contact details */
export const additionalContactDetailModel = z.object({
  /** The type of contact detail */ type: z.string().nullable().optional(),
  /** The contact detail */ value: z.string().nullable().optional(),
})
/** Representation of additional contact details */
export type AdditionalContactDetailModel = {
  type?: /** The type of contact detail */ string | undefined
  value?: /** The contact detail */ string | undefined
}
