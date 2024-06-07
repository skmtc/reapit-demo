import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'

export const createKeyMovementModelConfig: ModelConfig<CreateKeyMovementModel> = {checkInRequired: {
      key: 'checkInRequired',
      label: 'checkInRequired',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,checkOutToId: {
      key: 'checkOutToId',
      label: 'checkOutToId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,checkOutToType: {
      key: 'checkOutToType',
      label: 'checkOutToType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,checkOutNegotiatorId: {
      key: 'checkOutNegotiatorId',
      label: 'checkOutNegotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};