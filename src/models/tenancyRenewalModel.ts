import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { tenancyRentChangeModel, TenancyRentChangeModel } from '@/models/tenancyRentChangeModel.ts'
import { tenancyLettingFeeModel, TenancyLettingFeeModel } from '@/models/tenancyLettingFeeModel.ts'
import { tenancyManagementFeeModel, TenancyManagementFeeModel } from '@/models/tenancyManagementFeeModel.ts'

/** Represents a tenancies renewal negotiation */
export const tenancyRenewalModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the renewal negotiation */ id: z.string().nullable().optional(),
  /** The date and time when the renewal was created */ created: z.string().nullable().optional(),
  /** The date and time when the renewal was last modified */ modified: z.string().nullable().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the renewal */
  negotiatorId: z.string().nullable().optional(),
  /** The tenancies rent amount */ rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().nullable().optional(),
  rentChange: tenancyRentChangeModel.nullable().optional(),
  /** The unique identifier of the tenancy associated to the renewal */ tenancyId: z.string().nullable().optional(),
  lettingFee: tenancyLettingFeeModel.nullable().optional(),
  managementFee: tenancyManagementFeeModel.nullable().optional(),
  /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Represents a tenancies renewal negotiation */
export type TenancyRenewalModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the renewal negotiation */ string | undefined
  created?: /** The date and time when the renewal was created */ string | undefined
  modified?: /** The date and time when the renewal was last modified */ string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  status?: /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator associated to the renewal */ string | undefined
  rent?: /** The tenancies rent amount */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/4weeks/annually) */ string | undefined
  rentChange?: TenancyRentChangeModel | undefined
  tenancyId?: /** The unique identifier of the tenancy associated to the renewal */ string | undefined
  lettingFee?: TenancyLettingFeeModel | undefined
  managementFee?: TenancyManagementFeeModel | undefined
  _eTag?: /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
  string | undefined
}
