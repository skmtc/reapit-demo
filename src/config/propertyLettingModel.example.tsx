import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingModel } from 'schemas/index.ts'

export const PropertyLettingModel = export const propertyLettingModelConfig: ModelConfig<PropertyLettingModel> = {instructed: {
      key: 'instructed',
      label: 'instructed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,availableFrom: {
      key: 'availableFrom',
      label: 'availableFrom',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,availableTo: {
      key: 'availableTo',
      label: 'availableTo',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agreementSigned: {
      key: 'agreementSigned',
      label: 'agreementSigned',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rent: {
      key: 'rent',
      label: 'rent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentFrequency: {
      key: 'rentFrequency',
      label: 'rentFrequency',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentIncludes: {
      key: 'rentIncludes',
      label: 'rentIncludes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,furnishing: {
      key: 'furnishing',
      label: 'furnishing',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,term: {
      key: 'term',
      label: 'term',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agentRole: {
      key: 'agentRole',
      label: 'agentRole',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,landlordId: {
      key: 'landlordId',
      label: 'landlordId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,worksOrderNote: {
      key: 'worksOrderNote',
      label: 'worksOrderNote',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,minimumTerm: {
      key: 'minimumTerm',
      label: 'minimumTerm',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyManagerId: {
      key: 'propertyManagerId',
      label: 'propertyManagerId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,managementCompanyIds: {
      key: 'managementCompanyIds',
      label: 'managementCompanyIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,brochureId: {
      key: 'brochureId',
      label: 'brochureId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,publicBrochureUrl: {
      key: 'publicBrochureUrl',
      label: 'publicBrochureUrl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,managementFee: {
      key: 'managementFee',
      label: 'managementFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,lettingFee: {
      key: 'lettingFee',
      label: 'lettingFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,qualifier: {
      key: 'qualifier',
      label: 'qualifier',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,utilities: {
      key: 'utilities',
      label: 'utilities',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,deposit: {
      key: 'deposit',
      label: 'deposit',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentInsurance: {
      key: 'rentInsurance',
      label: 'rentInsurance',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,licencing: {
      key: 'licencing',
      label: 'licencing',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};