import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IrelandPropertyBERModel } from '@/schemas/index.ts'

export const irelandPropertyBERModelConfig: ModelConfig<IrelandPropertyBERModel> = {
  exempt: {
    key: 'exempt',
    label: 'exempt',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rating: {
    key: 'rating',
    label: 'rating',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  refNumber: {
    key: 'refNumber',
    label: 'refNumber',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  epi: {
    key: 'epi',
    label: 'epi',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
