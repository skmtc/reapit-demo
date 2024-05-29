import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CheckInKeyModel } from '@/schemas/index.ts'

export const checkInKeyModelConfig: ModelConfig<CheckInKeyModel> = {
  checkInNegotiatorId: {
    key: 'checkInNegotiatorId',
    label: 'checkInNegotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
