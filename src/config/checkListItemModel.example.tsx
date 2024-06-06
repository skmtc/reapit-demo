import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CheckListItemModel } from 'schemas/index.ts'

export const CheckListItemModel = export const checkListItemModelConfig: ModelConfig<CheckListItemModel> = {name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,completed: {
      key: 'completed',
      label: 'completed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,completedDate: {
      key: 'completedDate',
      label: 'completedDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};