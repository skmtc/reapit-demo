import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateApplicantModel } from '@/schemas/createApplicantModel.generated.tsx'

export const createApplicantModelConfig: ModelConfig<CreateApplicantModel> = {
  marketingMode: {
    key: 'marketingMode',
    label: 'marketingMode',
    defaultValue: '',
    placeholder: 'marketingMode',
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
  statusId: {
    key: 'statusId',
    label: 'statusId',
    defaultValue: '',
    placeholder: 'statusId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  sellingStatus: {
    key: 'sellingStatus',
    label: 'sellingStatus',
    defaultValue: '',
    placeholder: 'sellingStatus',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  sellingPosition: {
    key: 'sellingPosition',
    label: 'sellingPosition',
    defaultValue: '',
    placeholder: 'sellingPosition',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  lastCall: {
    key: 'lastCall',
    label: 'lastCall',
    defaultValue: '',
    placeholder: 'lastCall',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  nextCall: {
    key: 'nextCall',
    label: 'nextCall',
    defaultValue: '',
    placeholder: 'nextCall',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  departmentId: {
    key: 'departmentId',
    label: 'departmentId',
    defaultValue: '',
    placeholder: 'departmentId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  solicitorId: {
    key: 'solicitorId',
    label: 'solicitorId',
    defaultValue: '',
    placeholder: 'solicitorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  potentialClient: {
    key: 'potentialClient',
    label: 'potentialClient',
    defaultValue: false,
    placeholder: 'potentialClient',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  type: {
    key: 'type',
    label: 'type',
    defaultValue: [],
    placeholder: 'type',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  style: {
    key: 'style',
    label: 'style',
    defaultValue: [],
    placeholder: 'style',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  situation: {
    key: 'situation',
    label: 'situation',
    defaultValue: [],
    placeholder: 'situation',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parking: {
    key: 'parking',
    label: 'parking',
    defaultValue: [],
    placeholder: 'parking',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  age: {
    key: 'age',
    label: 'age',
    defaultValue: [],
    placeholder: 'age',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  locality: {
    key: 'locality',
    label: 'locality',
    defaultValue: [],
    placeholder: 'locality',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  specialFeatures: {
    key: 'specialFeatures',
    label: 'specialFeatures',
    defaultValue: [],
    placeholder: 'specialFeatures',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bedroomsMin: {
    key: 'bedroomsMin',
    label: 'bedroomsMin',
    defaultValue: null,
    placeholder: 'bedroomsMin',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bedroomsMax: {
    key: 'bedroomsMax',
    label: 'bedroomsMax',
    defaultValue: null,
    placeholder: 'bedroomsMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  receptionsMin: {
    key: 'receptionsMin',
    label: 'receptionsMin',
    defaultValue: null,
    placeholder: 'receptionsMin',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  receptionsMax: {
    key: 'receptionsMax',
    label: 'receptionsMax',
    defaultValue: null,
    placeholder: 'receptionsMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bathroomsMin: {
    key: 'bathroomsMin',
    label: 'bathroomsMin',
    defaultValue: null,
    placeholder: 'bathroomsMin',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bathroomsMax: {
    key: 'bathroomsMax',
    label: 'bathroomsMax',
    defaultValue: null,
    placeholder: 'bathroomsMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parkingSpacesMin: {
    key: 'parkingSpacesMin',
    label: 'parkingSpacesMin',
    defaultValue: null,
    placeholder: 'parkingSpacesMin',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parkingSpacesMax: {
    key: 'parkingSpacesMax',
    label: 'parkingSpacesMax',
    defaultValue: null,
    placeholder: 'parkingSpacesMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  locationType: {
    key: 'locationType',
    label: 'locationType',
    defaultValue: '',
    placeholder: 'locationType',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  locationOptions: {
    key: 'locationOptions',
    label: 'locationOptions',
    defaultValue: [],
    placeholder: 'locationOptions',
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
  externalArea: {
    key: 'externalArea',
    label: 'externalArea',
    defaultValue: null,
    placeholder: 'externalArea',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  internalArea: {
    key: 'internalArea',
    label: 'internalArea',
    defaultValue: null,
    placeholder: 'internalArea',
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
  regional: {
    key: 'regional',
    label: 'regional',
    defaultValue: null,
    placeholder: 'regional',
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
}
