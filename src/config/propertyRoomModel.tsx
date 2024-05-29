import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyRoomModel } from '@/schemas/index.ts'

export const propertyRoomModelConfig: ModelConfig2<PropertyRoomModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  dimensions: {
    key: 'dimensions',
    label: 'dimensions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  dimensionsAlt: {
    key: 'dimensionsAlt',
    label: 'dimensionsAlt',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
