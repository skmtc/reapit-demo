import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { WorksOrderItemModel } from '@/schemas/index.ts'

export const worksOrderItemModelConfig: ModelConfig<WorksOrderItemModel> = {
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
  worksOrderId: {
    key: 'worksOrderId',
    label: 'worksOrderId',
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
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  chargeTo: {
    key: 'chargeTo',
    label: 'chargeTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  estimate: {
    key: 'estimate',
    label: 'estimate',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  estimateType: {
    key: 'estimateType',
    label: 'estimateType',
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
  grossAmount: {
    key: 'grossAmount',
    label: 'grossAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  reserveAmount: {
    key: 'reserveAmount',
    label: 'reserveAmount',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  nominalAccountId: {
    key: 'nominalAccountId',
    label: 'nominalAccountId',
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
