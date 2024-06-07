import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'

export const createUpwardLinkModelConfig: ModelConfig<CreateUpwardLinkModel> = {offerId: {
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
,vendor: {
      key: 'vendor',
      label: 'vendor',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vendorSolicitorId: {
      key: 'vendorSolicitorId',
      label: 'vendorSolicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};