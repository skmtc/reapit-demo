import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyRentChangeModel } from 'schemas/index.ts'

export const TenancyRentChangeModel = export const tenancyRentChangeModelConfig: ModelConfig<TenancyRentChangeModel> = {amount: {
      key: 'amount',
      label: 'amount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,percentage: {
      key: 'percentage',
      label: 'percentage',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};