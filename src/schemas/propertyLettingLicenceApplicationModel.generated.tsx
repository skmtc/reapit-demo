import { z } from 'zod'

/** Representation of property details specific to property licence application */
export const propertyLettingLicenceApplicationModel =
  /** Representation of property details specific to property licence application */
  z.object({
    /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
    status: z.string().optional().nullable(),
    /** The licence application reference number */ referenceNumber: z.string().optional().nullable(),
    /** The date the licence was applied for */ date: z.string().optional().nullable(),
    /** The date the licence application was granted */ granted: z.string().optional().nullable(),
    /** The date the licence will expire */ expiry: z.string().optional().nullable(),
  })
/** Representation of property details specific to property licence application */
export type PropertyLettingLicenceApplicationModel =
  /** Representation of property details specific to property licence application */
  {
    status?:
      | /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
      string
      | null
      | undefined
    referenceNumber?: /** The licence application reference number */ string | null | undefined
    date?: /** The date the licence was applied for */ string | null | undefined
    granted?: /** The date the licence application was granted */ string | null | undefined
    expiry?: /** The date the licence will expire */ string | null | undefined
  }
