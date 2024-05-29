import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReindexPropertyImagesModel } from '@/schemas/index.ts'

export const reindexPropertyImagesModelConfig: ModelConfig<ReindexPropertyImagesModel> = {
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  imageOrder: {
    key: 'imageOrder',
    label: 'imageOrder',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
