import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdatePropertyImageModel } from '@/schemas/updatePropertyImageModel.generated.tsx'

export const updatePropertyImageModelConfig: ModelConfig<UpdatePropertyImageModel> = {caption: {
      key: 'caption',
      label: 'caption',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};