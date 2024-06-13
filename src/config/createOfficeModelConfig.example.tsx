import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'

export const createOfficeModelConfig: ModelConfig<CreateOfficeModel> = {
  name: {
    key: 'name',
    label: 'name',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  manager: {
    key: 'manager',
    label: 'manager',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  address: {
    key: 'address',
    label: 'address',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  workPhone: {
    key: 'workPhone',
    label: 'workPhone',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  email: {
    key: 'email',
    label: 'email',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
