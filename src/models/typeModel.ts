import { z } from 'zod'
import { listItemModel } from '@/models/listItemModel.ts'

/** Representation of all of the available configurable items */
export const typeModel = z.object({
  /** A list of configurable agency types */ agencyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable appointment types */ appointmentTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable applicant statuses */ applicantStatuses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable board statuses */ boardStatuses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable buying positions */ buyingPositions: z.array(listItemModel).nullable().optional(),
  /** A list of configurable buying reasons */ buyingReasons: z.array(listItemModel).nullable().optional(),
  /** A list of configurable certificate types */ certificateTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable company types */ companyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable contact categories */ contactCategories: z.array(listItemModel).nullable().optional(),
  /** A list of configurable document types */ documentTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable identity document types */
  identityDocumentTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable journal entry types */ journalEntryTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable key types */ keyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable follow up responses */ followUpResponses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable selling reasons */ sellingReasons: z.array(listItemModel).nullable().optional(),
  /** A list of configurable rent insurance cancellation reasons */
  rentInsuranceCancellationReasons: z.array(listItemModel).nullable().optional(),
  /** A list of configurable renting positions */ rentingPositions: z.array(listItemModel).nullable().optional(),
  /** A list of configurable supplier types */ supplierTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable task types */ taskTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable tenancy legal status */ tenancyLegalStatuses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable tenancy types */ tenancyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable vendor types */ vendorTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable works order types */ worksOrderTypes: z.array(listItemModel).nullable().optional(),
})
