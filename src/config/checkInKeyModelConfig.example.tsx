import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CheckInKeyModel } from '@/schemas/checkInKeyModel.generated.tsx'

export const checkInKeyModelConfig: ModelConfig<CheckInKeyModel> = {
  checkInNegotiatorId: {
    key: 'checkInNegotiatorId',
    label: 'checkInNegotiatorId',
    defaultValue: '',
    placeholder: 'checkInNegotiatorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
