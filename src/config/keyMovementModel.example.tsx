import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { KeyMovementModel } from '@/schemas/index.ts'

export const keyMovementModelConfig: ModelConfig<KeyMovementModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  keyId: {
    key: 'keyId',
    label: 'keyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutToId: {
    key: 'checkOutToId',
    label: 'checkOutToId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutToType: {
    key: 'checkOutToType',
    label: 'checkOutToType',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutAt: {
    key: 'checkOutAt',
    label: 'checkOutAt',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutNegotiatorId: {
    key: 'checkOutNegotiatorId',
    label: 'checkOutNegotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkInAt: {
    key: 'checkInAt',
    label: 'checkInAt',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkInNegotiatorId: {
    key: 'checkInNegotiatorId',
    label: 'checkInNegotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
