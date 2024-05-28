import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Model representing a nominal account */
export const nominalAccountModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the nominal account */ id: z.string().nullable().optional(),
  /** The date and time when the nominal account was created */ created: z.string().nullable().optional(),
  /** The date and time when the nominal account was last modified */ modified: z.string().nullable().optional(),
  /** The nominal account name */ name: z.string().nullable().optional(),
  /** Flag indicating whether or not the nominal account can be associated with works orders */
  appliesToWorksOrders: z.boolean().nullable().optional(),
})
/** Model representing a nominal account */
export type NominalAccountModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the nominal account */ string | undefined
  created?: /** The date and time when the nominal account was created */ string | undefined
  modified?: /** The date and time when the nominal account was last modified */ string | undefined
  name?: /** The nominal account name */ string | undefined
  appliesToWorksOrders?: /** Flag indicating whether or not the nominal account can be associated with works orders */
  boolean | undefined
}
