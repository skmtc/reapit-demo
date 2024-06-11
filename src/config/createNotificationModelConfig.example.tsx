import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateNotificationModel } from '@/schemas/createNotificationModel.generated.tsx'

export const createNotificationModelConfig: ModelConfig<CreateNotificationModel> = {
  type: {
    key: 'type',
    label: 'type',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  subType: {
    key: 'subType',
    label: 'subType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  products: {
    key: 'products',
    label: 'products',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  targets: {
    key: 'targets',
    label: 'targets',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  payload: {
    key: 'payload',
    label: 'payload',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
