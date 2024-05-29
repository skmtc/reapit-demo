import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CompanyPaymentsModel } from '@/schemas/index.ts'

export const companyPaymentsModelConfig: ModelConfig<CompanyPaymentsModel> = {
  nominalAccountId: {
    key: 'nominalAccountId',
    label: 'nominalAccountId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
