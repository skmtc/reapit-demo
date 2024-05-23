import { z } from 'zod'

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
  /** Representation of property details specific to property licence application */
  application: z
    .object({
      /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
      status: z.string().nullable().optional(),
      /** The licence application reference number */ referenceNumber: z.string().nullable().optional(),
      /** The date the licence was applied for */ date: z.string().nullable().optional(),
      /** The date the licence application was granted */ granted: z.string().nullable().optional(),
      /** The date the licence will expire */ expiry: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})
