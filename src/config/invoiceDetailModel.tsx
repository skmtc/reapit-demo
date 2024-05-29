import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InvoiceDetailModel } from '@/schemas/index.ts'

export const invoiceDetailModelConfig: ModelConfig<InvoiceDetailModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  reference: {
    key: 'reference',
    label: 'reference',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  dueDate: {
    key: 'dueDate',
    label: 'dueDate',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  isRaised: {
    key: 'isRaised',
    label: 'isRaised',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  vatAmount: {
    key: 'vatAmount',
    label: 'vatAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  outstandingAmount: {
    key: 'outstandingAmount',
    label: 'outstandingAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  charges: {
    key: 'charges',
    label: 'charges',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  credits: {
    key: 'credits',
    label: 'credits',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  payments: {
    key: 'payments',
    label: 'payments',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
