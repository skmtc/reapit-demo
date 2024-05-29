import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyExtensionAlterationFeeModel } from '@/schemas/index.ts'

export const tenancyExtensionAlterationFeeModelConfig: ModelConfig2<TenancyExtensionAlterationFeeModel> = {
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  summary: {
    key: 'summary',
    label: 'summary',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
