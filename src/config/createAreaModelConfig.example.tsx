import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateAreaModel } from '@/schemas/createAreaModel.generated.tsx'

export const createAreaModelConfig: ModelConfig<CreateAreaModel> = {
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
  area: {
    key: 'area',
    label: 'area',
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
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parentId: {
    key: 'parentId',
    label: 'parentId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
