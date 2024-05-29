import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CertificateTypeModel } from '@/schemas/index.ts'

export const certificateTypeModelConfig: ModelConfig<CertificateTypeModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  value: {
    key: 'value',
    label: 'value',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  statuses: {
    key: 'statuses',
    label: 'statuses',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
