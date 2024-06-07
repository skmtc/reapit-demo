import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateBulkJournalEntryModel } from '@/schemas/createBulkJournalEntryModel.generated.tsx'

export const createBulkJournalEntryModelConfig: ModelConfig<CreateBulkJournalEntryModel> = {createJournalEntry: {
      key: 'createJournalEntry',
      label: 'createJournalEntry',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};