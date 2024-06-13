import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type PropertyCheckModel =
  /** Representation of a check */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the check */ string | null | undefined
    created?: /** The date and time when the check was created */ string | null | undefined
    modified?: /** The date and time when the check was last modified */ string | null | undefined
    description?: /** Textual description of what the check relates to */ string | null | undefined
    status?: /** The status of the check (needed/notNeeded/arranging/completed) */ string | null | undefined
    type?: /** The type of the check (preInstruction) */ string | null | undefined
    propertyId?: /** The unique identifier of the property that this check relates to */ string | null | undefined
    _eTag?:
      | /** The ETag for the current version of the check. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a check */
export const propertyCheckModel =
  /** Representation of a check */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the check */ id: z.string().optional().nullable(),
    /** The date and time when the check was created */ created: z.string().optional().nullable(),
    /** The date and time when the check was last modified */ modified: z.string().optional().nullable(),
    /** Textual description of what the check relates to */ description: z.string().optional().nullable(),
    /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string().optional().nullable(),
    /** The type of the check (preInstruction) */ type: z.string().optional().nullable(),
    /** The unique identifier of the property that this check relates to */
    propertyId: z.string().optional().nullable(),
    /** The ETag for the current version of the check. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
