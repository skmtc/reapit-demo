import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TerminologyModel } from '@/schemas/index.ts'

export const terminologyModelConfig: ModelConfig<TerminologyModel> = {
  properties: {
    key: 'properties',
    label: 'properties',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
