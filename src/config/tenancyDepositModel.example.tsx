import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyDepositModel } from 'schemas/index.ts'

export const TenancyDepositModel = export const tenancyDepositModelConfig: ModelConfig<TenancyDepositModel> = {heldBy: {
      key: 'heldBy',
      label: 'heldBy',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,period: {
      key: 'period',
      label: 'period',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,sum: {
      key: 'sum',
      label: 'sum',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};