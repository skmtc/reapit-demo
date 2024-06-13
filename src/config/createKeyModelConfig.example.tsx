import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'

export const createKeyModelConfig: ModelConfig<CreateKeyModel> = {
  number: {
    key: 'number',
    label: 'number',
    defaultValue: '',
    placeholder: 'number',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    placeholder: 'typeId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  officeId: {
    key: 'officeId',
    label: 'officeId',
    defaultValue: '',
    placeholder: 'officeId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  keysInSet: {
    key: 'keysInSet',
    label: 'keysInSet',
    defaultValue: [],
    placeholder: 'keysInSet',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
