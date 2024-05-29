import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { LandlordModel } from '@/schemas/index.ts'

export const landlordModelConfig: ModelConfig<LandlordModel> = {
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
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  solicitorId: {
    key: 'solicitorId',
    label: 'solicitorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  officeId: {
    key: 'officeId',
    label: 'officeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  source: {
    key: 'source',
    label: 'source',
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
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
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
