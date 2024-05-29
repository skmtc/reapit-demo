import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertySubAgentTermsModel } from '@/schemas/index.ts'

export const propertySubAgentTermsModelConfig: ModelConfig<PropertySubAgentTermsModel> = {
  feeAvailable: {
    key: 'feeAvailable',
    label: 'feeAvailable',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
