import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CertificateTypeModel } from 'schemas/index.ts'

export const CertificateTypeModel = export const certificateTypeModelConfig: ModelConfig<CertificateTypeModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,value: {
      key: 'value',
      label: 'value',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,statuses: {
      key: 'statuses',
      label: 'statuses',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};