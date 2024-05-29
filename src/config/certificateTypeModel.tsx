import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { CertificateTypeModel } from '@/schemas/index.ts'

export const certificateTypeModelConfig: ModelConfig2<CertificateTypeModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  value: {
    key: 'value',
    label: 'value',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  statuses: {
    key: 'statuses',
    label: 'statuses',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
