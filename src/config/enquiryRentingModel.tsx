import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { EnquiryRentingModel } from '@/schemas/index.ts'

export const enquiryRentingModelConfig: ModelConfig<EnquiryRentingModel> = {
  rentFrom: {
    key: 'rentFrom',
    label: 'rentFrom',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentTo: {
    key: 'rentTo',
    label: 'rentTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
