import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'

export const createKeyMovementModelConfig: ModelConfig<CreateKeyMovementModel> = {
  checkInRequired: {
    key: 'checkInRequired',
    label: 'checkInRequired',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutToId: {
    key: 'checkOutToId',
    label: 'checkOutToId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutToType: {
    key: 'checkOutToType',
    label: 'checkOutToType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  checkOutNegotiatorId: {
    key: 'checkOutNegotiatorId',
    label: 'checkOutNegotiatorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
