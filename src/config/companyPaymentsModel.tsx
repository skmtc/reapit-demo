import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { CompanyPaymentsModel } from '@/schemas/index.ts'

export const companyPaymentsModelConfig: ModelConfig2<CompanyPaymentsModel> = {
  nominalAccountId: {
    key: 'nominalAccountId',
    label: 'nominalAccountId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
