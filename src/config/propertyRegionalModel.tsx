import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyRegionalModel } from '@/schemas/index.ts'

export const propertyRegionalModelConfig: ModelConfig<PropertyRegionalModel> = {
  ggy: {
    key: 'ggy',
    label: 'ggy',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  irl: {
    key: 'irl',
    label: 'irl',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
