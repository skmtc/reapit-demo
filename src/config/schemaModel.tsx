import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { SchemaModel } from '@/schemas/index.ts'

export const schemaModelConfig: ModelConfig<SchemaModel> = {
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
  schema: {
    key: 'schema',
    label: 'schema',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
