import { z } from 'zod'
import { createJournalEntryModel, CreateJournalEntryModel } from '@/schemas/createJournalEntryModel.generated.tsx'

/** Request body to create bulk journal entry */
export const createBulkJournalEntryModel =
  /** Request body to create bulk journal entry */
  z.object({
    /** Collection of journal entries */ createJournalEntry: z.array(createJournalEntryModel).optional().nullable(),
  })
/** Request body to create bulk journal entry */
export type CreateBulkJournalEntryModel =
  /** Request body to create bulk journal entry */
  { createJournalEntry?: /** Collection of journal entries */ Array<CreateJournalEntryModel> | null | undefined }
