import { Switch } from '@/inputs/Switch.tsx'
import { InputWrap } from '@reapit/elements'
import { StringInput } from '@/inputs/StringInput.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'

export const createKeyMovementModelConfig: ModelConfig<CreateKeyMovementModel> = {
  checkInRequired: {
    key: 'checkInRequired',
    label: 'checkInRequired',
    defaultValue: false,
    placeholder: 'checkInRequired',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  checkOutToId: {
    key: 'checkOutToId',
    label: 'checkOutToId',
    defaultValue: '',
    placeholder: 'checkOutToId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  checkOutToType: {
    key: 'checkOutToType',
    label: 'checkOutToType',
    defaultValue: '',
    placeholder: 'checkOutToType',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  checkOutNegotiatorId: {
    key: 'checkOutNegotiatorId',
    label: 'checkOutNegotiatorId',
    defaultValue: '',
    placeholder: 'checkOutNegotiatorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
