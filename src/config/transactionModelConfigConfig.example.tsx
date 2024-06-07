import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TransactionModel } from '@/schemas/transactionModel.generated.tsx'

export const transactionModelConfig: ModelConfig<TransactionModel> = {_links: {
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
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,transactionType: {
      key: 'transactionType',
      label: 'transactionType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,ledger: {
      key: 'ledger',
      label: 'ledger',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,netAmount: {
      key: 'netAmount',
      label: 'netAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,taxAmount: {
      key: 'taxAmount',
      label: 'taxAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,grossAmount: {
      key: 'grossAmount',
      label: 'grossAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,outstanding: {
      key: 'outstanding',
      label: 'outstanding',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,companyId: {
      key: 'companyId',
      label: 'companyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,landlordId: {
      key: 'landlordId',
      label: 'landlordId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,tenancyId: {
      key: 'tenancyId',
      label: 'tenancyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};