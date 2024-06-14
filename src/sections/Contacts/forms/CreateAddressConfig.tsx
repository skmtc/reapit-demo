import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateContactAddressModel } from '@/schemas/createContactAddressModel.generated'

export const createContactAddressModelConfig: ModelConfig<CreateContactAddressModel> = {
  type: {
    key: 'type',
    label: 'type',
    defaultValue: '',
    placeholder: 'type',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buildingName: {
    key: 'buildingName',
    label: 'buildingName',
    defaultValue: '',
    placeholder: 'buildingName',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buildingNumber: {
    key: 'buildingNumber',
    label: 'buildingNumber',
    defaultValue: '',
    placeholder: 'buildingNumber',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  line1: {
    key: 'line1',
    label: 'line1',
    defaultValue: '',
    placeholder: 'line1',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  line2: {
    key: 'line2',
    label: 'line2',
    defaultValue: '',
    placeholder: 'line2',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  line3: {
    key: 'line3',
    label: 'line3',
    defaultValue: '',
    placeholder: 'line3',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  line4: {
    key: 'line4',
    label: 'line4',
    defaultValue: '',
    placeholder: 'line4',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  postcode: {
    key: 'postcode',
    label: 'postcode',
    defaultValue: '',
    placeholder: 'postcode',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  countryId: {
    key: 'countryId',
    label: 'countryId',
    defaultValue: '',
    placeholder: 'countryId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
