import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IrelandPropertyModel } from '@/schemas/index.ts'

export const irelandPropertyModelConfig: ModelConfig<IrelandPropertyModel> = {
  buildingEnergyRating: {
    key: 'buildingEnergyRating',
    label: 'buildingEnergyRating',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
