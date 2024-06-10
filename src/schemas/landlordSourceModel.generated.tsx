import { z } from 'zod'

/** Representation of a landlord's source */
export const landlordSourceModel =
  /** Representation of a landlord's source */
  z.object({
    /** The unique identifier of the source of the landlord */ id: z.string().optional().nullable(),
    /** The source type (office/source) */ type: z.string().optional().nullable(),
  })
/** Representation of a landlord's source */
export type LandlordSourceModel =
  /** Representation of a landlord's source */
  {
    id?: /** The unique identifier of the source of the landlord */ string | null | undefined
    type?: /** The source type (office/source) */ string | null | undefined
  }
