import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { OfficeAddressGeolocationModel } from '@/schemas/index.ts'

export const officeAddressGeolocationModelConfig: ModelConfig2<OfficeAddressGeolocationModel> = {
  latitude: {
    key: 'latitude',
    label: 'latitude',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  longitude: {
    key: 'longitude',
    label: 'longitude',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
