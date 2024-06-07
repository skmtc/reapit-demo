import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateSourceModel } from '@/schemas/updateSourceModel.generated.tsx'

export const updateSourceModelConfig: ModelConfig<UpdateSourceModel> = {name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeIds: {
      key: 'officeIds',
      label: 'officeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,departmentIds: {
      key: 'departmentIds',
      label: 'departmentIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};