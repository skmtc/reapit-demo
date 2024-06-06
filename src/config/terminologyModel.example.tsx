import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TerminologyModel } from 'schemas/index.ts'

export const TerminologyModel = export const terminologyModelConfig: ModelConfig<TerminologyModel> = {properties: {
      key: 'properties',
      label: 'properties',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};