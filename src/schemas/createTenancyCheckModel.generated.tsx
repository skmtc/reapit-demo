import { z } from 'zod'

/** Request body used to create a new tenancy check */
export type CreateTenancyCheckModel =
  /** Request body used to create a new tenancy check */
  {
    description?:
      | /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
      string
      | null
      | undefined
    type: /** The type of the tenancy check (preTenancy/postTenancy) */ string
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string
    checkTypeId?:
      | /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
      string
      | null
      | undefined
    metadata?:
      | /** App specific metadata to set against the tenancy check */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createTenancyCheckModel =
  /** Request body used to create a new tenancy check */
  z.object({
    /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
    description: z.string().optional().nullable(),
    /** The type of the tenancy check (preTenancy/postTenancy) */ type: z.string(),
    /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ status: z.string(),
    /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
    checkTypeId: z.string().optional().nullable(),
    /** App specific metadata to set against the tenancy check */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
