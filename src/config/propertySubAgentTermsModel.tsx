import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertySubAgentTermsModel } from '@/schemas/index.ts'

export const propertySubAgentTermsModelConfig: ModelConfig2<PropertySubAgentTermsModel> = {
  feeAvailable: {
    key: 'feeAvailable',
    label: 'feeAvailable',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
