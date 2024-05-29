import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ContactSubscriptionModel } from '@/schemas/index.ts'

export const contactSubscriptionModelConfig: ModelConfig<ContactSubscriptionModel> = {
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
  contactId: {
    key: 'contactId',
    label: 'contactId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  group: {
    key: 'group',
    label: 'group',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  subscribedOn: {
    key: 'subscribedOn',
    label: 'subscribedOn',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  unsubscribedOn: {
    key: 'unsubscribedOn',
    label: 'unsubscribedOn',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
