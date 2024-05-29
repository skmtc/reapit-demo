import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CompanyAddressModel } from '@/schemas/index.ts'

export const companyAddressModelConfig: ModelConfig<CompanyAddressModel> = {
  buildingName: {
    key: 'buildingName',
    label: 'buildingName',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  buildingNumber: {
    key: 'buildingNumber',
    label: 'buildingNumber',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  line1: {
    key: 'line1',
    label: 'line1',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  line2: {
    key: 'line2',
    label: 'line2',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  line3: {
    key: 'line3',
    label: 'line3',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  line4: {
    key: 'line4',
    label: 'line4',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  postcode: {
    key: 'postcode',
    label: 'postcode',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  country: {
    key: 'country',
    label: 'country',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
