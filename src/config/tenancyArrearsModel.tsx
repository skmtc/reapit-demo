import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyArrearsModel } from '@/schemas/index.ts'

export const tenancyArrearsModelConfig: ModelConfig<TenancyArrearsModel> = {
  chaseArrears: {
    key: 'chaseArrears',
    label: 'chaseArrears',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  paymentPlan: {
    key: 'paymentPlan',
    label: 'paymentPlan',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
