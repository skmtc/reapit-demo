import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreditModel } from '@/schemas/index.ts'

export const creditModelConfig: ModelConfig<CreditModel> = {
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
  invoiceId: {
    key: 'invoiceId',
    label: 'invoiceId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
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
}