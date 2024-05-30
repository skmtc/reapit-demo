import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CompanyPaymentsModel } from '@/schemas/index.ts'

export const companyPaymentsModelConfig: ModelConfig<CompanyPaymentsModel> = {
  nominalAccountId: {
    key: 'nominalAccountId',
    label: 'nominalAccountId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
