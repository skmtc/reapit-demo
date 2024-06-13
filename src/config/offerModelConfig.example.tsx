import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { OfferModel } from '@/schemas/offerModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const offerModelConfig: ModelConfig<OfferModel> = {
  _links: {
    key: '_links',
    label: '_links',
    defaultValue: null,
    placeholder: '_links',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    defaultValue: null,
    placeholder: '_embedded',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  id: {
    key: 'id',
    label: 'id',
    defaultValue: '',
    placeholder: 'id',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  created: {
    key: 'created',
    label: 'created',
    defaultValue: '',
    placeholder: 'created',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  modified: {
    key: 'modified',
    label: 'modified',
    defaultValue: '',
    placeholder: 'modified',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  currency: {
    key: 'currency',
    label: 'currency',
    defaultValue: '',
    placeholder: 'currency',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    defaultValue: '',
    placeholder: 'applicantId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  companyId: {
    key: 'companyId',
    label: 'companyId',
    defaultValue: '',
    placeholder: 'companyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  contactId: {
    key: 'contactId',
    label: 'contactId',
    defaultValue: '',
    placeholder: 'contactId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    placeholder: 'propertyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    placeholder: 'negotiatorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  date: {
    key: 'date',
    label: 'date',
    defaultValue: '',
    placeholder: 'date',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  amount: {
    key: 'amount',
    label: 'amount',
    defaultValue: null,
    placeholder: 'amount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  status: {
    key: 'status',
    label: 'status',
    defaultValue: '',
    placeholder: 'status',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  inclusions: {
    key: 'inclusions',
    label: 'inclusions',
    defaultValue: '',
    placeholder: 'inclusions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  exclusions: {
    key: 'exclusions',
    label: 'exclusions',
    defaultValue: '',
    placeholder: 'exclusions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  conditions: {
    key: 'conditions',
    label: 'conditions',
    defaultValue: '',
    placeholder: 'conditions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  related: {
    key: 'related',
    label: 'related',
    defaultValue: [],
    placeholder: 'related',
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
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    defaultValue: '',
    placeholder: '_eTag',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
