import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyCommissionFeeModel } from '@/schemas/index.ts'

export const propertyCommissionFeeModelConfig: ModelConfig2<PropertyCommissionFeeModel> = {
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
}
