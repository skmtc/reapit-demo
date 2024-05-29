import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CheckListItemModel } from '@/schemas/index.ts'

export const checkListItemModelConfig: ModelConfig<CheckListItemModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  completedDate: {
    key: 'completedDate',
    label: 'completedDate',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
