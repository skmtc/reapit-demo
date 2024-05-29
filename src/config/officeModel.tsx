import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { OfficeModel } from '@/schemas/index.ts'

export const officeModelConfig: ModelConfig<OfficeModel> = {
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
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  manager: {
    key: 'manager',
    label: 'manager',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  region: {
    key: 'region',
    label: 'region',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  address: {
    key: 'address',
    label: 'address',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  additionalContactDetails: {
    key: 'additionalContactDetails',
    label: 'additionalContactDetails',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  workPhone: {
    key: 'workPhone',
    label: 'workPhone',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  email: {
    key: 'email',
    label: 'email',
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
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
