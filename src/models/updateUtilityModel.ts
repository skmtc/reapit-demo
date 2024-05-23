import { z } from 'zod'

/** Representation of property details specific to utilities */
export const updateUtilityModel = z.object({
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
