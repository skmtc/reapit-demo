import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TypeModel } from '@/schemas/index.ts'

export const typeModelConfig: ModelConfig<TypeModel> = {
  agencyTypes: {
    key: 'agencyTypes',
    label: 'agencyTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  appointmentTypes: {
    key: 'appointmentTypes',
    label: 'appointmentTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  applicantStatuses: {
    key: 'applicantStatuses',
    label: 'applicantStatuses',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  boardStatuses: {
    key: 'boardStatuses',
    label: 'boardStatuses',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  buyingPositions: {
    key: 'buyingPositions',
    label: 'buyingPositions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  buyingReasons: {
    key: 'buyingReasons',
    label: 'buyingReasons',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  certificateTypes: {
    key: 'certificateTypes',
    label: 'certificateTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  companyTypes: {
    key: 'companyTypes',
    label: 'companyTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  contactCategories: {
    key: 'contactCategories',
    label: 'contactCategories',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  documentTypes: {
    key: 'documentTypes',
    label: 'documentTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  identityDocumentTypes: {
    key: 'identityDocumentTypes',
    label: 'identityDocumentTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  journalEntryTypes: {
    key: 'journalEntryTypes',
    label: 'journalEntryTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  keyTypes: {
    key: 'keyTypes',
    label: 'keyTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  followUpResponses: {
    key: 'followUpResponses',
    label: 'followUpResponses',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  sellingReasons: {
    key: 'sellingReasons',
    label: 'sellingReasons',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentInsuranceCancellationReasons: {
    key: 'rentInsuranceCancellationReasons',
    label: 'rentInsuranceCancellationReasons',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentingPositions: {
    key: 'rentingPositions',
    label: 'rentingPositions',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  supplierTypes: {
    key: 'supplierTypes',
    label: 'supplierTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  taskTypes: {
    key: 'taskTypes',
    label: 'taskTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenancyLegalStatuses: {
    key: 'tenancyLegalStatuses',
    label: 'tenancyLegalStatuses',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenancyTypes: {
    key: 'tenancyTypes',
    label: 'tenancyTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  vendorTypes: {
    key: 'vendorTypes',
    label: 'vendorTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  worksOrderTypes: {
    key: 'worksOrderTypes',
    label: 'worksOrderTypes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
