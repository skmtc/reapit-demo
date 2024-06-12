import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateNotificationModel } from '@/schemas/createNotificationModel.generated.tsx'

export const createNotificationModelConfig: ModelConfig<CreateNotificationModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  subType: {
    key: 'subType',
    label: 'subType',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  products: {
    key: 'products',
    label: 'products',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  targets: {
    key: 'targets',
    label: 'targets',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  payload: {
    key: 'payload',
    label: 'payload',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
