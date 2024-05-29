import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyGeolocationModel } from '@/schemas/index.ts'

export const propertyGeolocationModelConfig: ModelConfig2<PropertyGeolocationModel> = {
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
