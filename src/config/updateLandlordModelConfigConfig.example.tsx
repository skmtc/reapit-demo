import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateLandlordModel } from '@/schemas/updateLandlordModel.generated.tsx'

export const updateLandlordModelConfig: ModelConfig<UpdateLandlordModel> = {active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,solicitorId: {
      key: 'solicitorId',
      label: 'solicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeId: {
      key: 'officeId',
      label: 'officeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,source: {
      key: 'source',
      label: 'source',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};