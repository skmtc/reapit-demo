import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { TenancyRentChangeModel, tenancyRentChangeModel } from '@/schemas/tenancyRentChangeModel.generated.tsx'
import { TenancyLettingFeeModel, tenancyLettingFeeModel } from '@/schemas/tenancyLettingFeeModel.generated.tsx'
import { TenancyManagementFeeModel, tenancyManagementFeeModel } from '@/schemas/tenancyManagementFeeModel.generated.tsx'
import { z } from 'zod'

export type TenancyRenewalModel =
  /** Represents a tenancies renewal negotiation */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the renewal negotiation */ string | null | undefined
    created?: /** The date and time when the renewal was created */ string | null | undefined
    modified?: /** The date and time when the renewal was last modified */ string | null | undefined
    startDate?: string | null | undefined
    endDate?: string | null | undefined
    status?:
      | /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
      string
      | null
      | undefined
    negotiatorId?: /** The unique identifier of the negotiator associated to the renewal */ string | null | undefined
    rent?: /** The tenancies rent amount */ number | null | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/4weeks/annually) */ string | null | undefined
    rentChange?: TenancyRentChangeModel | null | undefined
    tenancyId?: /** The unique identifier of the tenancy associated to the renewal */ string | null | undefined
    lettingFee?: TenancyLettingFeeModel | null | undefined
    managementFee?: TenancyManagementFeeModel | null | undefined
    _eTag?:
      | /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Represents a tenancies renewal negotiation */
export const tenancyRenewalModel =
  /** Represents a tenancies renewal negotiation */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the renewal negotiation */ id: z.string().optional().nullable(),
    /** The date and time when the renewal was created */ created: z.string().optional().nullable(),
    /** The date and time when the renewal was last modified */ modified: z.string().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
    status: z.string().optional().nullable(),
    /** The unique identifier of the negotiator associated to the renewal */
    negotiatorId: z.string().optional().nullable(),
    /** The tenancies rent amount */ rent: z.number().optional().nullable(),
    /** The rent collection frequency (weekly/monthly/4weeks/annually) */
    rentFrequency: z.string().optional().nullable(),
    rentChange: tenancyRentChangeModel.optional().nullable(),
    /** The unique identifier of the tenancy associated to the renewal */ tenancyId: z.string().optional().nullable(),
    lettingFee: tenancyLettingFeeModel.optional().nullable(),
    managementFee: tenancyManagementFeeModel.optional().nullable(),
    /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
