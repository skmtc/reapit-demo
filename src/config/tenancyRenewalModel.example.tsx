import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyRenewalModel } from '@/schemas/index.ts'

export const tenancyRenewalModelConfig: ModelConfig<TenancyRenewalModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  startDate: {
    key: 'startDate',
    label: 'startDate',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  endDate: {
    key: 'endDate',
    label: 'endDate',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rent: {
    key: 'rent',
    label: 'rent',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentChange: {
    key: 'rentChange',
    label: 'rentChange',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  lettingFee: {
    key: 'lettingFee',
    label: 'lettingFee',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  managementFee: {
    key: 'managementFee',
    label: 'managementFee',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
