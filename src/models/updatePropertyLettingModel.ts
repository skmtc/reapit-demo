import { z } from 'zod'

/** Request body used to update details specific to lettings marketing on an existing property */
export const updatePropertyLettingModel = z.object({
  /** The date the property was marked as to let */ instructed: z.string().nullable().optional(),
  /** The date the property is next available from */ availableFrom: z.string().nullable().optional(),
  /** The date the property is available to */ availableTo: z.string().nullable().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().nullable().optional(),
  /** The rent being charged for the property */ rent: z.number().nullable().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** Details of any bills that are included in the rent */ rentIncludes: z.string().nullable().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The acceptable letting terms (short/long/any) */ term: z.string().nullable().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().nullable().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().nullable().optional(),
  /** The unique identifier of the landlord letting the property */ landlordId: z.string().nullable().optional(),
  /** The unique identifier of the document used for the lettings brochure */
  brochureId: z.string().nullable().optional(),
  /** A note to accompany any works orders created for the property */ worksOrderNote: z.string().nullable().optional(),
  /** Sets the minimum number of months the property can be let out for */
  minimumTerm: z.number().int().nullable().optional(),
  /** Request body used to update the commission fee for a property */
  managementFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The commission letting fee amount */ amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to update the commission fee for a property */
  lettingFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The commission letting fee amount */ amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().nullable().optional(),
  /** Representation of property details specific to utilities */
  utilities: z
    .object({
      /** A flag denoting whether or not the property has gas connected */ hasGas: z.boolean().nullable().optional(),
      /** The unique identifier of the company supplying the gas to the property */
      gasCompanyId: z.string().nullable().optional(),
      /** The gas meter point number */ gasMeterPoint: z.string().nullable().optional(),
      /** The unique identifier of the company supplying the electricity to the property */
      electricityCompanyId: z.string().nullable().optional(),
      /** The electricity meter point number */ electricityMeterPoint: z.string().nullable().optional(),
      /** The unique identifier of the company supplying the water to the property */
      waterCompanyId: z.string().nullable().optional(),
      /** The water meter point number */ waterMeterPoint: z.string().nullable().optional(),
      /** The unique identifier of the company supplying the telephone to the property */
      telephoneCompanyId: z.string().nullable().optional(),
      /** The unique identifier of the company supplying the internet to the property */
      internetCompanyId: z.string().nullable().optional(),
      /** The unique identifier of the company supplying the cable tv to the property */
      cableTvCompanyId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of a property details related to deposit */
  deposit: z
    .object({
      /** The type of deposit (weeks/months/fixed) */ type: z.string().nullable().optional(),
      /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
      amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to update details specific to rent insurance associated with a lettings property */
  rentInsurance: z
    .object({
      /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
      status: z.string().nullable().optional(),
      /** The reference number of the insurance policy when rent protection insurance has been taken out */
      referenceNumber: z.string().nullable().optional(),
      /** The insurance policy start date */ start: z.string().nullable().optional(),
      /** The insurance policy end date */ end: z.string().nullable().optional(),
      /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
      cancelledReasonId: z.string().nullable().optional(),
      /** A textual comment or note entered by the agent when an insurance policy was cancelled */
      cancelledComment: z.string().nullable().optional(),
      /** Flag indicating whether or not the insurance policy should auto renew */
      autoRenew: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of property details specific to property Licencing */
  licencing: z
    .object({
      /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
      licenceRequired: z.boolean().nullable().optional(),
      /** The type of licence (additional/mandatory/none/selective) */ licenceType: z.string().nullable().optional(),
      /** The number of households that the licence permits in the property */
      households: z.number().int().nullable().optional(),
      /** The number of occupants that the licence permits in the property */
      occupants: z.number().int().nullable().optional(),
      /** A flag determining whether or not the property is above commercial premises */
      aboveCommercialPremises: z.boolean().nullable().optional(),
      /** Representation of property details specific to property licence application */
      application: z
        .object({
          /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
          status: z.string().nullable().optional(),
          /** The licence application reference number */ referenceNumber: z.string().nullable().optional(),
          /** The date the licence was applied for */ date: z.string().nullable().optional(),
          /** The date the licence application was granted */ granted: z.string().nullable().optional(),
          /** The date the licence will expire */ expiry: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
})
