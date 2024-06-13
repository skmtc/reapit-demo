import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CheckInKeyModel } from '@/schemas/checkInKeyModel.generated.tsx'

export const checkInKeyModelConfig: ModelConfig<CheckInKeyModel> = {
  checkInNegotiatorId: {
    key: 'checkInNegotiatorId',
    label: 'checkInNegotiatorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
