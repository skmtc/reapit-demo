import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateCompanyModel } from '@/schemas/createCompanyModel.generated.tsx'

export const createCompanyModelConfig: ModelConfig<CreateCompanyModel> = {
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  branch: {
    key: 'branch',
    label: 'branch',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  marketingConsent: {
    key: 'marketingConsent',
    label: 'marketingConsent',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  vatRegistered: {
    key: 'vatRegistered',
    label: 'vatRegistered',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeIds: {
    key: 'typeIds',
    label: 'typeIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  supplierTypeId: {
    key: 'supplierTypeId',
    label: 'supplierTypeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  workPhone: {
    key: 'workPhone',
    label: 'workPhone',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  mobilePhone: {
    key: 'mobilePhone',
    label: 'mobilePhone',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  email: {
    key: 'email',
    label: 'email',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  address: {
    key: 'address',
    label: 'address',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  communicationPreferenceLetter: {
    key: 'communicationPreferenceLetter',
    label: 'communicationPreferenceLetter',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  communicationPreferenceEmail: {
    key: 'communicationPreferenceEmail',
    label: 'communicationPreferenceEmail',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  communicationPreferencePhone: {
    key: 'communicationPreferencePhone',
    label: 'communicationPreferencePhone',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  communicationPreferenceSms: {
    key: 'communicationPreferenceSms',
    label: 'communicationPreferenceSms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
