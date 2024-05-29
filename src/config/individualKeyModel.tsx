import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { IndividualKeyModel } from '@/schemas/index.ts'

export const individualKeyModelConfig: ModelConfig2<IndividualKeyModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
