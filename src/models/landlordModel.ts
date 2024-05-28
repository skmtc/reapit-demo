import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { landlordSourceModel, LandlordSourceModel } from '@/models/landlordSourceModel.ts'
import { landlordContactModel, LandlordContactModel } from '@/models/landlordContactModel.ts'

/** Representation of a landlord */
export const landlordModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the landlord */ id: z.string().nullable().optional(),
  /** The date and time when the landlord was created */ created: z.string().nullable().optional(),
  /** The date and time when the landlord was last modified */ modified: z.string().nullable().optional(),
  /** A flag determining whether or not the landlord is currently active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string().nullable().optional(),
  source: landlordSourceModel.nullable().optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z.array(landlordContactModel).nullable().optional(),
  /** App specific metadata that has been set against the landlord */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the landlord. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a landlord */
export type LandlordModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the landlord */ string | undefined
  created?: /** The date and time when the landlord was created */ string | undefined
  modified?: /** The date and time when the landlord was last modified */ string | undefined
  active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined
  solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */ string | undefined
  officeId?: /** The unique identifier of the office that is associated to the landlord */ string | undefined
  source?: LandlordSourceModel | undefined
  related?: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  Array<LandlordContactModel> | undefined
  metadata?: /** App specific metadata that has been set against the landlord */
  Record<string, Record<string, never>> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the landlord. Used for managing update concurrency */
  string | undefined
}
