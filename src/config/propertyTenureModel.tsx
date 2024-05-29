import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyTenureModel } from '@/schemas/index.ts'

export const propertyTenureModelConfig: ModelConfig2<PropertyTenureModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
