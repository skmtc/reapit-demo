import { z } from 'zod'

/** Request body used to create a new source of business */
export const createSourceModel = z.object({
  /** The name of the source or advertising publication */ name: z.string(),
  /** The type of the source (source/advertisement) */ type: z.string(),
  /** A collection of the unique identifiers of offices that regularly get business from the source */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of departments that regularly get business from the source */
  departmentIds: z.array(z.string()).nullable().optional(),
})
/** Request body used to create a new source of business */
export type CreateSourceModel = {
  name: /** The name of the source or advertising publication */ string
  type: /** The type of the source (source/advertisement) */ string
  officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
  Array<string> | undefined
}
