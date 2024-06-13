import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePropertyAppraisalModel } from '@/schemas/createPropertyAppraisalModel.generated.tsx'

export const createPropertyAppraisalModelConfig: ModelConfig<CreatePropertyAppraisalModel> = {
  companyId: {
    key: 'companyId',
    label: 'companyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  price: {
    key: 'price',
    label: 'price',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  fee: {
    key: 'fee',
    label: 'fee',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
