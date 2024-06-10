import { z } from 'zod'
import { createOfficeAddressModel, CreateOfficeAddressModel } from '@/schemas/createOfficeAddressModel.generated.tsx'

/** Request body used to create a new office */
export const createOfficeModel =
  /** Request body used to create a new office */
  z.object({
    /** The name of the office */ name: z.string(),
    /** A flag denoting whether or not this office is active */ active: z.boolean().optional().nullable(),
    /** The name of the office manager */ manager: z.string().optional().nullable(),
    address: createOfficeAddressModel,
    /** The work phone number of the office */ workPhone: z.string().optional().nullable(),
    /** The email address of the office */ email: z.string().optional().nullable(),
    /** App specific metadata to set against the office */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
/** Request body used to create a new office */
export type CreateOfficeModel =
  /** Request body used to create a new office */
  {
    name: /** The name of the office */ string
    active?: /** A flag denoting whether or not this office is active */ boolean | null | undefined
    manager?: /** The name of the office manager */ string | null | undefined
    address: CreateOfficeAddressModel
    workPhone?: /** The work phone number of the office */ string | null | undefined
    email?: /** The email address of the office */ string | null | undefined
    metadata?:
      | /** App specific metadata to set against the office */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
