import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateDownwardLinkModel } from '@/schemas/createDownwardLinkModel.generated.tsx'

export const createDownwardLinkModelConfig: ModelConfig<CreateDownwardLinkModel> = {
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
  buyer: {
    key: 'buyer',
    label: 'buyer',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  buyerSolicitorId: {
    key: 'buyerSolicitorId',
    label: 'buyerSolicitorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
