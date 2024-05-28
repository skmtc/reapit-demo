import { z } from 'zod'

/** Request body used to set the source of a new tenancy */
export const createTenancySourceModel = z.object({
  /** The unique identifier of the source for the tenancy */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Request body used to set the source of a new tenancy */
export type CreateTenancySourceModel = {
  id?: /** The unique identifier of the source for the tenancy */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
