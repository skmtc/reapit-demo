import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApplicantGuernseyModel } from '@/schemas/index.ts'

export const applicantGuernseyModelConfig: ModelConfig2<ApplicantGuernseyModel> = {
  market: {
    key: 'market',
    label: 'market',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
