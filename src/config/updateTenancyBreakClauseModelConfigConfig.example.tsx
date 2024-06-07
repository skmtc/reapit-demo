import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateTenancyBreakClauseModel } from '@/schemas/updateTenancyBreakClauseModel.generated.tsx'

export const updateTenancyBreakClauseModelConfig: ModelConfig<UpdateTenancyBreakClauseModel> = {active: {
      key: 'active',
      label: 'active',
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
    }
,breakFrom: {
      key: 'breakFrom',
      label: 'breakFrom',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,noticeRequired: {
      key: 'noticeRequired',
      label: 'noticeRequired',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};