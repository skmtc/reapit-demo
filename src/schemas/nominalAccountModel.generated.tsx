import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type NominalAccountModel =
  /** Model representing a nominal account */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the nominal account */ string | null | undefined
    created?: /** The date and time when the nominal account was created */ string | null | undefined
    modified?: /** The date and time when the nominal account was last modified */ string | null | undefined
    name?: /** The nominal account name */ string | null | undefined
    appliesToWorksOrders?:
      | /** Flag indicating whether or not the nominal account can be associated with works orders */
      boolean
      | null
      | undefined
  }
/** Model representing a nominal account */
export const nominalAccountModel =
  /** Model representing a nominal account */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the nominal account */ id: z.string().optional().nullable(),
    /** The date and time when the nominal account was created */ created: z.string().optional().nullable(),
    /** The date and time when the nominal account was last modified */ modified: z.string().optional().nullable(),
    /** The nominal account name */ name: z.string().optional().nullable(),
    /** Flag indicating whether or not the nominal account can be associated with works orders */
    appliesToWorksOrders: z.boolean().optional().nullable(),
  })
