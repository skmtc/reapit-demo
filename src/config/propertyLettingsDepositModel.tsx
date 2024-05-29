import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingsDepositModel } from '@/schemas/index.ts'

export const propertyLettingsDepositModelConfig: ModelConfig<PropertyLettingsDepositModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
