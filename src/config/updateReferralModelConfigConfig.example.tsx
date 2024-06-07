import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateReferralModel } from '@/schemas/updateReferralModel.generated.tsx'

export const updateReferralModelConfig: ModelConfig<UpdateReferralModel> = {status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,amount: {
      key: 'amount',
      label: 'amount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};