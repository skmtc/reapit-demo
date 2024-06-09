import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateAreaModel } from '@/schemas/createAreaModel.generated.tsx'

export const createAreaModelConfig: ModelConfig<CreateAreaModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  area: {
    key: 'area',
    label: 'area',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  departmentIds: {
    key: 'departmentIds',
    label: 'departmentIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parentId: {
    key: 'parentId',
    label: 'parentId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
