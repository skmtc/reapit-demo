import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { AdditionalContactDetailModel } from '@/schemas/index.ts'

export const additionalContactDetailModelConfig: ModelConfig2<AdditionalContactDetailModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  value: {
    key: 'value',
    label: 'value',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
