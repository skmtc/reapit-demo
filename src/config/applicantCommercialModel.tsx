import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantCommercialModel } from '@/schemas/index.ts'

export const applicantCommercialModelConfig: ModelConfig<ApplicantCommercialModel> = {
  useClass: {
    key: 'useClass',
    label: 'useClass',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
