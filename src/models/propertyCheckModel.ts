import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a check */
export const propertyCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the check */ id: z.string().nullable().optional(),
  /** The date and time when the check was created */ created: z.string().nullable().optional(),
  /** The date and time when the check was last modified */ modified: z.string().nullable().optional(),
  /** Textual description of what the check relates to */ description: z.string().nullable().optional(),
  /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string().nullable().optional(),
  /** The type of the check (preInstruction) */ type: z.string().nullable().optional(),
  /** The unique identifier of the property that this check relates to */ propertyId: z.string().nullable().optional(),
  /** The ETag for the current version of the check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a check */
export type PropertyCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the check */ string | undefined
  created?: /** The date and time when the check was created */ string | undefined
  modified?: /** The date and time when the check was last modified */ string | undefined
  description?: /** Textual description of what the check relates to */ string | undefined
  status?: /** The status of the check (needed/notNeeded/arranging/completed) */ string | undefined
  type?: /** The type of the check (preInstruction) */ string | undefined
  propertyId?: /** The unique identifier of the property that this check relates to */ string | undefined
  _eTag?: /** The ETag for the current version of the check. Used for managing update concurrency */ string | undefined
}
