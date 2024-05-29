import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { DepartmentModel } from '@/schemas/index.ts'

export const departmentModelConfig: ModelConfig<DepartmentModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  typeOptions: {
    key: 'typeOptions',
    label: 'typeOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  styleOptions: {
    key: 'styleOptions',
    label: 'styleOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  situationOptions: {
    key: 'situationOptions',
    label: 'situationOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  parkingOptions: {
    key: 'parkingOptions',
    label: 'parkingOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  ageOptions: {
    key: 'ageOptions',
    label: 'ageOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  localityOptions: {
    key: 'localityOptions',
    label: 'localityOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  specialFeaturesOptions: {
    key: 'specialFeaturesOptions',
    label: 'specialFeaturesOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  commercialUseClassOptions: {
    key: 'commercialUseClassOptions',
    label: 'commercialUseClassOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  commercialFloorLevelOptions: {
    key: 'commercialFloorLevelOptions',
    label: 'commercialFloorLevelOptions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasBedrooms: {
    key: 'hasBedrooms',
    label: 'hasBedrooms',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasBathrooms: {
    key: 'hasBathrooms',
    label: 'hasBathrooms',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasReceptionRooms: {
    key: 'hasReceptionRooms',
    label: 'hasReceptionRooms',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasParkingSpaces: {
    key: 'hasParkingSpaces',
    label: 'hasParkingSpaces',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasFloorLevelEnabled: {
    key: 'hasFloorLevelEnabled',
    label: 'hasFloorLevelEnabled',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasInternalFloorsEnabled: {
    key: 'hasInternalFloorsEnabled',
    label: 'hasInternalFloorsEnabled',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  hasTotalFloorsEnabled: {
    key: 'hasTotalFloorsEnabled',
    label: 'hasTotalFloorsEnabled',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
