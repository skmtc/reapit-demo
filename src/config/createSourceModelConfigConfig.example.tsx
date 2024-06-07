import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateSourceModel } from '@/schemas/createSourceModel.generated.tsx'

export const createSourceModelConfig: ModelConfig<CreateSourceModel> = {name: {
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