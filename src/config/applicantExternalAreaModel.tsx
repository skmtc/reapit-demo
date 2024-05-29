import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApplicantExternalAreaModel } from '@/schemas/index.ts'

export const applicantExternalAreaModelConfig: ModelConfig2<ApplicantExternalAreaModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amountFrom: {
    key: 'amountFrom',
    label: 'amountFrom',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amountTo: {
    key: 'amountTo',
    label: 'amountTo',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
