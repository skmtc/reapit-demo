import { z } from 'zod'

/** Representation of property details specific to utilities */
export type UtilityModel =
  /** Representation of property details specific to utilities */
  {
    hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | null | undefined
    gasCompanyId?:
      | /** The unique identifier of the company supplying the gas to the property */
      string
      | null
      | undefined
    gasMeterPoint?: /** The gas meter point number */ string | null | undefined
    electricityCompanyId?:
      | /** The unique identifier of the company supplying the electricity to the property */
      string
      | null
      | undefined
    electricityMeterPoint?: /** The electricity meter point number */ string | null | undefined
    waterCompanyId?:
      | /** The unique identifier of the company supplying the water to the property */
      string
      | null
      | undefined
    waterMeterPoint?: /** The water meter point number */ string | null | undefined
    telephoneCompanyId?:
      | /** The unique identifier of the company supplying the telephone to the property */
      string
      | null
      | undefined
    internetCompanyId?:
      | /** The unique identifier of the company supplying the internet to the property */
      string
      | null
      | undefined
    cableTvCompanyId?:
      | /** The unique identifier of the company supplying the cable tv to the property */
      string
      | null
      | undefined
  }
/** Representation of property details specific to utilities */
export const utilityModel =
  /** Representation of property details specific to utilities */
  z.object({
    /** A flag denoting whether or not the property has gas connected */ hasGas: z.boolean().optional().nullable(),
    /** The unique identifier of the company supplying the gas to the property */
    gasCompanyId: z.string().optional().nullable(),
    /** The gas meter point number */ gasMeterPoint: z.string().optional().nullable(),
    /** The unique identifier of the company supplying the electricity to the property */
    electricityCompanyId: z.string().optional().nullable(),
    /** The electricity meter point number */ electricityMeterPoint: z.string().optional().nullable(),
    /** The unique identifier of the company supplying the water to the property */
    waterCompanyId: z.string().optional().nullable(),
    /** The water meter point number */ waterMeterPoint: z.string().optional().nullable(),
    /** The unique identifier of the company supplying the telephone to the property */
    telephoneCompanyId: z.string().optional().nullable(),
    /** The unique identifier of the company supplying the internet to the property */
    internetCompanyId: z.string().optional().nullable(),
    /** The unique identifier of the company supplying the cable tv to the property */
    cableTvCompanyId: z.string().optional().nullable(),
  })
