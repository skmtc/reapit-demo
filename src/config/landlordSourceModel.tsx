import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { LandlordSourceModel } from '@/schemas/index.ts'

export const landlordSourceModelConfig: ModelConfig2<LandlordSourceModel> = {
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
