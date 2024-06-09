import { z } from 'zod'

/** Request body used to set the source of a new tenancy */
export const createTenancySourceModel =
  /** Request body used to set the source of a new tenancy */
  z.object({
    /** The unique identifier of the source for the tenancy */ id: z.string().optional(),
    /** The source type (office/source) */ type: z.string().optional(),
  })
/** Request body used to set the source of a new tenancy */
export type CreateTenancySourceModel =
  /** Request body used to set the source of a new tenancy */
  {
    id?: /** The unique identifier of the source for the tenancy */ string | undefined
    type?: /** The source type (office/source) */ string | undefined
  }
