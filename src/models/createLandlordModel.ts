import { z } from 'zod'

/** Request body used to create a new landlord */
export const createLandlordModel = z.object({
  /** A flag determining whether or not the landlord is currently active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the office that is associated to the landlord */ officeId: z.string(),
  /** Request body used to set the source of a new landlord */
  source: z
    .object({
      /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z.array(
    /** Request body used to create a new relationship between a landlord and a contact or company */
    z.object({
      /** The unique identifier of the contact or company to create a relationship with */
      associatedId: z.string().nullable().optional(),
      /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
    }),
  ),
  /** App specific metadata that to set against the landlord */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new landlord */
export type CreateLandlordModel = {
  active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined
  solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */ string | undefined
  officeId: /** The unique identifier of the office that is associated to the landlord */ string
  source?: /** Request body used to set the source of a new landlord */
  | {
        id?: /** The unique identifier of the source of the landlord */ string | undefined
        type?: /** The source type (office/source) */ string | undefined
      }
    | undefined
  related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  Array</** Request body used to create a new relationship between a landlord and a contact or company */
  {
    associatedId?: /** The unique identifier of the contact or company to create a relationship with */
    string | undefined
    associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
  }>
  metadata?: /** App specific metadata that to set against the landlord */
  Record<string, Record<string, never>> | undefined
}
