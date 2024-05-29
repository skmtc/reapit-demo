import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IrelandPropertyBERModel } from '@/schemas/index.ts'

export const irelandPropertyBERModelConfig: ModelConfig<IrelandPropertyBERModel> = {
  exempt: {
    key: 'exempt',
    label: 'exempt',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rating: {
    key: 'rating',
    label: 'rating',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  refNumber: {
    key: 'refNumber',
    label: 'refNumber',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  epi: {
    key: 'epi',
    label: 'epi',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
