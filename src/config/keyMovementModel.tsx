import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { KeyMovementModel } from '@/schemas/index.ts'

export const keyMovementModelConfig: ModelConfig<KeyMovementModel> = {
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
  keyId: {
    key: 'keyId',
    label: 'keyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  checkOutToId: {
    key: 'checkOutToId',
    label: 'checkOutToId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  checkOutToType: {
    key: 'checkOutToType',
    label: 'checkOutToType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  checkOutAt: {
    key: 'checkOutAt',
    label: 'checkOutAt',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  checkOutNegotiatorId: {
    key: 'checkOutNegotiatorId',
    label: 'checkOutNegotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  checkInAt: {
    key: 'checkInAt',
    label: 'checkInAt',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  checkInNegotiatorId: {
    key: 'checkInNegotiatorId',
    label: 'checkInNegotiatorId',
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
