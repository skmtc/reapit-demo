import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { DepartmentModel } from '@/schemas/departmentModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const departmentModelConfig: ModelConfig<DepartmentModel> = {
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
  typeOptions: {
    key: 'typeOptions',
    label: 'typeOptions',
    defaultValue: [],
    placeholder: 'typeOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  styleOptions: {
    key: 'styleOptions',
    label: 'styleOptions',
    defaultValue: [],
    placeholder: 'styleOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  situationOptions: {
    key: 'situationOptions',
    label: 'situationOptions',
    defaultValue: [],
    placeholder: 'situationOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parkingOptions: {
    key: 'parkingOptions',
    label: 'parkingOptions',
    defaultValue: [],
    placeholder: 'parkingOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  ageOptions: {
    key: 'ageOptions',
    label: 'ageOptions',
    defaultValue: [],
    placeholder: 'ageOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  localityOptions: {
    key: 'localityOptions',
    label: 'localityOptions',
    defaultValue: [],
    placeholder: 'localityOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  specialFeaturesOptions: {
    key: 'specialFeaturesOptions',
    label: 'specialFeaturesOptions',
    defaultValue: [],
    placeholder: 'specialFeaturesOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  commercialUseClassOptions: {
    key: 'commercialUseClassOptions',
    label: 'commercialUseClassOptions',
    defaultValue: [],
    placeholder: 'commercialUseClassOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  commercialFloorLevelOptions: {
    key: 'commercialFloorLevelOptions',
    label: 'commercialFloorLevelOptions',
    defaultValue: [],
    placeholder: 'commercialFloorLevelOptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  hasBedrooms: {
    key: 'hasBedrooms',
    label: 'hasBedrooms',
    defaultValue: false,
    placeholder: 'hasBedrooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  hasBathrooms: {
    key: 'hasBathrooms',
    label: 'hasBathrooms',
    defaultValue: false,
    placeholder: 'hasBathrooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  hasReceptionRooms: {
    key: 'hasReceptionRooms',
    label: 'hasReceptionRooms',
    defaultValue: false,
    placeholder: 'hasReceptionRooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  hasParkingSpaces: {
    key: 'hasParkingSpaces',
    label: 'hasParkingSpaces',
    defaultValue: false,
    placeholder: 'hasParkingSpaces',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  hasFloorLevelEnabled: {
    key: 'hasFloorLevelEnabled',
    label: 'hasFloorLevelEnabled',
    defaultValue: false,
    placeholder: 'hasFloorLevelEnabled',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  hasInternalFloorsEnabled: {
    key: 'hasInternalFloorsEnabled',
    label: 'hasInternalFloorsEnabled',
    defaultValue: false,
    placeholder: 'hasInternalFloorsEnabled',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  hasTotalFloorsEnabled: {
    key: 'hasTotalFloorsEnabled',
    label: 'hasTotalFloorsEnabled',
    defaultValue: false,
    placeholder: 'hasTotalFloorsEnabled',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
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
