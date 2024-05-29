import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantBuyingModel } from '@/schemas/index.ts'

export const applicantBuyingModelConfig: ModelConfig<ApplicantBuyingModel> = {
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
  decoration: {
    key: 'decoration',
    label: 'decoration',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  reasonId: {
    key: 'reasonId',
    label: 'reasonId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  positionId: {
    key: 'positionId',
    label: 'positionId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenure: {
    key: 'tenure',
    label: 'tenure',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  mortgageExpiry: {
    key: 'mortgageExpiry',
    label: 'mortgageExpiry',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  leaseRemaining: {
    key: 'leaseRemaining',
    label: 'leaseRemaining',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
