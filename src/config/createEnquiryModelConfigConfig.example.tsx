import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateEnquiryModel } from '@/schemas/createEnquiryModel.generated.tsx'

export const createEnquiryModelConfig: ModelConfig<CreateEnquiryModel> = {title: {
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
,position: {
      key: 'position',
      label: 'position',
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
,officeId: {
      key: 'officeId',
      label: 'officeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,marketingConsent: {
      key: 'marketingConsent',
      label: 'marketingConsent',
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
    }};