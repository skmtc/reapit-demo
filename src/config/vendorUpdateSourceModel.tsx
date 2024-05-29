import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { VendorUpdateSourceModel } from '@/schemas/index.ts'

export const vendorUpdateSourceModelConfig: ModelConfig2<VendorUpdateSourceModel> = {
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
