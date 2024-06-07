import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'

export const createOfficeModelConfig: ModelConfig<CreateOfficeModel> = {name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,manager: {
      key: 'manager',
      label: 'manager',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,address: {
      key: 'address',
      label: 'address',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,workPhone: {
      key: 'workPhone',
      label: 'workPhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,email: {
      key: 'email',
      label: 'email',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};