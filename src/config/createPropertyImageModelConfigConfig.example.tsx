import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePropertyImageModel } from '@/schemas/createPropertyImageModel.generated.tsx'

export const createPropertyImageModelConfig: ModelConfig<CreatePropertyImageModel> = {data: {
      key: 'data',
      label: 'data',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fileUrl: {
      key: 'fileUrl',
      label: 'fileUrl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,caption: {
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