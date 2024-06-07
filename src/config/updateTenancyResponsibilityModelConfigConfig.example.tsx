import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateTenancyResponsibilityModel } from '@/schemas/updateTenancyResponsibilityModel.generated.tsx'

export const updateTenancyResponsibilityModelConfig: ModelConfig<UpdateTenancyResponsibilityModel> = {appliesTo: {
      key: 'appliesTo',
      label: 'appliesTo',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agreements: {
      key: 'agreements',
      label: 'agreements',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};