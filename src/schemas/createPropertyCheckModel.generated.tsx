import { z } from 'zod'

/** Request body used to create a new check */
export type CreatePropertyCheckModel =
  /** Request body used to create a new check */
  {
    description: /** Short, descriptive text describing the purpose of the check */ string
    type: /** The type of the check (preInstruction) */ string
    status: /** The status of the check (needed/notNeeded/arranging/completed) */ string
  }
export const createPropertyCheckModel =
  /** Request body used to create a new check */
  z.object({
    /** Short, descriptive text describing the purpose of the check */ description: z.string(),
    /** The type of the check (preInstruction) */ type: z.string(),
    /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string(),
  })
