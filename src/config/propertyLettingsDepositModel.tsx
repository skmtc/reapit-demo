import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyLettingsDepositModel } from '@/schemas/index.ts'

export const propertyLettingsDepositModelConfig: ModelConfig2<PropertyLettingsDepositModel> = {
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
