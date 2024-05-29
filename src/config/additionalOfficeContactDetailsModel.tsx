import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AdditionalOfficeContactDetailsModel } from '@/schemas/index.ts'

export const additionalOfficeContactDetailsModelConfig: ModelConfig<AdditionalOfficeContactDetailsModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  value: {
    key: 'value',
    label: 'value',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
