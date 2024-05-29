import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { EnquiryRentingModel } from '@/schemas/index.ts'

export const enquiryRentingModelConfig: ModelConfig2<EnquiryRentingModel> = {
  rentFrom: {
    key: 'rentFrom',
    label: 'rentFrom',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentTo: {
    key: 'rentTo',
    label: 'rentTo',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
