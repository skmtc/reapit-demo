import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ContactModel } from '@/schemas/contactModel.generated.tsx'

export const contactModelConfig: ModelConfig<ContactModel> = {_links: {
      key: '_links',
      label: '_links',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_embedded: {
      key: '_embedded',
      label: '_embedded',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,created: {
      key: 'created',
      label: 'created',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,title: {
      key: 'title',
      label: 'title',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,forename: {
      key: 'forename',
      label: 'forename',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,surname: {
      key: 'surname',
      label: 'surname',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,dateOfBirth: {
      key: 'dateOfBirth',
      label: 'dateOfBirth',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,marketingConsent: {
      key: 'marketingConsent',
      label: 'marketingConsent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,identityCheck: {
      key: 'identityCheck',
      label: 'identityCheck',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,source: {
      key: 'source',
      label: 'source',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,homePhone: {
      key: 'homePhone',
      label: 'homePhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,workPhone: {
      key: 'workPhone',
      label: 'workPhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mobilePhone: {
      key: 'mobilePhone',
      label: 'mobilePhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,email: {
      key: 'email',
      label: 'email',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,archivedOn: {
      key: 'archivedOn',
      label: 'archivedOn',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fromArchive: {
      key: 'fromArchive',
      label: 'fromArchive',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,primaryAddress: {
      key: 'primaryAddress',
      label: 'primaryAddress',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,secondaryAddress: {
      key: 'secondaryAddress',
      label: 'secondaryAddress',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,workAddress: {
      key: 'workAddress',
      label: 'workAddress',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeIds: {
      key: 'officeIds',
      label: 'officeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorIds: {
      key: 'negotiatorIds',
      label: 'negotiatorIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,categoryIds: {
      key: 'categoryIds',
      label: 'categoryIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,communicationPreferenceLetter: {
      key: 'communicationPreferenceLetter',
      label: 'communicationPreferenceLetter',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,communicationPreferenceEmail: {
      key: 'communicationPreferenceEmail',
      label: 'communicationPreferenceEmail',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,communicationPreferencePhone: {
      key: 'communicationPreferencePhone',
      label: 'communicationPreferencePhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,communicationPreferenceSMS: {
      key: 'communicationPreferenceSMS',
      label: 'communicationPreferenceSMS',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,additionalContactDetails: {
      key: 'additionalContactDetails',
      label: 'additionalContactDetails',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,extrasField: {
      key: 'extrasField',
      label: 'extrasField',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,relationships: {
      key: 'relationships',
      label: 'relationships',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};