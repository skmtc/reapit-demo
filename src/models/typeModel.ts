import { z } from 'zod'

/** Representation of all of the available configurable items */
export const typeModel = z.object({
  /** A list of configurable agency types */
  agencyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable appointment types */
  appointmentTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable applicant statuses */
  applicantStatuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable board statuses */
  boardStatuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable buying positions */
  buyingPositions: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable buying reasons */
  buyingReasons: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable certificate types */
  certificateTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable company types */
  companyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable contact categories */
  contactCategories: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable document types */
  documentTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable identity document types */
  identityDocumentTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable journal entry types */
  journalEntryTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable key types */
  keyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable follow up responses */
  followUpResponses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable selling reasons */
  sellingReasons: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable rent insurance cancellation reasons */
  rentInsuranceCancellationReasons: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable renting positions */
  rentingPositions: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable supplier types */
  supplierTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable task types */
  taskTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable tenancy legal status */
  tenancyLegalStatuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable tenancy types */
  tenancyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable vendor types */
  vendorTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** A list of configurable works order types */
  worksOrderTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().nullable().optional(),
        /** The textual value for the list item */ value: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
