import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancySourceModel } from '@/schemas/index.ts'

export const tenancySourceModelConfig: ModelConfig2<TenancySourceModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
