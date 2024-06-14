import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateNegotiatorModel } from '@/schemas/createNegotiatorModel.generated.tsx'

export const createNegotiatorModelConfig: ModelConfig<CreateNegotiatorModel> = {
  name: {
    key: 'name',
    label: 'name',
    defaultValue: '',
    placeholder: 'name',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  jobTitle: {
    key: 'jobTitle',
    label: 'jobTitle',
    defaultValue: '',
    placeholder: 'jobTitle',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  active: {
    key: 'active',
    label: 'active',
    defaultValue: false,
    placeholder: 'active',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
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
  workPhone: {
    key: 'workPhone',
    label: 'workPhone',
    defaultValue: '',
    placeholder: 'workPhone',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mobilePhone: {
    key: 'mobilePhone',
    label: 'mobilePhone',
    defaultValue: '',
    placeholder: 'mobilePhone',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  email: {
    key: 'email',
    label: 'email',
    defaultValue: '',
    placeholder: 'email',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  diaryNegotiatorIds: {
    key: 'diaryNegotiatorIds',
    label: 'diaryNegotiatorIds',
    defaultValue: [],
    placeholder: 'diaryNegotiatorIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  diaryOfficeIds: {
    key: 'diaryOfficeIds',
    label: 'diaryOfficeIds',
    defaultValue: [],
    placeholder: 'diaryOfficeIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: null,
    placeholder: 'metadata',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
