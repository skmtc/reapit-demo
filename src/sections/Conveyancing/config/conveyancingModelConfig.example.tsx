import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { ConveyancingModel } from '@/schemas/conveyancingModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const conveyancingModelConfig: ModelConfig<ConveyancingModel> = {
  _links: {
    key: '_links',
    label: '_links',
    defaultValue: null,
    placeholder: '_links',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    defaultValue: null,
    placeholder: '_embedded',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  id: {
    key: 'id',
    label: 'id',
    defaultValue: '',
    placeholder: 'id',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  created: {
    key: 'created',
    label: 'created',
    defaultValue: '',
    placeholder: 'created',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  modified: {
    key: 'modified',
    label: 'modified',
    defaultValue: '',
    placeholder: 'modified',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  isExternal: {
    key: 'isExternal',
    label: 'isExternal',
    defaultValue: false,
    placeholder: 'isExternal',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    placeholder: 'propertyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  propertyAddress: {
    key: 'propertyAddress',
    label: 'propertyAddress',
    defaultValue: '',
    placeholder: 'propertyAddress',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  vendor: {
    key: 'vendor',
    label: 'vendor',
    defaultValue: '',
    placeholder: 'vendor',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  vendorId: {
    key: 'vendorId',
    label: 'vendorId',
    defaultValue: '',
    placeholder: 'vendorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  vendorSolicitorId: {
    key: 'vendorSolicitorId',
    label: 'vendorSolicitorId',
    defaultValue: '',
    placeholder: 'vendorSolicitorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buyer: {
    key: 'buyer',
    label: 'buyer',
    defaultValue: '',
    placeholder: 'buyer',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buyerId: {
    key: 'buyerId',
    label: 'buyerId',
    defaultValue: '',
    placeholder: 'buyerId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buyerSolicitorId: {
    key: 'buyerSolicitorId',
    label: 'buyerSolicitorId',
    defaultValue: '',
    placeholder: 'buyerSolicitorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  externalAgent: {
    key: 'externalAgent',
    label: 'externalAgent',
    defaultValue: '',
    placeholder: 'externalAgent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  externalAgentId: {
    key: 'externalAgentId',
    label: 'externalAgentId',
    defaultValue: '',
    placeholder: 'externalAgentId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  upwardChainId: {
    key: 'upwardChainId',
    label: 'upwardChainId',
    defaultValue: '',
    placeholder: 'upwardChainId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  downwardChainId: {
    key: 'downwardChainId',
    label: 'downwardChainId',
    defaultValue: '',
    placeholder: 'downwardChainId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  fixturesAndFittingsCompleted: {
    key: 'fixturesAndFittingsCompleted',
    label: 'fixturesAndFittingsCompleted',
    defaultValue: '',
    placeholder: 'fixturesAndFittingsCompleted',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  deedsRequested: {
    key: 'deedsRequested',
    label: 'deedsRequested',
    defaultValue: '',
    placeholder: 'deedsRequested',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  deedsReceived: {
    key: 'deedsReceived',
    label: 'deedsReceived',
    defaultValue: '',
    placeholder: 'deedsReceived',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  enquiriesSent: {
    key: 'enquiriesSent',
    label: 'enquiriesSent',
    defaultValue: '',
    placeholder: 'enquiriesSent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  enquiriesAnswered: {
    key: 'enquiriesAnswered',
    label: 'enquiriesAnswered',
    defaultValue: '',
    placeholder: 'enquiriesAnswered',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  searchesPaid: {
    key: 'searchesPaid',
    label: 'searchesPaid',
    defaultValue: '',
    placeholder: 'searchesPaid',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  searchesApplied: {
    key: 'searchesApplied',
    label: 'searchesApplied',
    defaultValue: '',
    placeholder: 'searchesApplied',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  searchesReceived: {
    key: 'searchesReceived',
    label: 'searchesReceived',
    defaultValue: '',
    placeholder: 'searchesReceived',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  contractSent: {
    key: 'contractSent',
    label: 'contractSent',
    defaultValue: '',
    placeholder: 'contractSent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  contractReceived: {
    key: 'contractReceived',
    label: 'contractReceived',
    defaultValue: '',
    placeholder: 'contractReceived',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  contractApproved: {
    key: 'contractApproved',
    label: 'contractApproved',
    defaultValue: '',
    placeholder: 'contractApproved',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  contractVendorSigned: {
    key: 'contractVendorSigned',
    label: 'contractVendorSigned',
    defaultValue: '',
    placeholder: 'contractVendorSigned',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  contractBuyerSigned: {
    key: 'contractBuyerSigned',
    label: 'contractBuyerSigned',
    defaultValue: '',
    placeholder: 'contractBuyerSigned',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageRequired: {
    key: 'mortgageRequired',
    label: 'mortgageRequired',
    defaultValue: '',
    placeholder: 'mortgageRequired',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageLoanPercentage: {
    key: 'mortgageLoanPercentage',
    label: 'mortgageLoanPercentage',
    defaultValue: null,
    placeholder: 'mortgageLoanPercentage',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageSubmitted: {
    key: 'mortgageSubmitted',
    label: 'mortgageSubmitted',
    defaultValue: '',
    placeholder: 'mortgageSubmitted',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageOfferReceived: {
    key: 'mortgageOfferReceived',
    label: 'mortgageOfferReceived',
    defaultValue: '',
    placeholder: 'mortgageOfferReceived',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageLenderId: {
    key: 'mortgageLenderId',
    label: 'mortgageLenderId',
    defaultValue: '',
    placeholder: 'mortgageLenderId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageBrokerId: {
    key: 'mortgageBrokerId',
    label: 'mortgageBrokerId',
    defaultValue: '',
    placeholder: 'mortgageBrokerId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageSurveyDate: {
    key: 'mortgageSurveyDate',
    label: 'mortgageSurveyDate',
    defaultValue: '',
    placeholder: 'mortgageSurveyDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  mortgageSurveyorId: {
    key: 'mortgageSurveyorId',
    label: 'mortgageSurveyorId',
    defaultValue: '',
    placeholder: 'mortgageSurveyorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  additionalSurveyRequired: {
    key: 'additionalSurveyRequired',
    label: 'additionalSurveyRequired',
    defaultValue: '',
    placeholder: 'additionalSurveyRequired',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  additionalSurveyDate: {
    key: 'additionalSurveyDate',
    label: 'additionalSurveyDate',
    defaultValue: '',
    placeholder: 'additionalSurveyDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  additionalSurveyorId: {
    key: 'additionalSurveyorId',
    label: 'additionalSurveyorId',
    defaultValue: '',
    placeholder: 'additionalSurveyorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  exchangedVendor: {
    key: 'exchangedVendor',
    label: 'exchangedVendor',
    defaultValue: '',
    placeholder: 'exchangedVendor',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  exchangedBuyer: {
    key: 'exchangedBuyer',
    label: 'exchangedBuyer',
    defaultValue: '',
    placeholder: 'exchangedBuyer',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  completion: {
    key: 'completion',
    label: 'completion',
    defaultValue: '',
    placeholder: 'completion',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  checkListItems: {
    key: 'checkListItems',
    label: 'checkListItems',
    defaultValue: [],
    placeholder: 'checkListItems',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    defaultValue: '',
    placeholder: '_eTag',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: null,
    placeholder: 'metadata',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
