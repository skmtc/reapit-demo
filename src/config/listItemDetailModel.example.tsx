import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ListItemDetailModel } from 'schemas/index.ts'

export const ListItemDetailModel = export const listItemDetailModelConfig: ModelConfig<ListItemDetailModel> = {id: {
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
    }
,active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeIds: {
      key: 'officeIds',
      label: 'officeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};