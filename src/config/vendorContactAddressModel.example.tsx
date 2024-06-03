import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { VendorContactAddressModel } from '@/schemas/index.ts'

export const vendorContactAddressModelConfig: ModelConfig<VendorContactAddressModel> = {
  buildingName: {
    key: 'buildingName',
    label: 'buildingName',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  buildingNumber: {
    key: 'buildingNumber',
    label: 'buildingNumber',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  line1: {
    key: 'line1',
    label: 'line1',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  line2: {
    key: 'line2',
    label: 'line2',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  line3: {
    key: 'line3',
    label: 'line3',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  line4: {
    key: 'line4',
    label: 'line4',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  postcode: {
    key: 'postcode',
    label: 'postcode',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  countryId: {
    key: 'countryId',
    label: 'countryId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}