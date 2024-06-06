import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { RenewalOptionsModel } from 'schemas/index.ts'

export const RenewalOptionsModel = export const renewalOptionsModelConfig: ModelConfig<RenewalOptionsModel> = {optionId: {
      key: 'optionId',
      label: 'optionId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,optionText: {
      key: 'optionText',
      label: 'optionText',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,expiry: {
      key: 'expiry',
      label: 'expiry',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,conditionIds: {
      key: 'conditionIds',
      label: 'conditionIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};