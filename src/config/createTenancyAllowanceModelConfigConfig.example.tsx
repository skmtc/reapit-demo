import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyAllowanceModel } from '@/schemas/createTenancyAllowanceModel.generated.tsx'

export const createTenancyAllowanceModelConfig: ModelConfig<CreateTenancyAllowanceModel> = {typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,state: {
      key: 'state',
      label: 'state',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agreements: {
      key: 'agreements',
      label: 'agreements',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};