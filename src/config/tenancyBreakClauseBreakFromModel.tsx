import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyBreakClauseBreakFromModel } from '@/schemas/index.ts'

export const tenancyBreakClauseBreakFromModelConfig: ModelConfig<TenancyBreakClauseBreakFromModel> = {
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  minTermMonths: {
    key: 'minTermMonths',
    label: 'minTermMonths',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
