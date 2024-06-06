import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyGeolocationModel } from 'schemas/index.ts'

export const PropertyGeolocationModel = export const propertyGeolocationModelConfig: ModelConfig<PropertyGeolocationModel> = {latitude: {
      key: 'latitude',
      label: 'latitude',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,longitude: {
      key: 'longitude',
      label: 'longitude',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};