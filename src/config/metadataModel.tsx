import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { MetadataModel } from '@/schemas/index.ts'

export const metadataModelConfig: ModelConfig<MetadataModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  entityType: {
    key: 'entityType',
    label: 'entityType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  entityId: {
    key: 'entityId',
    label: 'entityId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
