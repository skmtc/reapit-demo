import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantInternalAreaModel } from 'schemas/index.ts'

export const ApplicantInternalAreaModel = export const applicantInternalAreaModelConfig: ModelConfig<ApplicantInternalAreaModel> = {type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,amount: {
      key: 'amount',
      label: 'amount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};