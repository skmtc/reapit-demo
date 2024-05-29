import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ListItemModel } from '@/schemas/index.ts'

export const listItemModelConfig: ModelConfig2<ListItemModel> = {
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
}
