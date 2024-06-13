import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateContactModel } from '@/schemas/createContactModel.generated.tsx'

export const createContactModelConfig: ModelConfig<CreateContactModel> = {
  title: {
    key: 'title',
    label: 'title',
    defaultValue: '',
    placeholder: 'title',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  forename: {
    key: 'forename',
    label: 'forename',
    defaultValue: '',
    placeholder: 'forename',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  surname: {
    key: 'surname',
    label: 'surname',
    defaultValue: '',
    placeholder: 'surname',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  dateOfBirth: {
    key: 'dateOfBirth',
    label: 'dateOfBirth',
    defaultValue: '',
    placeholder: 'dateOfBirth',
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
  marketingConsent: {
    key: 'marketingConsent',
    label: 'marketingConsent',
    defaultValue: '',
    placeholder: 'marketingConsent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  source: {
    key: 'source',
    label: 'source',
    defaultValue: null,
    placeholder: 'source',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  homePhone: {
    key: 'homePhone',
    label: 'homePhone',
    defaultValue: '',
    placeholder: 'homePhone',
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
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    placeholder: 'officeIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  negotiatorIds: {
    key: 'negotiatorIds',
    label: 'negotiatorIds',
    defaultValue: [],
    placeholder: 'negotiatorIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  categoryIds: {
    key: 'categoryIds',
    label: 'categoryIds',
    defaultValue: [],
    placeholder: 'categoryIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  primaryAddress: {
    key: 'primaryAddress',
    label: 'primaryAddress',
    defaultValue: null,
    placeholder: 'primaryAddress',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  secondaryAddress: {
    key: 'secondaryAddress',
    label: 'secondaryAddress',
    defaultValue: null,
    placeholder: 'secondaryAddress',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  workAddress: {
    key: 'workAddress',
    label: 'workAddress',
    defaultValue: null,
    placeholder: 'workAddress',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  communicationPreferenceLetter: {
    key: 'communicationPreferenceLetter',
    label: 'communicationPreferenceLetter',
    defaultValue: false,
    placeholder: 'communicationPreferenceLetter',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  communicationPreferenceEmail: {
    key: 'communicationPreferenceEmail',
    label: 'communicationPreferenceEmail',
    defaultValue: false,
    placeholder: 'communicationPreferenceEmail',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  communicationPreferencePhone: {
    key: 'communicationPreferencePhone',
    label: 'communicationPreferencePhone',
    defaultValue: false,
    placeholder: 'communicationPreferencePhone',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  communicationPreferenceSMS: {
    key: 'communicationPreferenceSMS',
    label: 'communicationPreferenceSMS',
    defaultValue: false,
    placeholder: 'communicationPreferenceSMS',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
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
