import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyRegionalModel } from '@/schemas/index.ts'

export const propertyRegionalModelConfig: ModelConfig2<PropertyRegionalModel> = {
  ggy: {
    key: 'ggy',
    label: 'ggy',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  irl: {
    key: 'irl',
    label: 'irl',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
