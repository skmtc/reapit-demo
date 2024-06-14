import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateEnquiryModel } from '@/schemas/createEnquiryModel.generated.tsx'

export const createEnquiryModelConfig: ModelConfig<CreateEnquiryModel> = {
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
  position: {
    key: 'position',
    label: 'position',
    defaultValue: '',
    placeholder: 'position',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  enquiryType: {
    key: 'enquiryType',
    label: 'enquiryType',
    defaultValue: '',
    placeholder: 'enquiryType',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  message: {
    key: 'message',
    label: 'message',
    defaultValue: '',
    placeholder: 'message',
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
  sourceName: {
    key: 'sourceName',
    label: 'sourceName',
    defaultValue: '',
    placeholder: 'sourceName',
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
  address: {
    key: 'address',
    label: 'address',
    defaultValue: null,
    placeholder: 'address',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buying: {
    key: 'buying',
    label: 'buying',
    defaultValue: null,
    placeholder: 'buying',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  renting: {
    key: 'renting',
    label: 'renting',
    defaultValue: null,
    placeholder: 'renting',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bedrooms: {
    key: 'bedrooms',
    label: 'bedrooms',
    defaultValue: null,
    placeholder: 'bedrooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  propertyIds: {
    key: 'propertyIds',
    label: 'propertyIds',
    defaultValue: [],
    placeholder: 'propertyIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
