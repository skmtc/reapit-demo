import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTaskModel } from '@/schemas/createTaskModel.generated.tsx'

export const createTaskModelConfig: ModelConfig<CreateTaskModel> = {
  activates: {
    key: 'activates',
    label: 'activates',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  senderId: {
    key: 'senderId',
    label: 'senderId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  text: {
    key: 'text',
    label: 'text',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  landlordId: {
    key: 'landlordId',
    label: 'landlordId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  contactId: {
    key: 'contactId',
    label: 'contactId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  recipientId: {
    key: 'recipientId',
    label: 'recipientId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  recipientType: {
    key: 'recipientType',
    label: 'recipientType',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
