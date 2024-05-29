import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { WorksOrderModel } from '@/schemas/index.ts'

export const worksOrderModelConfig: ModelConfig<WorksOrderModel> = {
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
  companyId: {
    key: 'companyId',
    label: 'companyId',
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
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  reporter: {
    key: 'reporter',
    label: 'reporter',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  priority: {
    key: 'priority',
    label: 'priority',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  booked: {
    key: 'booked',
    label: 'booked',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  required: {
    key: 'required',
    label: 'required',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  totalNetAmount: {
    key: 'totalNetAmount',
    label: 'totalNetAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  totalVatAmount: {
    key: 'totalVatAmount',
    label: 'totalVatAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  totalGrossAmount: {
    key: 'totalGrossAmount',
    label: 'totalGrossAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  items: {
    key: 'items',
    label: 'items',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
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
