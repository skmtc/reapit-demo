import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UnmappedRequirementModel } from 'schemas/index.ts'

export const UnmappedRequirementModel = export const unmappedRequirementModelConfig: ModelConfig<UnmappedRequirementModel> = {type: {
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