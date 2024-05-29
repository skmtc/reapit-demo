import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyAppraisalModel } from '@/schemas/index.ts'

export const propertyAppraisalModelConfig: ModelConfig<PropertyAppraisalModel> = {
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
  isExternal: {
    key: 'isExternal',
    label: 'isExternal',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  price: {
    key: 'price',
    label: 'price',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  fee: {
    key: 'fee',
    label: 'fee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
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
