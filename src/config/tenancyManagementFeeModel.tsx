import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyManagementFeeModel } from '@/schemas/index.ts'

export const tenancyManagementFeeModelConfig: ModelConfig2<TenancyManagementFeeModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  frequency: {
    key: 'frequency',
    label: 'frequency',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
