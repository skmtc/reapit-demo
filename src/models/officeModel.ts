import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { officeAddressModel, OfficeAddressModel } from '@/models/officeAddressModel.ts'
import {
  additionalOfficeContactDetailsModel,
  AdditionalOfficeContactDetailsModel,
} from '@/models/additionalOfficeContactDetailsModel.ts'

/** Representation of an office */
export const officeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the office */ id: z.string().nullable().optional(),
  /** The date and time when the office was created */ created: z.string().nullable().optional(),
  /** The date and time when the office was last modified */ modified: z.string().nullable().optional(),
  /** The name of the office */ name: z.string().nullable().optional(),
  /** The name of the office manager */ manager: z.string().nullable().optional(),
  /** A flag denoting whether or not this office is active */ active: z.boolean().nullable().optional(),
  /** The region that the office is in */ region: z.string().nullable().optional(),
  address: officeAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalOfficeContactDetailsModel).nullable().optional(),
  /** The work phone number of the office */ workPhone: z.string().nullable().optional(),
  /** The email address of the office */ email: z.string().nullable().optional(),
  /** App specific metadata that has been set against the office */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the office. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Representation of an office */
export type OfficeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the office */ string | undefined
  created?: /** The date and time when the office was created */ string | undefined
  modified?: /** The date and time when the office was last modified */ string | undefined
  name?: /** The name of the office */ string | undefined
  manager?: /** The name of the office manager */ string | undefined
  active?: /** A flag denoting whether or not this office is active */ boolean | undefined
  region?: /** The region that the office is in */ string | undefined
  address?: OfficeAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalOfficeContactDetailsModel> | undefined
  workPhone?: /** The work phone number of the office */ string | undefined
  email?: /** The email address of the office */ string | undefined
  metadata?: /** App specific metadata that has been set against the office */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the office. Used for managing update concurrency */ string | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
}
