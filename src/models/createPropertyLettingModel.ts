import { z } from 'zod'

/** Request body used to set details specific to lettings marketing on a new property */
export const createPropertyLettingModel = z.object({
  /** The date the property was marked as to let */ instructed: z.string().nullable().optional(),
  /** The date the property is available from */ availableFrom: z.string().nullable().optional(),
  /** The date the property is available to */ availableTo: z.string().nullable().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().nullable().optional(),
  /** The rent being charged for the property */ rent: z.number().nullable().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** Details of any bills that are included in the rent */ rentIncludes: z.string().nullable().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().nullable().optional(),
  /** The acceptable letting terms (short/long/any) */ term: z.string().nullable().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the landlord letting the property */ landlordId: z.string().nullable().optional(),
  /** A note to accompany any works orders created for the property */ worksOrderNote: z.string().nullable().optional(),
  /** Sets the minimum number of months the property can be let out for */
  minimumTerm: z.number().int().nullable().optional(),
  /** Request body used to set the commission fee for a property */
  managementFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The commission letting fee amount */ amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set the commission fee for a property */
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
      /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
      amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
})
