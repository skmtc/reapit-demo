import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyDepositModel } from '@/schemas/index.ts'

export const tenancyDepositModelConfig: ModelConfig<TenancyDepositModel> = {
  heldBy: {
    key: 'heldBy',
    label: 'heldBy',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  period: {
    key: 'period',
    label: 'period',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  sum: {
    key: 'sum',
    label: 'sum',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
