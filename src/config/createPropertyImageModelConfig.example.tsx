import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePropertyImageModel } from '@/schemas/createPropertyImageModel.generated.tsx'

export const createPropertyImageModelConfig: ModelConfig<CreatePropertyImageModel> = {
  data: {
    key: 'data',
    label: 'data',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  fileUrl: {
    key: 'fileUrl',
    label: 'fileUrl',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  caption: {
    key: 'caption',
    label: 'caption',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
