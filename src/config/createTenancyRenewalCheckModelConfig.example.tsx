import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyRenewalCheckModel } from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'

export const createTenancyRenewalCheckModelConfig: ModelConfig<CreateTenancyRenewalCheckModel> = {
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
  description: {
    key: 'description',
    label: 'description',
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
