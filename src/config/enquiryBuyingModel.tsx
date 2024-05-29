import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { EnquiryBuyingModel } from '@/schemas/index.ts'

export const enquiryBuyingModelConfig: ModelConfig<EnquiryBuyingModel> = {
  priceFrom: {
    key: 'priceFrom',
    label: 'priceFrom',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  priceTo: {
    key: 'priceTo',
    label: 'priceTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
