import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyInternalAreaModel } from '@/schemas/index.ts'

export const propertyInternalAreaModelConfig: ModelConfig<PropertyInternalAreaModel> = {
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
