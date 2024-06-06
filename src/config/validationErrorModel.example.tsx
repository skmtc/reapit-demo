import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ValidationErrorModel } from 'schemas/index.ts'

export const ValidationErrorModel = export const validationErrorModelConfig: ModelConfig<ValidationErrorModel> = {statusCode: {
      key: 'statusCode',
      label: 'statusCode',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,dateTime: {
      key: 'dateTime',
      label: 'dateTime',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,errors: {
      key: 'errors',
      label: 'errors',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};