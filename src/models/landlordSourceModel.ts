import { z } from 'zod'

/** Representation of a landlord's source */
export const landlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Representation of a landlord's source */
export type LandlordSourceModel = {
  id?: /** The unique identifier of the source of the landlord */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
