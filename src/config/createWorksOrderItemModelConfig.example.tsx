import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'

export const createWorksOrderItemModelConfig: ModelConfig<CreateWorksOrderItemModel> = {
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  chargeTo: {
    key: 'chargeTo',
    label: 'chargeTo',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  estimate: {
    key: 'estimate',
    label: 'estimate',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  estimateType: {
    key: 'estimateType',
    label: 'estimateType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  vatAmount: {
    key: 'vatAmount',
    label: 'vatAmount',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  reserveAmount: {
    key: 'reserveAmount',
    label: 'reserveAmount',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
