import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantGuernseyModel } from '@/schemas/index.ts'

export const applicantGuernseyModelConfig: ModelConfig<ApplicantGuernseyModel> = {
  market: {
    key: 'market',
    label: 'market',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
