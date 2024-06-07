import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateTenancyAllowanceModel } from '@/schemas/updateTenancyAllowanceModel.generated.tsx'

export const updateTenancyAllowanceModelConfig: ModelConfig<UpdateTenancyAllowanceModel> = {state: {
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