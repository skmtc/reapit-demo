import { z } from 'zod'

/** Representation of property details specific to property licence application */
export const propertyLettingLicenceApplicationModel =
  /** Representation of property details specific to property licence application */
  z.object({
    /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
    status: z.string().optional(),
    /** The licence application reference number */ referenceNumber: z.string().optional(),
    /** The date the licence was applied for */ date: z.string().optional(),
    /** The date the licence application was granted */ granted: z.string().optional(),
    /** The date the licence will expire */ expiry: z.string().optional(),
  })
/** Representation of property details specific to property licence application */
export type PropertyLettingLicenceApplicationModel =
  /** Representation of property details specific to property licence application */
  {
    status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
    string | undefined
    referenceNumber?: /** The licence application reference number */ string | undefined
    date?: /** The date the licence was applied for */ string | undefined
    granted?: /** The date the licence application was granted */ string | undefined
    expiry?: /** The date the licence will expire */ string | undefined
  }
