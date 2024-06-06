import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { RecurrenceModel } from 'schemas/index.ts'

export const RecurrenceModel = export const recurrenceModelConfig: ModelConfig<RecurrenceModel> = {interval: {
      key: 'interval',
      label: 'interval',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,until: {
      key: 'until',
      label: 'until',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};