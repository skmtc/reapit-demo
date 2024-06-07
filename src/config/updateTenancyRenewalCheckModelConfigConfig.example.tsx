import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateTenancyRenewalCheckModel } from '@/schemas/updateTenancyRenewalCheckModel.generated.tsx'

export const updateTenancyRenewalCheckModelConfig: ModelConfig<UpdateTenancyRenewalCheckModel> = {status: {
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