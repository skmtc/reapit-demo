import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantContactModel } from '@/schemas/index.ts'

export const applicantContactModelConfig: ModelConfig<ApplicantContactModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  name: {
    key: 'name',
    label: 'name',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  title: {
    key: 'title',
    label: 'title',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  forename: {
    key: 'forename',
    label: 'forename',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  surname: {
    key: 'surname',
    label: 'surname',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  dateOfBirth: {
    key: 'dateOfBirth',
    label: 'dateOfBirth',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  homePhone: {
    key: 'homePhone',
    label: 'homePhone',
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
  marketingConsent: {
    key: 'marketingConsent',
    label: 'marketingConsent',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  primaryAddress: {
    key: 'primaryAddress',
    label: 'primaryAddress',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  additionalContactDetails: {
    key: 'additionalContactDetails',
    label: 'additionalContactDetails',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
