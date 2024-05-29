import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyRuralModel } from '@/schemas/index.ts'

export const propertyRuralModelConfig: ModelConfig2<PropertyRuralModel> = {
  tenureId: {
    key: 'tenureId',
    label: 'tenureId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  buildingsDescription: {
    key: 'buildingsDescription',
    label: 'buildingsDescription',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  landDescription: {
    key: 'landDescription',
    label: 'landDescription',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
