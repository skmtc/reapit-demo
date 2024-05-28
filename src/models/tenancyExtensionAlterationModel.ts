import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import {
  tenancyExtensionAlterationFeeModel,
  TenancyExtensionAlterationFeeModel,
} from '@/models/tenancyExtensionAlterationFeeModel.ts'

/** Represents a tenancy extension or alteration */
export const tenancyExtensionAlterationModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the extension or alteration */ id: z.string().nullable().optional(),
  /** The date and time when the extension or alteration was created */ created: z.string().nullable().optional(),
  /** The date and time when the extension or alteration was last modified */
  modified: z.string().nullable().optional(),
  /** The start date of the extension or alteration */ startDate: z.string().nullable().optional(),
  /** The end date of the extension (alterations do not have an end date) */ endDate: z.string().nullable().optional(),
  /** The type of entry (extension|alteration) */ type: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the extension or alteration */
  negotiatorId: z.string().nullable().optional(),
  /** The extension or alteration rent amount */ rent: z.number().nullable().optional(),
  /** The rent frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().nullable().optional(),
  /** The unique identifier of the tenancy associated to the extension or alteration */
  tenancyId: z.string().nullable().optional(),
  fee: tenancyExtensionAlterationFeeModel.nullable().optional(),
  /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Represents a tenancy extension or alteration */
export type TenancyExtensionAlterationModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the extension or alteration */ string | undefined
  created?: /** The date and time when the extension or alteration was created */ string | undefined
  modified?: /** The date and time when the extension or alteration was last modified */ string | undefined
  startDate?: /** The start date of the extension or alteration */ string | undefined
  endDate?: /** The end date of the extension (alterations do not have an end date) */ string | undefined
  type?: /** The type of entry (extension|alteration) */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator associated to the extension or alteration */
  string | undefined
  rent?: /** The extension or alteration rent amount */ number | undefined
  rentFrequency?: /** The rent frequency (weekly/monthly/4weeks/annually) */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy associated to the extension or alteration */ string | undefined
  fee?: TenancyExtensionAlterationFeeModel | undefined
  _eTag?: /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
  string | undefined
}
