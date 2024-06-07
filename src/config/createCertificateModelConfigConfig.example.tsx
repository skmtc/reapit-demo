import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateCertificateModel } from '@/schemas/createCertificateModel.generated.tsx'

export const createCertificateModelConfig: ModelConfig<CreateCertificateModel> = {category: {
      key: 'category',
      label: 'category',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,start: {
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