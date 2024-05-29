import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IrelandPropertyModel } from '@/schemas/index.ts'

export const irelandPropertyModelConfig: ModelConfig<IrelandPropertyModel> = {
  buildingEnergyRating: {
    key: 'buildingEnergyRating',
    label: 'buildingEnergyRating',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
