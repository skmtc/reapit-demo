import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { SchemaModel } from '@/schemas/schemaModel.generated.tsx'

export const schemaModelConfig: ModelConfig<SchemaModel> = {
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
  schema: {
    key: 'schema',
    label: 'schema',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
