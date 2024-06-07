import { z } from 'zod'
import { createJournalEntryModel, CreateJournalEntryModel } from '@/schemas/createJournalEntryModel.generated.tsx'

/** Request body to create bulk journal entry */
export const createBulkJournalEntryModel = /** Request body to create bulk journal entry */
z.object({createJournalEntry: /** Collection of journal entries */
z.array(createJournalEntryModel).optional()});
/** Request body to create bulk journal entry */
export type CreateBulkJournalEntryModel = /** Request body to create bulk journal entry */
{createJournalEntry?: /** Collection of journal entries */
Array<CreateJournalEntryModel> | undefined};