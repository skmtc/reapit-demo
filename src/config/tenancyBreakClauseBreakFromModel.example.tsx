import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyBreakClauseBreakFromModel } from '@/schemas/index.ts'

export const tenancyBreakClauseBreakFromModelConfig: ModelConfig<TenancyBreakClauseBreakFromModel> = {
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  minTermMonths: {
    key: 'minTermMonths',
    label: 'minTermMonths',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
