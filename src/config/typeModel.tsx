import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TypeModel } from '@/schemas/index.ts'

export const typeModelConfig: ModelConfig2<TypeModel> = {
  agencyTypes: {
    key: 'agencyTypes',
    label: 'agencyTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  appointmentTypes: {
    key: 'appointmentTypes',
    label: 'appointmentTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  applicantStatuses: {
    key: 'applicantStatuses',
    label: 'applicantStatuses',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardStatuses: {
    key: 'boardStatuses',
    label: 'boardStatuses',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  buyingPositions: {
    key: 'buyingPositions',
    label: 'buyingPositions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  buyingReasons: {
    key: 'buyingReasons',
    label: 'buyingReasons',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  certificateTypes: {
    key: 'certificateTypes',
    label: 'certificateTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  companyTypes: {
    key: 'companyTypes',
    label: 'companyTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  contactCategories: {
    key: 'contactCategories',
    label: 'contactCategories',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  documentTypes: {
    key: 'documentTypes',
    label: 'documentTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  identityDocumentTypes: {
    key: 'identityDocumentTypes',
    label: 'identityDocumentTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  journalEntryTypes: {
    key: 'journalEntryTypes',
    label: 'journalEntryTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  keyTypes: {
    key: 'keyTypes',
    label: 'keyTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  followUpResponses: {
    key: 'followUpResponses',
    label: 'followUpResponses',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  sellingReasons: {
    key: 'sellingReasons',
    label: 'sellingReasons',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentInsuranceCancellationReasons: {
    key: 'rentInsuranceCancellationReasons',
    label: 'rentInsuranceCancellationReasons',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentingPositions: {
    key: 'rentingPositions',
    label: 'rentingPositions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  supplierTypes: {
    key: 'supplierTypes',
    label: 'supplierTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  taskTypes: {
    key: 'taskTypes',
    label: 'taskTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyLegalStatuses: {
    key: 'tenancyLegalStatuses',
    label: 'tenancyLegalStatuses',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyTypes: {
    key: 'tenancyTypes',
    label: 'tenancyTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  vendorTypes: {
    key: 'vendorTypes',
    label: 'vendorTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  worksOrderTypes: {
    key: 'worksOrderTypes',
    label: 'worksOrderTypes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
