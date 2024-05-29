import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { StaffModel } from '@/schemas/index.ts'

export const staffModelConfig: ModelConfig<StaffModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  jobTitle: {
    key: 'jobTitle',
    label: 'jobTitle',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  workPhone: {
    key: 'workPhone',
    label: 'workPhone',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  mobilePhone: {
    key: 'mobilePhone',
    label: 'mobilePhone',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  email: {
    key: 'email',
    label: 'email',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  salutation: {
    key: 'salutation',
    label: 'salutation',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
