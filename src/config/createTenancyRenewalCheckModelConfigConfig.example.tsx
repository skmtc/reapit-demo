import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyRenewalCheckModel } from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'

export const createTenancyRenewalCheckModelConfig: ModelConfig<CreateTenancyRenewalCheckModel> = {status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,checkTypeId: {
      key: 'checkTypeId',
      label: 'checkTypeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};