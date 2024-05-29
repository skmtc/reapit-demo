import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyRoomModel } from '@/schemas/index.ts'

export const propertyRoomModelConfig: ModelConfig<PropertyRoomModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  dimensions: {
    key: 'dimensions',
    label: 'dimensions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  dimensionsAlt: {
    key: 'dimensionsAlt',
    label: 'dimensionsAlt',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
