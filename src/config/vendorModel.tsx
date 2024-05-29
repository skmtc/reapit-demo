import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { VendorModel } from '@/schemas/index.ts'

export const vendorModelConfig: ModelConfig<VendorModel> = {
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
  lastCall: {
    key: 'lastCall',
    label: 'lastCall',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  nextCall: {
    key: 'nextCall',
    label: 'nextCall',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  sellingReasonId: {
    key: 'sellingReasonId',
    label: 'sellingReasonId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  solicitorId: {
    key: 'solicitorId',
    label: 'solicitorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  source: {
    key: 'source',
    label: 'source',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  related: {
    key: 'related',
    label: 'related',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  correspondenceAddressType: {
    key: 'correspondenceAddressType',
    label: 'correspondenceAddressType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  archivedOn: {
    key: 'archivedOn',
    label: 'archivedOn',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
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
