import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyCommercialModel } from '@/schemas/index.ts'

export const propertyCommercialModelConfig: ModelConfig<PropertyCommercialModel> = {
  useClass: {
    key: 'useClass',
    label: 'useClass',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
