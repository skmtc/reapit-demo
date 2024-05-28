import { UpdateLicenceApplicationModel } from '@/models/updateLicenceApplicationModel.ts'

/** Representation of property details specific to property Licencing */
export type UpdatePropertyLettingLicencingModel = {
  licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  boolean | undefined
  licenceType?: /** The type of licence (additional/mandatory/none/selective) */ string | undefined
  households?: /** The number of households that the licence permits in the property */ number | undefined
  occupants?: /** The number of occupants that the licence permits in the property */ number | undefined
  aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
  boolean | undefined
  application?: UpdateLicenceApplicationModel | undefined
}
