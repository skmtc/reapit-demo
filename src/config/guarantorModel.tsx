import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { GuarantorModel } from '@/schemas/index.ts'

export const guarantorModelConfig: ModelConfig2<GuarantorModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  guarantorAssociatedId: {
    key: 'guarantorAssociatedId',
    label: 'guarantorAssociatedId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  referenceStatus: {
    key: 'referenceStatus',
    label: 'referenceStatus',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
