import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'

export const createTenancyResponsibilityModelConfig: ModelConfig<CreateTenancyResponsibilityModel> = {typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,appliesTo: {
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