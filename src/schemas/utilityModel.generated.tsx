import { z } from 'zod'

/** Representation of property details specific to utilities */
export const utilityModel = /** Representation of property details specific to utilities */
z.object({hasGas: /** A flag denoting whether or not the property has gas connected */
z.boolean().optional(), gasCompanyId: /** The unique identifier of the company supplying the gas to the property */
z.string().optional(), gasMeterPoint: /** The gas meter point number */
z.string().optional(), electricityCompanyId: /** The unique identifier of the company supplying the electricity to the property */
z.string().optional(), electricityMeterPoint: /** The electricity meter point number */
z.string().optional(), waterCompanyId: /** The unique identifier of the company supplying the water to the property */
z.string().optional(), waterMeterPoint: /** The water meter point number */
z.string().optional(), telephoneCompanyId: /** The unique identifier of the company supplying the telephone to the property */
z.string().optional(), internetCompanyId: /** The unique identifier of the company supplying the internet to the property */
z.string().optional(), cableTvCompanyId: /** The unique identifier of the company supplying the cable tv to the property */
z.string().optional()});
/** Representation of property details specific to utilities */
export type UtilityModel = /** Representation of property details specific to utilities */
{hasGas?: /** A flag denoting whether or not the property has gas connected */
boolean | undefined, gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */
string | undefined, gasMeterPoint?: /** The gas meter point number */
string | undefined, electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
string | undefined, electricityMeterPoint?: /** The electricity meter point number */
string | undefined, waterCompanyId?: /** The unique identifier of the company supplying the water to the property */
string | undefined, waterMeterPoint?: /** The water meter point number */
string | undefined, telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
string | undefined, internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
string | undefined, cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
string | undefined};