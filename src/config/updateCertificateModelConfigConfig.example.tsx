import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateCertificateModel } from '@/schemas/updateCertificateModel.generated.tsx'

export const updateCertificateModelConfig: ModelConfig<UpdateCertificateModel> = {start: {
      key: 'start',
      label: 'start',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,expiry: {
      key: 'expiry',
      label: 'expiry',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,companyId: {
      key: 'companyId',
      label: 'companyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,referenceNumber: {
      key: 'referenceNumber',
      label: 'referenceNumber',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};