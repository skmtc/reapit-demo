import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { IrelandPropertyModel } from '@/schemas/index.ts'

export const irelandPropertyModelConfig: ModelConfig2<IrelandPropertyModel> = {
  buildingEnergyRating: {
    key: 'buildingEnergyRating',
    label: 'buildingEnergyRating',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
