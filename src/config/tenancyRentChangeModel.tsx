import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyRentChangeModel } from '@/schemas/index.ts'

export const tenancyRentChangeModelConfig: ModelConfig<TenancyRentChangeModel> = {
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  percentage: {
    key: 'percentage',
    label: 'percentage',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
