import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { LandlordSourceModel } from 'schemas/index.ts'

export const LandlordSourceModel = export const landlordSourceModelConfig: ModelConfig<LandlordSourceModel> = {id: {
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