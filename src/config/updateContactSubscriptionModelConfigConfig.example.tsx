import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateContactSubscriptionModel } from '@/schemas/updateContactSubscriptionModel.generated.tsx'

export const updateContactSubscriptionModelConfig: ModelConfig<UpdateContactSubscriptionModel> = {status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};