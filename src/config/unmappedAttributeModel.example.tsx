import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UnmappedAttributeModel } from 'schemas/index.ts'

export const UnmappedAttributeModel = export const unmappedAttributeModelConfig: ModelConfig<UnmappedAttributeModel> = {type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,value: {
      key: 'value',
      label: 'value',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};