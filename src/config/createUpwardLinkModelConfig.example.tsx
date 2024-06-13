import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'

export const createUpwardLinkModelConfig: ModelConfig<CreateUpwardLinkModel> = {
  offerId: {
    key: 'offerId',
    label: 'offerId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyAddress: {
    key: 'propertyAddress',
    label: 'propertyAddress',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  agent: {
    key: 'agent',
    label: 'agent',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  vendor: {
    key: 'vendor',
    label: 'vendor',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  vendorSolicitorId: {
    key: 'vendorSolicitorId',
    label: 'vendorSolicitorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
