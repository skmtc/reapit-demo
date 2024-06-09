import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateReferralModel } from '@/schemas/createReferralModel.generated.tsx'

export const createReferralModelConfig: ModelConfig<CreateReferralModel> = {
  referralTypeId: {
    key: 'referralTypeId',
    label: 'referralTypeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  contactId: {
    key: 'contactId',
    label: 'contactId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  amount: {
    key: 'amount',
    label: 'amount',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
