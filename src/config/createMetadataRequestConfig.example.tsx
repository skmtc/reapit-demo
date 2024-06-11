import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateMetadataRequest } from '@/schemas/createMetadataRequest.generated.tsx'

export const createMetadataRequestConfig: ModelConfig<CreateMetadataRequest> = {
  entityType: {
    key: 'entityType',
    label: 'entityType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  entityId: {
    key: 'entityId',
    label: 'entityId',
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
}
