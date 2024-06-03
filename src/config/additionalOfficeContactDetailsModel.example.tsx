import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AdditionalOfficeContactDetailsModel } from '@/schemas/index.ts'

export const additionalOfficeContactDetailsModelConfig: ModelConfig<AdditionalOfficeContactDetailsModel> = {
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