import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'

export const createKeyModelConfig: ModelConfig<CreateKeyModel> = {
  number: {
    key: 'number',
    label: 'number',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeId: {
    key: 'officeId',
    label: 'officeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  keysInSet: {
    key: 'keysInSet',
    label: 'keysInSet',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
