import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyArrearsModel } from 'schemas/index.ts'

export const TenancyArrearsModel = export const tenancyArrearsModelConfig: ModelConfig<TenancyArrearsModel> = {chaseArrears: {
      key: 'chaseArrears',
      label: 'chaseArrears',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,paymentPlan: {
      key: 'paymentPlan',
      label: 'paymentPlan',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};