import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ListItemModel } from 'schemas/index.ts'

export const ListItemModel = export const listItemModelConfig: ModelConfig<ListItemModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,value: {
      key: 'value',
      label: 'value',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};