import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { DepartmentModel } from '@/schemas/index.ts'

export const departmentModelConfig: ModelConfig<DepartmentModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeOptions: {
    key: 'typeOptions',
    label: 'typeOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  styleOptions: {
    key: 'styleOptions',
    label: 'styleOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  situationOptions: {
    key: 'situationOptions',
    label: 'situationOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parkingOptions: {
    key: 'parkingOptions',
    label: 'parkingOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  ageOptions: {
    key: 'ageOptions',
    label: 'ageOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  localityOptions: {
    key: 'localityOptions',
    label: 'localityOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  specialFeaturesOptions: {
    key: 'specialFeaturesOptions',
    label: 'specialFeaturesOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  commercialUseClassOptions: {
    key: 'commercialUseClassOptions',
    label: 'commercialUseClassOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  commercialFloorLevelOptions: {
    key: 'commercialFloorLevelOptions',
    label: 'commercialFloorLevelOptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasBedrooms: {
    key: 'hasBedrooms',
    label: 'hasBedrooms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasBathrooms: {
    key: 'hasBathrooms',
    label: 'hasBathrooms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasReceptionRooms: {
    key: 'hasReceptionRooms',
    label: 'hasReceptionRooms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasParkingSpaces: {
    key: 'hasParkingSpaces',
    label: 'hasParkingSpaces',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasFloorLevelEnabled: {
    key: 'hasFloorLevelEnabled',
    label: 'hasFloorLevelEnabled',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasInternalFloorsEnabled: {
    key: 'hasInternalFloorsEnabled',
    label: 'hasInternalFloorsEnabled',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  hasTotalFloorsEnabled: {
    key: 'hasTotalFloorsEnabled',
    label: 'hasTotalFloorsEnabled',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
