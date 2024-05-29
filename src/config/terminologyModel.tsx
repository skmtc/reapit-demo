import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TerminologyModel } from '@/schemas/index.ts'

export const terminologyModelConfig: ModelConfig2<TerminologyModel> = {
  properties: {
    key: 'properties',
    label: 'properties',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
