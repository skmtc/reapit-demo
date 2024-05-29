import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TransactionModel } from '@/schemas/index.ts'

export const transactionModelConfig: ModelConfig<TransactionModel> = {
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
  category: {
    key: 'category',
    label: 'category',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  transactionType: {
    key: 'transactionType',
    label: 'transactionType',
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
  ledger: {
    key: 'ledger',
    label: 'ledger',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  taxAmount: {
    key: 'taxAmount',
    label: 'taxAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  grossAmount: {
    key: 'grossAmount',
    label: 'grossAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  outstanding: {
    key: 'outstanding',
    label: 'outstanding',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  companyId: {
    key: 'companyId',
    label: 'companyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  landlordId: {
    key: 'landlordId',
    label: 'landlordId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
