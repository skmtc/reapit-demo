import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { CheckListItemModel } from '@/schemas/index.ts'

export const checkListItemModelConfig: ModelConfig2<CheckListItemModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  completedDate: {
    key: 'completedDate',
    label: 'completedDate',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
