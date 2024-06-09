import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateNegotiatorModel } from '@/schemas/createNegotiatorModel.generated.tsx'

export const createNegotiatorModelConfig: ModelConfig<CreateNegotiatorModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  jobTitle: {
    key: 'jobTitle',
    label: 'jobTitle',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeId: {
    key: 'officeId',
    label: 'officeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  workPhone: {
    key: 'workPhone',
    label: 'workPhone',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  mobilePhone: {
    key: 'mobilePhone',
    label: 'mobilePhone',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  email: {
    key: 'email',
    label: 'email',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  diaryNegotiatorIds: {
    key: 'diaryNegotiatorIds',
    label: 'diaryNegotiatorIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  diaryOfficeIds: {
    key: 'diaryOfficeIds',
    label: 'diaryOfficeIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
