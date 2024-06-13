import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyCheckModel } from '@/schemas/createTenancyCheckModel.generated.tsx'

export const createTenancyCheckModelConfig: ModelConfig<CreateTenancyCheckModel> = {
  description: {
    key: 'description',
    label: 'description',
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
  status: {
    key: 'status',
    label: 'status',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkTypeId: {
    key: 'checkTypeId',
    label: 'checkTypeId',
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
