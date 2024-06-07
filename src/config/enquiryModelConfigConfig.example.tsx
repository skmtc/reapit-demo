import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { EnquiryModel } from '@/schemas/enquiryModel.generated.tsx'

export const enquiryModelConfig: ModelConfig<EnquiryModel> = {_links: {
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
,enquiryType: {
      key: 'enquiryType',
      label: 'enquiryType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,message: {
      key: 'message',
      label: 'message',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,marketingConsent: {
      key: 'marketingConsent',
      label: 'marketingConsent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,position: {
      key: 'position',
      label: 'position',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeId: {
      key: 'officeId',
      label: 'officeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,applicantId: {
      key: 'applicantId',
      label: 'applicantId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,sourceName: {
      key: 'sourceName',
      label: 'sourceName',
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
,address: {
      key: 'address',
      label: 'address',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buying: {
      key: 'buying',
      label: 'buying',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,renting: {
      key: 'renting',
      label: 'renting',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,bedrooms: {
      key: 'bedrooms',
      label: 'bedrooms',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyIds: {
      key: 'propertyIds',
      label: 'propertyIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};