import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { OfficeAddressGeolocationModel } from '@/schemas/index.ts'

export const officeAddressGeolocationModelConfig: ModelConfig<OfficeAddressGeolocationModel> = {
  latitude: {
    key: 'latitude',
    label: 'latitude',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  longitude: {
    key: 'longitude',
    label: 'longitude',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
