import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { MetadataModel } from '@/schemas/metadataModel.generated.tsx'

export const metadataModelConfig: ModelConfig<MetadataModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,entityType: {
      key: 'entityType',
      label: 'entityType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,entityId: {
      key: 'entityId',
      label: 'entityId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};