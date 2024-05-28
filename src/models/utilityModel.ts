import { z } from 'zod'

/** Representation of property details specific to utilities */
export const utilityModel = z.object({
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
/** Representation of property details specific to utilities */
export type UtilityModel = {
  hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | undefined
  gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */ string | undefined
  gasMeterPoint?: /** The gas meter point number */ string | undefined
  electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
  string | undefined
  electricityMeterPoint?: /** The electricity meter point number */ string | undefined
  waterCompanyId?: /** The unique identifier of the company supplying the water to the property */ string | undefined
  waterMeterPoint?: /** The water meter point number */ string | undefined
  telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
  string | undefined
  internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
  string | undefined
  cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
  string | undefined
}
