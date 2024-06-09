import { z } from 'zod'
import {
  propertyLettingLicenceApplicationModel,
  PropertyLettingLicenceApplicationModel,
} from '@/schemas/propertyLettingLicenceApplicationModel.generated.tsx'

/** Representation of property details specific to property Licencing */
export const propertyLettingLicencingModel =
  /** Representation of property details specific to property Licencing */
  z.object({
    /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
    licenceRequired: z.boolean().optional(),
    /** The type of licence (additional/mandatory/none/notSet/selective) */ licenceType: z.string().optional(),
    /** The number of households that the licence permits in the property */ households: z.number().int().optional(),
    /** The number of occupants that the licence permits in the property */ occupants: z.number().int().optional(),
    /** A flag determining whether or not the property is above commercial premises */
    aboveCommercialPremises: z.boolean().optional(),
    application: propertyLettingLicenceApplicationModel.optional(),
  })
/** Representation of property details specific to property Licencing */
export type PropertyLettingLicencingModel =
  /** Representation of property details specific to property Licencing */
  {
    licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
    boolean | undefined
    licenceType?: /** The type of licence (additional/mandatory/none/notSet/selective) */ string | undefined
    households?: /** The number of households that the licence permits in the property */ number | undefined
    occupants?: /** The number of occupants that the licence permits in the property */ number | undefined
    aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
    boolean | undefined
    application?: PropertyLettingLicenceApplicationModel | undefined
  }
