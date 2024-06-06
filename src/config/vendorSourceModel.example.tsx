import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { VendorSourceModel } from 'schemas/index.ts'

export const VendorSourceModel = export const vendorSourceModelConfig: ModelConfig<VendorSourceModel> = {id: {
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