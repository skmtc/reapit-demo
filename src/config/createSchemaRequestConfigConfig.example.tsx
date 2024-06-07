import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateSchemaRequest } from '@/schemas/createSchemaRequest.generated.tsx'

export const createSchemaRequestConfig: ModelConfig<CreateSchemaRequest> = {entityType: {
      key: 'entityType',
      label: 'entityType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,schema: {
      key: 'schema',
      label: 'schema',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};