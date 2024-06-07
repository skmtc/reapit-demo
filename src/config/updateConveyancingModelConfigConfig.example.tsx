import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateConveyancingModel } from '@/schemas/updateConveyancingModel.generated.tsx'

export const updateConveyancingModelConfig: ModelConfig<UpdateConveyancingModel> = {vendorSolicitorId: {
      key: 'vendorSolicitorId',
      label: 'vendorSolicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buyerSolicitorId: {
      key: 'buyerSolicitorId',
      label: 'buyerSolicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fixturesAndFittingsCompleted: {
      key: 'fixturesAndFittingsCompleted',
      label: 'fixturesAndFittingsCompleted',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,deedsRequested: {
      key: 'deedsRequested',
      label: 'deedsRequested',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,deedsReceived: {
      key: 'deedsReceived',
      label: 'deedsReceived',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,enquiriesSent: {
      key: 'enquiriesSent',
      label: 'enquiriesSent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,enquiriesAnswered: {
      key: 'enquiriesAnswered',
      label: 'enquiriesAnswered',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,searchesPaid: {
      key: 'searchesPaid',
      label: 'searchesPaid',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,searchesApplied: {
      key: 'searchesApplied',
      label: 'searchesApplied',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,searchesReceived: {
      key: 'searchesReceived',
      label: 'searchesReceived',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,contractSent: {
      key: 'contractSent',
      label: 'contractSent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,contractReceived: {
      key: 'contractReceived',
      label: 'contractReceived',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,contractApproved: {
      key: 'contractApproved',
      label: 'contractApproved',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,contractVendorSigned: {
      key: 'contractVendorSigned',
      label: 'contractVendorSigned',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,contractBuyerSigned: {
      key: 'contractBuyerSigned',
      label: 'contractBuyerSigned',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageRequired: {
      key: 'mortgageRequired',
      label: 'mortgageRequired',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageLoanPercentage: {
      key: 'mortgageLoanPercentage',
      label: 'mortgageLoanPercentage',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageSubmitted: {
      key: 'mortgageSubmitted',
      label: 'mortgageSubmitted',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageOfferReceived: {
      key: 'mortgageOfferReceived',
      label: 'mortgageOfferReceived',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageLenderId: {
      key: 'mortgageLenderId',
      label: 'mortgageLenderId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageBrokerId: {
      key: 'mortgageBrokerId',
      label: 'mortgageBrokerId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageSurveyDate: {
      key: 'mortgageSurveyDate',
      label: 'mortgageSurveyDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageSurveyorId: {
      key: 'mortgageSurveyorId',
      label: 'mortgageSurveyorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,additionalSurveyRequired: {
      key: 'additionalSurveyRequired',
      label: 'additionalSurveyRequired',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,additionalSurveyDate: {
      key: 'additionalSurveyDate',
      label: 'additionalSurveyDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,additionalSurveyorId: {
      key: 'additionalSurveyorId',
      label: 'additionalSurveyorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exchangedVendor: {
      key: 'exchangedVendor',
      label: 'exchangedVendor',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exchangedBuyer: {
      key: 'exchangedBuyer',
      label: 'exchangedBuyer',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,completion: {
      key: 'completion',
      label: 'completion',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};