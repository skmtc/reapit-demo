import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { EnquiryModel } from '@/schemas/index.ts'

export const enquiryModelConfig: ModelConfig<EnquiryModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
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
  enquiryType: {
    key: 'enquiryType',
    label: 'enquiryType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  message: {
    key: 'message',
    label: 'message',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  marketingConsent: {
    key: 'marketingConsent',
    label: 'marketingConsent',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  position: {
    key: 'position',
    label: 'position',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  officeId: {
    key: 'officeId',
    label: 'officeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  sourceName: {
    key: 'sourceName',
    label: 'sourceName',
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
  address: {
    key: 'address',
    label: 'address',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  buying: {
    key: 'buying',
    label: 'buying',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  renting: {
    key: 'renting',
    label: 'renting',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  bedrooms: {
    key: 'bedrooms',
    label: 'bedrooms',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyIds: {
    key: 'propertyIds',
    label: 'propertyIds',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
