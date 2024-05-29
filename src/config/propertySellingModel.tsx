import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertySellingModel } from '@/schemas/index.ts'

export const propertySellingModelConfig: ModelConfig<PropertySellingModel> = {
  instructed: {
    key: 'instructed',
    label: 'instructed',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  price: {
    key: 'price',
    label: 'price',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  priceTo: {
    key: 'priceTo',
    label: 'priceTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  reservationFee: {
    key: 'reservationFee',
    label: 'reservationFee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  qualifier: {
    key: 'qualifier',
    label: 'qualifier',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  disposal: {
    key: 'disposal',
    label: 'disposal',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  completed: {
    key: 'completed',
    label: 'completed',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  exchanged: {
    key: 'exchanged',
    label: 'exchanged',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  accountPaid: {
    key: 'accountPaid',
    label: 'accountPaid',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenure: {
    key: 'tenure',
    label: 'tenure',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  vendorId: {
    key: 'vendorId',
    label: 'vendorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  agency: {
    key: 'agency',
    label: 'agency',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  agencyId: {
    key: 'agencyId',
    label: 'agencyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  agreementExpiry: {
    key: 'agreementExpiry',
    label: 'agreementExpiry',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  fee: {
    key: 'fee',
    label: 'fee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  exchangedCompanyFee: {
    key: 'exchangedCompanyFee',
    label: 'exchangedCompanyFee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  recommendedPrice: {
    key: 'recommendedPrice',
    label: 'recommendedPrice',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  valuationPrice: {
    key: 'valuationPrice',
    label: 'valuationPrice',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  brochureId: {
    key: 'brochureId',
    label: 'brochureId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  publicBrochureUrl: {
    key: 'publicBrochureUrl',
    label: 'publicBrochureUrl',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  exchangedPrice: {
    key: 'exchangedPrice',
    label: 'exchangedPrice',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  exchangedOfficeId: {
    key: 'exchangedOfficeId',
    label: 'exchangedOfficeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  decoration: {
    key: 'decoration',
    label: 'decoration',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  sharedOwnership: {
    key: 'sharedOwnership',
    label: 'sharedOwnership',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  subAgentTerms: {
    key: 'subAgentTerms',
    label: 'subAgentTerms',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
