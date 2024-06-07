import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateMetadataRequest } from '@/schemas/updateMetadataRequest.generated.tsx'

export const updateMetadataRequestConfig: ModelConfig<UpdateMetadataRequest> = {metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};