import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CertificateModel } from '@/schemas/index.ts'

export const certificateModelConfig: ModelConfig<CertificateModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  category: {
    key: 'category',
    label: 'category',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  start: {
    key: 'start',
    label: 'start',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  companyId: {
    key: 'companyId',
    label: 'companyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  statusId: {
    key: 'statusId',
    label: 'statusId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  referenceNumber: {
    key: 'referenceNumber',
    label: 'referenceNumber',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  responsibleParty: {
    key: 'responsibleParty',
    label: 'responsibleParty',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
