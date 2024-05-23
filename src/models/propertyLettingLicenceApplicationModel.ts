import { z } from 'zod'

/** Representation of property details specific to property licence application */
export const propertyLettingLicenceApplicationModel = z.object({
  /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  status: z.string().nullable().optional(),
  /** The licence application reference number */ referenceNumber: z.string().nullable().optional(),
  /** The date the licence was applied for */ date: z.string().nullable().optional(),
  /** The date the licence application was granted */ granted: z.string().nullable().optional(),
  /** The date the licence will expire */ expiry: z.string().nullable().optional(),
})
