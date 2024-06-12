import {
  PropertyLettingLicenceApplicationModel,
  propertyLettingLicenceApplicationModel,
} from '@/schemas/propertyLettingLicenceApplicationModel.generated.tsx'
import { z } from 'zod'

/** Representation of property details specific to property Licencing */
export type PropertyLettingLicencingModel =
  /** Representation of property details specific to property Licencing */
  {
    licenceRequired?:
      | /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
      boolean
      | null
      | undefined
    licenceType?: /** The type of licence (additional/mandatory/none/notSet/selective) */ string | null | undefined
    households?: /** The number of households that the licence permits in the property */ number | null | undefined
    occupants?: /** The number of occupants that the licence permits in the property */ number | null | undefined
    aboveCommercialPremises?:
      | /** A flag determining whether or not the property is above commercial premises */
      boolean
      | null
      | undefined
    application?: PropertyLettingLicenceApplicationModel | null | undefined
  }
/** Representation of property details specific to property Licencing */
export const propertyLettingLicencingModel =
  /** Representation of property details specific to property Licencing */
  z.object({
    /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
    licenceRequired: z.boolean().optional().nullable(),
    /** The type of licence (additional/mandatory/none/notSet/selective) */
    licenceType: z.string().optional().nullable(),
    /** The number of households that the licence permits in the property */
    households: z.number().int().optional().nullable(),
    /** The number of occupants that the licence permits in the property */
    occupants: z.number().int().optional().nullable(),
    /** A flag determining whether or not the property is above commercial premises */
    aboveCommercialPremises: z.boolean().optional().nullable(),
    application: propertyLettingLicenceApplicationModel.optional().nullable(),
  })
