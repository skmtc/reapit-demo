import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { CheckInKeyModel } from '@/schemas/index.ts'

export const checkInKeyModelConfig: ModelConfig2<CheckInKeyModel> = {
  checkInNegotiatorId: {
    key: 'checkInNegotiatorId',
    label: 'checkInNegotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
