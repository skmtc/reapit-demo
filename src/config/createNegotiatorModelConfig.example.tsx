import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateNegotiatorModel } from '@/schemas/createNegotiatorModel.generated.tsx'

export const createNegotiatorModelConfig: ModelConfig<CreateNegotiatorModel> = {
  name: {
    key: 'name',
    label: 'name',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  jobTitle: {
    key: 'jobTitle',
    label: 'jobTitle',
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
  officeId: {
    key: 'officeId',
    label: 'officeId',
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
  mobilePhone: {
    key: 'mobilePhone',
    label: 'mobilePhone',
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
  diaryNegotiatorIds: {
    key: 'diaryNegotiatorIds',
    label: 'diaryNegotiatorIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  diaryOfficeIds: {
    key: 'diaryOfficeIds',
    label: 'diaryOfficeIds',
    defaultValue: [],
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
