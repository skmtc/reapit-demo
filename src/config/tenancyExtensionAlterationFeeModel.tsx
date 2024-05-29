import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyExtensionAlterationFeeModel } from '@/schemas/index.ts'

export const tenancyExtensionAlterationFeeModelConfig: ModelConfig<TenancyExtensionAlterationFeeModel> = {
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  summary: {
    key: 'summary',
    label: 'summary',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
