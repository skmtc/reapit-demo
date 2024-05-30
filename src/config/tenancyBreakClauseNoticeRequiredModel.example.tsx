import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyBreakClauseNoticeRequiredModel } from '@/schemas/index.ts'

export const tenancyBreakClauseNoticeRequiredModelConfig: ModelConfig<TenancyBreakClauseNoticeRequiredModel> = {
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
