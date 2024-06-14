import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateBulkJournalEntryModel } from '@/schemas/createBulkJournalEntryModel.generated.tsx'

export const createBulkJournalEntryModelConfig: ModelConfig<CreateBulkJournalEntryModel> = {
  createJournalEntry: {
    key: 'createJournalEntry',
    label: 'createJournalEntry',
    defaultValue: [],
    placeholder: 'createJournalEntry',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
