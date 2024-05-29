import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ReindexPropertyImagesModel } from '@/schemas/index.ts'

export const reindexPropertyImagesModelConfig: ModelConfig2<ReindexPropertyImagesModel> = {
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  imageOrder: {
    key: 'imageOrder',
    label: 'imageOrder',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
