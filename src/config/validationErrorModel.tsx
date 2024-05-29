import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ValidationErrorModel } from '@/schemas/index.ts'

export const validationErrorModelConfig: ModelConfig<ValidationErrorModel> = {
  statusCode: {
    key: 'statusCode',
    label: 'statusCode',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  dateTime: {
    key: 'dateTime',
    label: 'dateTime',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  errors: {
    key: 'errors',
    label: 'errors',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
