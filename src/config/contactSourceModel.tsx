import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ContactSourceModel } from '@/schemas/index.ts'

export const contactSourceModelConfig: ModelConfig2<ContactSourceModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
