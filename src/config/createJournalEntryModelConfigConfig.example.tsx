import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateJournalEntryModel } from '@/schemas/createJournalEntryModel.generated.tsx'

export const createJournalEntryModelConfig: ModelConfig<CreateJournalEntryModel> = {typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,associatedType: {
      key: 'associatedType',
      label: 'associatedType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,associatedId: {
      key: 'associatedId',
      label: 'associatedId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};