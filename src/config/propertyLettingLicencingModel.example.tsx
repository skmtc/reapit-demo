import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingLicencingModel } from 'schemas/index.ts'

export const PropertyLettingLicencingModel = export const propertyLettingLicencingModelConfig: ModelConfig<PropertyLettingLicencingModel> = {licenceRequired: {
      key: 'licenceRequired',
      label: 'licenceRequired',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,licenceType: {
      key: 'licenceType',
      label: 'licenceType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,households: {
      key: 'households',
      label: 'households',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,occupants: {
      key: 'occupants',
      label: 'occupants',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,aboveCommercialPremises: {
      key: 'aboveCommercialPremises',
      label: 'aboveCommercialPremises',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,application: {
      key: 'application',
      label: 'application',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};