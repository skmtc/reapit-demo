import { z } from 'zod'

/** A tenancy source of enquiry */
export const tenancySourceModel =
  /** A tenancy source of enquiry */
  z.object({
    /** The unique identifier of the source for this tenancy */ id: z.string().optional(),
    /** The source type (office/source) */ type: z.string().optional(),
  })
/** A tenancy source of enquiry */
export type TenancySourceModel =
  /** A tenancy source of enquiry */
  {
    id?: /** The unique identifier of the source for this tenancy */ string | undefined
    type?: /** The source type (office/source) */ string | undefined
  }
