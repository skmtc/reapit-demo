import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { OfficeModel } from '@/schemas/officeModel.generated.tsx'

export const officeModelConfig: ModelConfig<OfficeModel> = {
  _links: {
    key: '_links',
    label: '_links',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  manager: {
    key: 'manager',
    label: 'manager',
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
  region: {
    key: 'region',
    label: 'region',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  address: {
    key: 'address',
    label: 'address',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  additionalContactDetails: {
    key: 'additionalContactDetails',
    label: 'additionalContactDetails',
    defaultValue: [],
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
  email: {
    key: 'email',
    label: 'email',
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
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
