import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateSchemaRequest } from '@/schemas/updateSchemaRequest.generated.tsx'

export const updateSchemaRequestConfig: ModelConfig<UpdateSchemaRequest> = {schema: {
      key: 'schema',
      label: 'schema',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};