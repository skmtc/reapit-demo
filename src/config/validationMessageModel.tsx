import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ValidationMessageModel } from '@/schemas/index.ts'

export const validationMessageModelConfig: ModelConfig<ValidationMessageModel> = {
  field: {
    key: 'field',
    label: 'field',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  message: {
    key: 'message',
    label: 'message',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
