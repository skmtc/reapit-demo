import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateIdentityCheckModel } from '@/schemas/createIdentityCheckModel.generated.tsx'

export const createIdentityCheckModelConfig: ModelConfig<CreateIdentityCheckModel> = {
  contactId: {
    key: 'contactId',
    label: 'contactId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkDate: {
    key: 'checkDate',
    label: 'checkDate',
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
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  identityDocument1: {
    key: 'identityDocument1',
    label: 'identityDocument1',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  identityDocument2: {
    key: 'identityDocument2',
    label: 'identityDocument2',
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
