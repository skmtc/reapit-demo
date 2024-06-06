import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantBuyingModel } from 'schemas/index.ts'

export const ApplicantBuyingModel = export const applicantBuyingModelConfig: ModelConfig<ApplicantBuyingModel> = {priceFrom: {
      key: 'priceFrom',
      label: 'priceFrom',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,priceTo: {
      key: 'priceTo',
      label: 'priceTo',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,decoration: {
      key: 'decoration',
      label: 'decoration',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,reasonId: {
      key: 'reasonId',
      label: 'reasonId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,positionId: {
      key: 'positionId',
      label: 'positionId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,tenure: {
      key: 'tenure',
      label: 'tenure',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mortgageExpiry: {
      key: 'mortgageExpiry',
      label: 'mortgageExpiry',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,leaseRemaining: {
      key: 'leaseRemaining',
      label: 'leaseRemaining',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};