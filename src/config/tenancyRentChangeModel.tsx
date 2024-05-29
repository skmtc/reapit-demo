import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyRentChangeModel } from '@/schemas/index.ts'

export const tenancyRentChangeModelConfig: ModelConfig2<TenancyRentChangeModel> = {
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  percentage: {
    key: 'percentage',
    label: 'percentage',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
