import { z } from 'zod'
import {
  propertyLettingLicenceApplicationModel,
  PropertyLettingLicenceApplicationModel,
} from '@/models/propertyLettingLicenceApplicationModel.ts'

/** Representation of property details specific to property Licencing */
export const propertyLettingLicencingModel = z.object({
  /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  licenceRequired: z.boolean().nullable().optional(),
  /** The type of licence (additional/mandatory/none/notSet/selective) */ licenceType: z.string().nullable().optional(),
  /** The number of households that the licence permits in the property */
  households: z.number().int().nullable().optional(),
  /** The number of occupants that the licence permits in the property */
  occupants: z.number().int().nullable().optional(),
  /** A flag determining whether or not the property is above commercial premises */
  aboveCommercialPremises: z.boolean().nullable().optional(),
  application: propertyLettingLicenceApplicationModel.nullable().optional(),
})
/** Representation of property details specific to property Licencing */
export type PropertyLettingLicencingModel = {
  licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  boolean | undefined
  licenceType?: /** The type of licence (additional/mandatory/none/notSet/selective) */ string | undefined
  households?: /** The number of households that the licence permits in the property */ number | undefined
  occupants?: /** The number of occupants that the licence permits in the property */ number | undefined
  aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
  boolean | undefined
  application?: PropertyLettingLicenceApplicationModel | undefined
}
