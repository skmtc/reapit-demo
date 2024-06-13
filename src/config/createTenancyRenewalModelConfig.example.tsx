import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'

export const createTenancyRenewalModelConfig: ModelConfig<CreateTenancyRenewalModel> = {
  startDate: {
    key: 'startDate',
    label: 'startDate',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  endDate: {
    key: 'endDate',
    label: 'endDate',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rent: {
    key: 'rent',
    label: 'rent',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  lettingFee: {
    key: 'lettingFee',
    label: 'lettingFee',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  managementFee: {
    key: 'managementFee',
    label: 'managementFee',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
