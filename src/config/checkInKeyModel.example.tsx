import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CheckInKeyModel } from 'schemas/index.ts'

export const CheckInKeyModel = export const checkInKeyModelConfig: ModelConfig<CheckInKeyModel> = {checkInNegotiatorId: {
      key: 'checkInNegotiatorId',
      label: 'checkInNegotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};