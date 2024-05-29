import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApplicantSourceModel } from '@/schemas/index.ts'

export const applicantSourceModelConfig: ModelConfig2<ApplicantSourceModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
