import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingsDepositModel } from 'schemas/index.ts'

export const PropertyLettingsDepositModel = export const propertyLettingsDepositModelConfig: ModelConfig<PropertyLettingsDepositModel> = {type: {
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