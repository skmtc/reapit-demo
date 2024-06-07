import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateOfferModel } from '@/schemas/createOfferModel.generated.tsx'

export const createOfferModelConfig: ModelConfig<CreateOfferModel> = {applicantId: {
      key: 'applicantId',
      label: 'applicantId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,date: {
      key: 'date',
      label: 'date',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,amount: {
      key: 'amount',
      label: 'amount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,inclusions: {
      key: 'inclusions',
      label: 'inclusions',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exclusions: {
      key: 'exclusions',
      label: 'exclusions',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,conditions: {
      key: 'conditions',
      label: 'conditions',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};