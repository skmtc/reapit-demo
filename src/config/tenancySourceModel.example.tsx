import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancySourceModel } from '@/schemas/index.ts'

export const tenancySourceModelConfig: ModelConfig<TenancySourceModel> = {
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
