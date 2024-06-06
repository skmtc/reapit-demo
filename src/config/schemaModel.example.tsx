import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { SchemaModel } from 'schemas/index.ts'

export const SchemaModel = export const schemaModelConfig: ModelConfig<SchemaModel> = {id: {
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
,schema: {
      key: 'schema',
      label: 'schema',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};