import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PaymentModel } from '@/schemas/index.ts'

export const paymentModelConfig: ModelConfig<PaymentModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  invoiceId: {
    key: 'invoiceId',
    label: 'invoiceId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  vatAmount: {
    key: 'vatAmount',
    label: 'vatAmount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
