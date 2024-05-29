import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantGuernseyModel } from '@/schemas/index.ts'

export const applicantGuernseyModelConfig: ModelConfig<ApplicantGuernseyModel> = {
  market: {
    key: 'market',
    label: 'market',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
