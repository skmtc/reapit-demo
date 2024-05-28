import { z } from 'zod'

/** A tenancy source of enquiry */
export const tenancySourceModel = z.object({
  /** The unique identifier of the source for this tenancy */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** A tenancy source of enquiry */
export type TenancySourceModel = {
  id?: /** The unique identifier of the source for this tenancy */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
