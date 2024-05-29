import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyAgreementModel } from '@/schemas/index.ts'

export const tenancyAgreementModelConfig: ModelConfig2<TenancyAgreementModel> = {
  landlord: {
    key: 'landlord',
    label: 'landlord',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenant: {
    key: 'tenant',
    label: 'tenant',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
