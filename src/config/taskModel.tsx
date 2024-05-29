import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TaskModel } from '@/schemas/index.ts'

export const taskModelConfig: ModelConfig<TaskModel> = {
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
  activates: {
    key: 'activates',
    label: 'activates',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  senderId: {
    key: 'senderId',
    label: 'senderId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  text: {
    key: 'text',
    label: 'text',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  landlordId: {
    key: 'landlordId',
    label: 'landlordId',
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
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  contactId: {
    key: 'contactId',
    label: 'contactId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  recipientId: {
    key: 'recipientId',
    label: 'recipientId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  recipientType: {
    key: 'recipientType',
    label: 'recipientType',
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
