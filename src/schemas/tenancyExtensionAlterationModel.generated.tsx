import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import {
  TenancyExtensionAlterationFeeModel,
  tenancyExtensionAlterationFeeModel,
} from '@/schemas/tenancyExtensionAlterationFeeModel.generated.tsx'
import { z } from 'zod'

export type TenancyExtensionAlterationModel =
  /** Represents a tenancy extension or alteration */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the extension or alteration */ string | null | undefined
    created?: /** The date and time when the extension or alteration was created */ string | null | undefined
    modified?: /** The date and time when the extension or alteration was last modified */ string | null | undefined
    startDate?: /** The start date of the extension or alteration */ string | null | undefined
    endDate?: /** The end date of the extension (alterations do not have an end date) */ string | null | undefined
    type?: /** The type of entry (extension|alteration) */ string | null | undefined
    negotiatorId?:
      | /** The unique identifier of the negotiator associated to the extension or alteration */
      string
      | null
      | undefined
    rent?: /** The extension or alteration rent amount */ number | null | undefined
    rentFrequency?: /** The rent frequency (weekly/monthly/4weeks/annually) */ string | null | undefined
    tenancyId?:
      | /** The unique identifier of the tenancy associated to the extension or alteration */
      string
      | null
      | undefined
    fee?: TenancyExtensionAlterationFeeModel | null | undefined
    _eTag?:
      | /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Represents a tenancy extension or alteration */
export const tenancyExtensionAlterationModel =
  /** Represents a tenancy extension or alteration */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the extension or alteration */ id: z.string().optional().nullable(),
    /** The date and time when the extension or alteration was created */ created: z.string().optional().nullable(),
    /** The date and time when the extension or alteration was last modified */
    modified: z.string().optional().nullable(),
    /** The start date of the extension or alteration */ startDate: z.string().optional().nullable(),
    /** The end date of the extension (alterations do not have an end date) */
    endDate: z.string().optional().nullable(),
    /** The type of entry (extension|alteration) */ type: z.string().optional().nullable(),
    /** The unique identifier of the negotiator associated to the extension or alteration */
    negotiatorId: z.string().optional().nullable(),
    /** The extension or alteration rent amount */ rent: z.number().optional().nullable(),
    /** The rent frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().optional().nullable(),
    /** The unique identifier of the tenancy associated to the extension or alteration */
    tenancyId: z.string().optional().nullable(),
    fee: tenancyExtensionAlterationFeeModel.optional().nullable(),
    /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
