import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateSupplierInvoiceModel } from '@/schemas/createSupplierInvoiceModel.generated.tsx'

export const createSupplierInvoiceModelConfig: ModelConfig<CreateSupplierInvoiceModel> = {
  worksOrderId: {
    key: 'worksOrderId',
    label: 'worksOrderId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  companyId: {
    key: 'companyId',
    label: 'companyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  accountId: {
    key: 'accountId',
    label: 'accountId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  invoiceRef: {
    key: 'invoiceRef',
    label: 'invoiceRef',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  invoiceDate: {
    key: 'invoiceDate',
    label: 'invoiceDate',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  dueDate: {
    key: 'dueDate',
    label: 'dueDate',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  taxAmount: {
    key: 'taxAmount',
    label: 'taxAmount',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
