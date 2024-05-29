import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReferralModel } from '@/schemas/index.ts'

export const referralModelConfig: ModelConfig<ReferralModel> = {
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
  referralTypeId: {
    key: 'referralTypeId',
    label: 'referralTypeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  contactId: {
    key: 'contactId',
    label: 'contactId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  paid: {
    key: 'paid',
    label: 'paid',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  accepted: {
    key: 'accepted',
    label: 'accepted',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  related: {
    key: 'related',
    label: 'related',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
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
