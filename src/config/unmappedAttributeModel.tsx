import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { UnmappedAttributeModel } from '@/schemas/index.ts'

export const unmappedAttributeModelConfig: ModelConfig2<UnmappedAttributeModel> = {
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
