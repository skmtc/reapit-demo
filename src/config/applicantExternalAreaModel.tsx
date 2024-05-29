import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantExternalAreaModel } from '@/schemas/index.ts'

export const applicantExternalAreaModelConfig: ModelConfig<ApplicantExternalAreaModel> = {
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  amountFrom: {
    key: 'amountFrom',
    label: 'amountFrom',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  amountTo: {
    key: 'amountTo',
    label: 'amountTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
