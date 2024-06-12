import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { LandlordSourceModel, landlordSourceModel } from '@/schemas/landlordSourceModel.generated.tsx'
import { LandlordContactModel, landlordContactModel } from '@/schemas/landlordContactModel.generated.tsx'
import { z } from 'zod'

export type LandlordModel =
  /** Representation of a landlord */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the landlord */ string | null | undefined
    created?: /** The date and time when the landlord was created */ string | null | undefined
    modified?: /** The date and time when the landlord was last modified */ string | null | undefined
    active?: /** A flag determining whether or not the landlord is currently active */ boolean | null | undefined
    solicitorId?:
      | /** The unique identifier of the company acting as the landlord's solicitor */
      string
      | null
      | undefined
    officeId?: /** The unique identifier of the office that is associated to the landlord */ string | null | undefined
    source?: LandlordSourceModel | null | undefined
    related?:
      | /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
      Array<LandlordContactModel>
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against the landlord */
      Record<string, Record<string, never>>
      | null
      | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | null | undefined
    _eTag?:
      | /** The ETag for the current version of the landlord. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a landlord */
export const landlordModel =
  /** Representation of a landlord */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the landlord */ id: z.string().optional().nullable(),
    /** The date and time when the landlord was created */ created: z.string().optional().nullable(),
    /** The date and time when the landlord was last modified */ modified: z.string().optional().nullable(),
    /** A flag determining whether or not the landlord is currently active */ active: z.boolean().optional().nullable(),
    /** The unique identifier of the company acting as the landlord's solicitor */
    solicitorId: z.string().optional().nullable(),
    /** The unique identifier of the office that is associated to the landlord */
    officeId: z.string().optional().nullable(),
    source: landlordSourceModel.optional().nullable(),
    /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    related: z.array(landlordContactModel).optional().nullable(),
    /** App specific metadata that has been set against the landlord */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the landlord. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
