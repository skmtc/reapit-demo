import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ValidationMessageModel } from '@/schemas/index.ts'

export const validationMessageModelConfig: ModelConfig2<ValidationMessageModel> = {
  field: {
    key: 'field',
    label: 'field',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  message: {
    key: 'message',
    label: 'message',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
