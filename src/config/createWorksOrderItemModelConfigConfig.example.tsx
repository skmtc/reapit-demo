import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'

export const createWorksOrderItemModelConfig: ModelConfig<CreateWorksOrderItemModel> = {notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,chargeTo: {
      key: 'chargeTo',
      label: 'chargeTo',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,estimate: {
      key: 'estimate',
      label: 'estimate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,estimateType: {
      key: 'estimateType',
      label: 'estimateType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,netAmount: {
      key: 'netAmount',
      label: 'netAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vatAmount: {
      key: 'vatAmount',
      label: 'vatAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,reserveAmount: {
      key: 'reserveAmount',
      label: 'reserveAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};