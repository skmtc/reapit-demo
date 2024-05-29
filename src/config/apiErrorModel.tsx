import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApiErrorModel } from '@/schemas/index.ts'

export const apiErrorModelConfig: ModelConfig2<ApiErrorModel> = {
  statusCode: {
    key: 'statusCode',
    label: 'statusCode',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  dateTime: {
    key: 'dateTime',
    label: 'dateTime',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
