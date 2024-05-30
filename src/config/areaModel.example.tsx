import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AreaModel } from '@/schemas/index.ts'

export const areaModelConfig: ModelConfig<AreaModel> = {
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
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
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
  parentIds: {
    key: 'parentIds',
    label: 'parentIds',
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
