import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingLicenceApplicationModel } from '@/schemas/index.ts'

export const propertyLettingLicenceApplicationModelConfig: ModelConfig<PropertyLettingLicenceApplicationModel> = {
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  referenceNumber: {
    key: 'referenceNumber',
    label: 'referenceNumber',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  date: {
    key: 'date',
    label: 'date',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  granted: {
    key: 'granted',
    label: 'granted',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
