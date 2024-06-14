import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateOpenHouseAttendeeModel } from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'

export const createOpenHouseAttendeeModelConfig: ModelConfig<CreateOpenHouseAttendeeModel> = {
  interestLevel: {
    key: 'interestLevel',
    label: 'interestLevel',
    defaultValue: '',
    placeholder: 'interestLevel',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    placeholder: 'notes',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  attendee: {
    key: 'attendee',
    label: 'attendee',
    defaultValue: null,
    placeholder: 'attendee',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
