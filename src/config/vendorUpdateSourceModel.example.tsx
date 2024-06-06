import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { VendorUpdateSourceModel } from 'schemas/index.ts'

export const VendorUpdateSourceModel = export const vendorUpdateSourceModelConfig: ModelConfig<VendorUpdateSourceModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};