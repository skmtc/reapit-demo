import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'

export const createKeyModelConfig: ModelConfig<CreateKeyModel> = {number: {
      key: 'number',
      label: 'number',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeId: {
      key: 'officeId',
      label: 'officeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,keysInSet: {
      key: 'keysInSet',
      label: 'keysInSet',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};