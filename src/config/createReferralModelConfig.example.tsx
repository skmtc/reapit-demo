import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateReferralModel } from '@/schemas/createReferralModel.generated.tsx'

export const createReferralModelConfig: ModelConfig<CreateReferralModel> = {
  referralTypeId: {
    key: 'referralTypeId',
    label: 'referralTypeId',
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
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  contactId: {
    key: 'contactId',
    label: 'contactId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
