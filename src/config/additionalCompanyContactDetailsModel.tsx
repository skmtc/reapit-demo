import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { AdditionalCompanyContactDetailsModel } from '@/schemas/index.ts'

export const additionalCompanyContactDetailsModelConfig: ModelConfig2<AdditionalCompanyContactDetailsModel> = {
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
