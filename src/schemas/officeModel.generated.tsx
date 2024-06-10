import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { officeAddressModel, OfficeAddressModel } from '@/schemas/officeAddressModel.generated.tsx'
import {
  additionalOfficeContactDetailsModel,
  AdditionalOfficeContactDetailsModel,
} from '@/schemas/additionalOfficeContactDetailsModel.generated.tsx'

/** Representation of an office */
export const officeModel =
  /** Representation of an office */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the office */ id: z.string().optional().nullable(),
    /** The date and time when the office was created */ created: z.string().optional().nullable(),
    /** The date and time when the office was last modified */ modified: z.string().optional().nullable(),
    /** The name of the office */ name: z.string().optional().nullable(),
    /** The name of the office manager */ manager: z.string().optional().nullable(),
    /** A flag denoting whether or not this office is active */ active: z.boolean().optional().nullable(),
    /** The region that the office is in */ region: z.string().optional().nullable(),
    address: officeAddressModel.optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalOfficeContactDetailsModel).optional().nullable(),
    /** The work phone number of the office */ workPhone: z.string().optional().nullable(),
    /** The email address of the office */ email: z.string().optional().nullable(),
    /** App specific metadata that has been set against the office */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the office. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional().nullable(),
  })
export type OfficeModel =
  /** Representation of an office */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the office */ string | null | undefined
    created?: /** The date and time when the office was created */ string | null | undefined
    modified?: /** The date and time when the office was last modified */ string | null | undefined
    name?: /** The name of the office */ string | null | undefined
    manager?: /** The name of the office manager */ string | null | undefined
    active?: /** A flag denoting whether or not this office is active */ boolean | null | undefined
    region?: /** The region that the office is in */ string | null | undefined
    address?: OfficeAddressModel | null | undefined
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalOfficeContactDetailsModel>
      | null
      | undefined
    workPhone?: /** The work phone number of the office */ string | null | undefined
    email?: /** The email address of the office */ string | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the office */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the office. Used for managing update concurrency */
      string
      | null
      | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | null | undefined
  }
