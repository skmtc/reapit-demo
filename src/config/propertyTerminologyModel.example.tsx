import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyTerminologyModel } from '@/schemas/index.ts'

export const propertyTerminologyModelConfig: ModelConfig<PropertyTerminologyModel> = {
  useSoldStc: {
    key: 'useSoldStc',
    label: 'useSoldStc',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  useMarketAppraisal: {
    key: 'useMarketAppraisal',
    label: 'useMarketAppraisal',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
