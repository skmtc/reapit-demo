import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { GuernseyModel } from '@/schemas/index.ts'

export const guernseyModelConfig: ModelConfig<GuernseyModel> = {
  market: {
    key: 'market',
    label: 'market',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
