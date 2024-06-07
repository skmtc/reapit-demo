import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdatePropertyCheckModel } from '@/schemas/updatePropertyCheckModel.generated.tsx'

export const updatePropertyCheckModelConfig: ModelConfig<UpdatePropertyCheckModel> = {status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};