import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertyLettingLicenceApplicationModel } from '@/schemas/index.ts'

export const propertyLettingLicenceApplicationModelConfig: ModelConfig2<PropertyLettingLicenceApplicationModel> = {
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  referenceNumber: {
    key: 'referenceNumber',
    label: 'referenceNumber',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  granted: {
    key: 'granted',
    label: 'granted',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
