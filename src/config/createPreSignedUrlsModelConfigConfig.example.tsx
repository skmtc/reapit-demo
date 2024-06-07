import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'

export const createPreSignedUrlsModelConfig: ModelConfig<CreatePreSignedUrlsModel> = {amount: {
      key: 'amount',
      label: 'amount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};