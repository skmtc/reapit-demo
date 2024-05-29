import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IndividualKeyModel } from '@/schemas/index.ts'

export const individualKeyModelConfig: ModelConfig<IndividualKeyModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
