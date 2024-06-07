import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateDownwardLinkModel } from '@/schemas/createDownwardLinkModel.generated.tsx'

export const createDownwardLinkModelConfig: ModelConfig<CreateDownwardLinkModel> = {offerId: {
      key: 'offerId',
      label: 'offerId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyAddress: {
      key: 'propertyAddress',
      label: 'propertyAddress',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agent: {
      key: 'agent',
      label: 'agent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buyer: {
      key: 'buyer',
      label: 'buyer',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buyerSolicitorId: {
      key: 'buyerSolicitorId',
      label: 'buyerSolicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};