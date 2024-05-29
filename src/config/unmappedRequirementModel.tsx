import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { UnmappedRequirementModel } from '@/schemas/index.ts'

export const unmappedRequirementModelConfig: ModelConfig2<UnmappedRequirementModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  value: {
    key: 'value',
    label: 'value',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
