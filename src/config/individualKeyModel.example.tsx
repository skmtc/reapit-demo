import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IndividualKeyModel } from 'schemas/index.ts'

export const IndividualKeyModel = export const individualKeyModelConfig: ModelConfig<IndividualKeyModel> = {name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};