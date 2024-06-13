import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { AppointmentModel } from '@/schemas/appointmentModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const appointmentModelConfig: ModelConfig<AppointmentModel> = {
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
  start: {
    key: 'start',
    label: 'start',
    defaultValue: '',
    placeholder: 'start',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  end: {
    key: 'end',
    label: 'end',
    defaultValue: '',
    placeholder: 'end',
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
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    placeholder: 'description',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  recurring: {
    key: 'recurring',
    label: 'recurring',
    defaultValue: false,
    placeholder: 'recurring',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  recurrence: {
    key: 'recurrence',
    label: 'recurrence',
    defaultValue: null,
    placeholder: 'recurrence',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  cancelled: {
    key: 'cancelled',
    label: 'cancelled',
    defaultValue: false,
    placeholder: 'cancelled',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  followUp: {
    key: 'followUp',
    label: 'followUp',
    defaultValue: null,
    placeholder: 'followUp',
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
  organiserId: {
    key: 'organiserId',
    label: 'organiserId',
    defaultValue: '',
    placeholder: 'organiserId',
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
  attended: {
    key: 'attended',
    label: 'attended',
    defaultValue: '',
    placeholder: 'attended',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  accompanied: {
    key: 'accompanied',
    label: 'accompanied',
    defaultValue: false,
    placeholder: 'accompanied',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  isRepeat: {
    key: 'isRepeat',
    label: 'isRepeat',
    defaultValue: false,
    placeholder: 'isRepeat',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  virtual: {
    key: 'virtual',
    label: 'virtual',
    defaultValue: false,
    placeholder: 'virtual',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  negotiatorConfirmed: {
    key: 'negotiatorConfirmed',
    label: 'negotiatorConfirmed',
    defaultValue: false,
    placeholder: 'negotiatorConfirmed',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  attendeeConfirmed: {
    key: 'attendeeConfirmed',
    label: 'attendeeConfirmed',
    defaultValue: false,
    placeholder: 'attendeeConfirmed',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  propertyConfirmed: {
    key: 'propertyConfirmed',
    label: 'propertyConfirmed',
    defaultValue: false,
    placeholder: 'propertyConfirmed',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    defaultValue: false,
    placeholder: 'fromArchive',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  otherAgentId: {
    key: 'otherAgentId',
    label: 'otherAgentId',
    defaultValue: '',
    placeholder: 'otherAgentId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  documents: {
    key: 'documents',
    label: 'documents',
    defaultValue: null,
    placeholder: 'documents',
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
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
    defaultValue: null,
    placeholder: 'extrasField',
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
