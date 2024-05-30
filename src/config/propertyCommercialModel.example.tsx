import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyCommercialModel } from '@/schemas/index.ts'

export const propertyCommercialModelConfig: ModelConfig<PropertyCommercialModel> = {
  useClass: {
    key: 'useClass',
    label: 'useClass',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
