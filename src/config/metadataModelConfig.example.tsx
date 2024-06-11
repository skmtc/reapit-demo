import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { MetadataModel } from '@/schemas/metadataModel.generated.tsx'

export const metadataModelConfig: ModelConfig<MetadataModel> = {
  id: {
    key: 'id',
    label: 'id',
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
