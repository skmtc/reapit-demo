import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { RecurrenceModel } from '@/schemas/index.ts'

export const recurrenceModelConfig: ModelConfig<RecurrenceModel> = {
  interval: {
    key: 'interval',
    label: 'interval',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  until: {
    key: 'until',
    label: 'until',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
