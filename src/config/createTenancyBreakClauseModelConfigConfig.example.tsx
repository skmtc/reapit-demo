import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'

export const createTenancyBreakClauseModelConfig: ModelConfig<CreateTenancyBreakClauseModel> = {typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,active: {
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