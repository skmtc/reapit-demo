import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateAreaModel } from '@/schemas/updateAreaModel.generated.tsx'

export const updateAreaModelConfig: ModelConfig<UpdateAreaModel> = {name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,area: {
      key: 'area',
      label: 'area',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,departmentIds: {
      key: 'departmentIds',
      label: 'departmentIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeIds: {
      key: 'officeIds',
      label: 'officeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};