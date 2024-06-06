import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyRegionalModel } from 'schemas/index.ts'

export const PropertyRegionalModel = export const propertyRegionalModelConfig: ModelConfig<PropertyRegionalModel> = {ggy: {
      key: 'ggy',
      label: 'ggy',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,irl: {
      key: 'irl',
      label: 'irl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};