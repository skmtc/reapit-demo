import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApplicantInternalAreaModel } from '@/schemas/index.ts'

export const applicantInternalAreaModelConfig: ModelConfig2<ApplicantInternalAreaModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
