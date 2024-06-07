import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReindexPropertyImagesModel } from '@/schemas/reindexPropertyImagesModel.generated.tsx'

export const reindexPropertyImagesModelConfig: ModelConfig<ReindexPropertyImagesModel> = {propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,imageOrder: {
      key: 'imageOrder',
      label: 'imageOrder',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};