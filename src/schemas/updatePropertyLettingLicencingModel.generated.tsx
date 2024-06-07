import { z } from 'zod'
import { updateLicenceApplicationModel, UpdateLicenceApplicationModel } from '@/schemas/updateLicenceApplicationModel.generated.tsx'

/** Representation of property details specific to property Licencing */
export const updatePropertyLettingLicencingModel = /** Representation of property details specific to property Licencing */
z.object({licenceRequired: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
z.boolean().optional(), licenceType: /** The type of licence (additional/mandatory/none/selective) */
z.string().optional(), households: /** The number of households that the licence permits in the property */
z.number().int().optional(), occupants: /** The number of occupants that the licence permits in the property */
z.number().int().optional(), aboveCommercialPremises: /** A flag determining whether or not the property is above commercial premises */
z.boolean().optional(), application: updateLicenceApplicationModel.optional()});
/** Representation of property details specific to property Licencing */
export type UpdatePropertyLettingLicencingModel = /** Representation of property details specific to property Licencing */
{licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
boolean | undefined, licenceType?: /** The type of licence (additional/mandatory/none/selective) */
string | undefined, households?: /** The number of households that the licence permits in the property */
number | undefined, occupants?: /** The number of occupants that the licence permits in the property */
number | undefined, aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
boolean | undefined, application?: UpdateLicenceApplicationModel | undefined};