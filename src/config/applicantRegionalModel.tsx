import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApplicantRegionalModel } from '@/schemas/index.ts'

export const applicantRegionalModelConfig: ModelConfig2<ApplicantRegionalModel> = {
  ggy: {
    key: 'ggy',
    label: 'ggy',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
