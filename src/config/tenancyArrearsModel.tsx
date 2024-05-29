import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyArrearsModel } from '@/schemas/index.ts'

export const tenancyArrearsModelConfig: ModelConfig2<TenancyArrearsModel> = {
  chaseArrears: {
    key: 'chaseArrears',
    label: 'chaseArrears',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  paymentPlan: {
    key: 'paymentPlan',
    label: 'paymentPlan',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
