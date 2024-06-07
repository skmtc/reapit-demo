import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CompanyModel } from '@/schemas/companyModel.generated.tsx'

export const companyModelConfig: ModelConfig<CompanyModel> = {_links: {
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
,name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,branch: {
      key: 'branch',
      label: 'branch',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,notes: {
      key: 'notes',
      label: 'notes',
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
,vatRegistered: {
      key: 'vatRegistered',
      label: 'vatRegistered',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeIds: {
      key: 'typeIds',
      label: 'typeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,supplierTypeId: {
      key: 'supplierTypeId',
      label: 'supplierTypeId',
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
,address: {
      key: 'address',
      label: 'address',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,payments: {
      key: 'payments',
      label: 'payments',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,additionalContactDetails: {
      key: 'additionalContactDetails',
      label: 'additionalContactDetails',
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
,communicationPreferenceSms: {
      key: 'communicationPreferenceSms',
      label: 'communicationPreferenceSms',
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
,relationships: {
      key: 'relationships',
      label: 'relationships',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};