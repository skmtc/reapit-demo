import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyLettingFeeModel } from '@/schemas/index.ts'

export const tenancyLettingFeeModelConfig: ModelConfig2<TenancyLettingFeeModel> = {
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
