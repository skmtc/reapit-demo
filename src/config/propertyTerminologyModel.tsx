import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyTerminologyModel } from '@/schemas/index.ts'

export const propertyTerminologyModelConfig: ModelConfig<PropertyTerminologyModel> = {
  useSoldStc: {
    key: 'useSoldStc',
    label: 'useSoldStc',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  useMarketAppraisal: {
    key: 'useMarketAppraisal',
    label: 'useMarketAppraisal',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
