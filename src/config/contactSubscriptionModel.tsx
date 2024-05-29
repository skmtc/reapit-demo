import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ContactSubscriptionModel } from '@/schemas/index.ts'

export const contactSubscriptionModelConfig: ModelConfig2<ContactSubscriptionModel> = {
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
  contactId: {
    key: 'contactId',
    label: 'contactId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  group: {
    key: 'group',
    label: 'group',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  subscribedOn: {
    key: 'subscribedOn',
    label: 'subscribedOn',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  unsubscribedOn: {
    key: 'unsubscribedOn',
    label: 'unsubscribedOn',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
