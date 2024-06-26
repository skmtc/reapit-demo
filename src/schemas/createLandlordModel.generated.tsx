import { CreateLandlordSourceModel, createLandlordSourceModel } from '@/schemas/createLandlordSourceModel.generated.tsx'
import {
  CreateLandlordContactRelationshipModel,
  createLandlordContactRelationshipModel,
} from '@/schemas/createLandlordContactRelationshipModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new landlord */
export type CreateLandlordModel =
  /** Request body used to create a new landlord */
  {
    active?: /** A flag determining whether or not the landlord is currently active */ boolean | null | undefined
    solicitorId?:
      | /** The unique identifier of the company acting as the landlord's solicitor */
      string
      | null
      | undefined
    officeId: /** The unique identifier of the office that is associated to the landlord */ string
    source?: CreateLandlordSourceModel | null | undefined
    related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    Array<CreateLandlordContactRelationshipModel>
    metadata?:
      | /** App specific metadata that to set against the landlord */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createLandlordModel =
  /** Request body used to create a new landlord */
  z.object({
    /** A flag determining whether or not the landlord is currently active */ active: z.boolean().optional().nullable(),
    /** The unique identifier of the company acting as the landlord's solicitor */
    solicitorId: z.string().optional().nullable(),
    /** The unique identifier of the office that is associated to the landlord */ officeId: z.string(),
    source: createLandlordSourceModel.optional().nullable(),
    /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    related: z.array(createLandlordContactRelationshipModel),
    /** App specific metadata that to set against the landlord */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
