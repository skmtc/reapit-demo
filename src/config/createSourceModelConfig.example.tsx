import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateSourceModel } from '@/schemas/createSourceModel.generated.tsx'

export const createSourceModelConfig: ModelConfig<CreateSourceModel> = {
  name: {
    key: 'name',
    label: 'name',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  departmentIds: {
    key: 'departmentIds',
    label: 'departmentIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
