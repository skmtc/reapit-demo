import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingModel } from '@/schemas/index.ts'

export const propertyLettingModelConfig: ModelConfig<PropertyLettingModel> = {
  instructed: {
    key: 'instructed',
    label: 'instructed',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  availableFrom: {
    key: 'availableFrom',
    label: 'availableFrom',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  availableTo: {
    key: 'availableTo',
    label: 'availableTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  agreementSigned: {
    key: 'agreementSigned',
    label: 'agreementSigned',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rent: {
    key: 'rent',
    label: 'rent',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentIncludes: {
    key: 'rentIncludes',
    label: 'rentIncludes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  furnishing: {
    key: 'furnishing',
    label: 'furnishing',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  term: {
    key: 'term',
    label: 'term',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  agentRole: {
    key: 'agentRole',
    label: 'agentRole',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  landlordId: {
    key: 'landlordId',
    label: 'landlordId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  worksOrderNote: {
    key: 'worksOrderNote',
    label: 'worksOrderNote',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  minimumTerm: {
    key: 'minimumTerm',
    label: 'minimumTerm',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyManagerId: {
    key: 'propertyManagerId',
    label: 'propertyManagerId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  managementCompanyIds: {
    key: 'managementCompanyIds',
    label: 'managementCompanyIds',
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
  managementFee: {
    key: 'managementFee',
    label: 'managementFee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  lettingFee: {
    key: 'lettingFee',
    label: 'lettingFee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  qualifier: {
    key: 'qualifier',
    label: 'qualifier',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  utilities: {
    key: 'utilities',
    label: 'utilities',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  deposit: {
    key: 'deposit',
    label: 'deposit',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentInsurance: {
    key: 'rentInsurance',
    label: 'rentInsurance',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  licencing: {
    key: 'licencing',
    label: 'licencing',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
