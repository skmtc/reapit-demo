import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReferenceModel } from '@/schemas/index.ts'

export const referenceModelConfig: ModelConfig<ReferenceModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  referenceAssociatedId: {
    key: 'referenceAssociatedId',
    label: 'referenceAssociatedId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  referenceStatus: {
    key: 'referenceStatus',
    label: 'referenceStatus',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  referenceType: {
    key: 'referenceType',
    label: 'referenceType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
