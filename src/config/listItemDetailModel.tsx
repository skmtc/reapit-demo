import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ListItemDetailModel } from '@/schemas/index.ts'

export const listItemDetailModelConfig: ModelConfig2<ListItemDetailModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  value: {
    key: 'value',
    label: 'value',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
