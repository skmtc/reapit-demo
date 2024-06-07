import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateTenancyCheckModel } from '@/schemas/updateTenancyCheckModel.generated.tsx'

export const updateTenancyCheckModelConfig: ModelConfig<UpdateTenancyCheckModel> = {status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};