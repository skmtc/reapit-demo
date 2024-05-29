import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { WorksOrderModel } from '@/schemas/index.ts'

export const worksOrderModelConfig: ModelConfig2<WorksOrderModel> = {
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
  companyId: {
    key: 'companyId',
    label: 'companyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  reporter: {
    key: 'reporter',
    label: 'reporter',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  priority: {
    key: 'priority',
    label: 'priority',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  booked: {
    key: 'booked',
    label: 'booked',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  required: {
    key: 'required',
    label: 'required',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  totalNetAmount: {
    key: 'totalNetAmount',
    label: 'totalNetAmount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  totalVatAmount: {
    key: 'totalVatAmount',
    label: 'totalVatAmount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  totalGrossAmount: {
    key: 'totalGrossAmount',
    label: 'totalGrossAmount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  items: {
    key: 'items',
    label: 'items',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
