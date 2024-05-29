import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantRegionalModel } from '@/schemas/index.ts'

export const applicantRegionalModelConfig: ModelConfig<ApplicantRegionalModel> = {
  ggy: {
    key: 'ggy',
    label: 'ggy',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
