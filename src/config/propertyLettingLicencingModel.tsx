import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingLicencingModel } from '@/schemas/index.ts'

export const propertyLettingLicencingModelConfig: ModelConfig<PropertyLettingLicencingModel> = {
  licenceRequired: {
    key: 'licenceRequired',
    label: 'licenceRequired',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  licenceType: {
    key: 'licenceType',
    label: 'licenceType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  households: {
    key: 'households',
    label: 'households',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  occupants: {
    key: 'occupants',
    label: 'occupants',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  aboveCommercialPremises: {
    key: 'aboveCommercialPremises',
    label: 'aboveCommercialPremises',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  application: {
    key: 'application',
    label: 'application',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
