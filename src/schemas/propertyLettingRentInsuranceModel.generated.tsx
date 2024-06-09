import { z } from 'zod'

/** Representation of property details specific to rent insurance associated with a lettings property */
export const propertyLettingRentInsuranceModel =
  /** Representation of property details specific to rent insurance associated with a lettings property */
  z.object({
    /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
    status: z.string().optional(),
    /** The reference number of the insurance policy when rent protection insurance has been taken out */
    referenceNumber: z.string().optional(),
    /** The insurance policy start date */ start: z.string().optional(),
    /** The insurance policy end date */ end: z.string().optional(),
    /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
    cancelledReasonId: z.string().optional(),
    /** A textual comment or note entered by the agent when an insurance policy was cancelled */
    cancelledComment: z.string().optional(),
    /** Flag indicating whether or not the insurance policy should auto renew */ autoRenew: z.boolean().optional(),
  })
/** Representation of property details specific to rent insurance associated with a lettings property */
export type PropertyLettingRentInsuranceModel =
  /** Representation of property details specific to rent insurance associated with a lettings property */
  {
    status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
    string | undefined
    referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
    string | undefined
    start?: /** The insurance policy start date */ string | undefined
    end?: /** The insurance policy end date */ string | undefined
    cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
    string | undefined
    cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
    string | undefined
    autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */ boolean | undefined
  }
