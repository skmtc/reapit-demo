import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ConveyancingModel } from 'schemas/index.ts'

export const ConveyancingModel = export const conveyancingModelConfig: ModelConfig<ConveyancingModel> = {_links: {
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
,isExternal: {
      key: 'isExternal',
      label: 'isExternal',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyAddress: {
      key: 'propertyAddress',
      label: 'propertyAddress',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vendor: {
      key: 'vendor',
      label: 'vendor',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vendorId: {
      key: 'vendorId',
      label: 'vendorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vendorSolicitorId: {
      key: 'vendorSolicitorId',
      label: 'vendorSolicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buyer: {
      key: 'buyer',
      label: 'buyer',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buyerId: {
      key: 'buyerId',
      label: 'buyerId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buyerSolicitorId: {
      key: 'buyerSolicitorId',
      label: 'buyerSolicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,externalAgent: {
      key: 'externalAgent',
      label: 'externalAgent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,externalAgentId: {
      key: 'externalAgentId',
      label: 'externalAgentId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,upwardChainId: {
      key: 'upwardChainId',
      label: 'upwardChainId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,downwardChainId: {
      key: 'downwardChainId',
      label: 'downwardChainId',
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
,checkListItems: {
      key: 'checkListItems',
      label: 'checkListItems',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};