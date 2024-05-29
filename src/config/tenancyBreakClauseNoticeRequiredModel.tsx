import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyBreakClauseNoticeRequiredModel } from '@/schemas/index.ts'

export const tenancyBreakClauseNoticeRequiredModelConfig: ModelConfig2<TenancyBreakClauseNoticeRequiredModel> = {
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  beforeBreakMonths: {
    key: 'beforeBreakMonths',
    label: 'beforeBreakMonths',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
