import { z } from 'zod'
import { createJournalEntryModel, CreateJournalEntryModel } from '@/models/createJournalEntryModel.ts'

/** Request body to create bulk journal entry */
export const createBulkJournalEntryModel = z.object({
  /** Collection of journal entries */ createJournalEntry: z.array(createJournalEntryModel).nullable().optional(),
})
/** Request body to create bulk journal entry */
export type CreateBulkJournalEntryModel = {
  createJournalEntry?: /** Collection of journal entries */ Array<CreateJournalEntryModel> | undefined
}
