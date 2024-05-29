import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReferralContactModel } from '@/schemas/index.ts'

export const referralContactModelConfig: ModelConfig<ReferralContactModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  title: {
    key: 'title',
    label: 'title',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  forename: {
    key: 'forename',
    label: 'forename',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  surname: {
    key: 'surname',
    label: 'surname',
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
}
