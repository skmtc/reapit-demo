import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CertificateModel } from '@/schemas/certificateModel.generated.tsx'

export const certificateModelConfig: ModelConfig<CertificateModel> = {_links: {
      key: '_links',
      label: '_links',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_embedded: {
      key: '_embedded',
      label: '_embedded',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,created: {
      key: 'created',
      label: 'created',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,category: {
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
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,companyId: {
      key: 'companyId',
      label: 'companyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,statusId: {
      key: 'statusId',
      label: 'statusId',
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
    }
,responsibleParty: {
      key: 'responsibleParty',
      label: 'responsibleParty',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};