import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateSupplierInvoiceModel } from '@/schemas/createSupplierInvoiceModel.generated.tsx'

export const createSupplierInvoiceModelConfig: ModelConfig<CreateSupplierInvoiceModel> = {worksOrderId: {
      key: 'worksOrderId',
      label: 'worksOrderId',
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
,tenancyId: {
      key: 'tenancyId',
      label: 'tenancyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,accountId: {
      key: 'accountId',
      label: 'accountId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,invoiceRef: {
      key: 'invoiceRef',
      label: 'invoiceRef',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,invoiceDate: {
      key: 'invoiceDate',
      label: 'invoiceDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,dueDate: {
      key: 'dueDate',
      label: 'dueDate',
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
    }};