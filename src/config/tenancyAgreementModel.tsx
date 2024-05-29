import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyAgreementModel } from '@/schemas/index.ts'

export const tenancyAgreementModelConfig: ModelConfig<TenancyAgreementModel> = {
  landlord: {
    key: 'landlord',
    label: 'landlord',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenant: {
    key: 'tenant',
    label: 'tenant',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
