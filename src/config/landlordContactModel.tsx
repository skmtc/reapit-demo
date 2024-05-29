import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { LandlordContactModel } from '@/schemas/index.ts'

export const landlordContactModelConfig: ModelConfig<LandlordContactModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
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
  dateOfBirth: {
    key: 'dateOfBirth',
    label: 'dateOfBirth',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  homePhone: {
    key: 'homePhone',
    label: 'homePhone',
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
  marketingConsent: {
    key: 'marketingConsent',
    label: 'marketingConsent',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  primaryAddress: {
    key: 'primaryAddress',
    label: 'primaryAddress',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  additionalContactDetails: {
    key: 'additionalContactDetails',
    label: 'additionalContactDetails',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
