import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyExternalAreaModel } from '@/schemas/index.ts'

export const propertyExternalAreaModelConfig: ModelConfig2<PropertyExternalAreaModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  min: {
    key: 'min',
    label: 'min',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  max: {
    key: 'max',
    label: 'max',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
