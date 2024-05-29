import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { VendorSourceModel } from '@/schemas/index.ts'

export const vendorSourceModelConfig: ModelConfig2<VendorSourceModel> = {
  id: {
    key: 'id',
    label: 'id',
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
