import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReferenceModel } from '@/schemas/index.ts'

export const referenceModelConfig: ModelConfig<ReferenceModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  referenceAssociatedId: {
    key: 'referenceAssociatedId',
    label: 'referenceAssociatedId',
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
  referenceType: {
    key: 'referenceType',
    label: 'referenceType',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
