import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantSourceModel } from 'schemas/index.ts'

export const ApplicantSourceModel = export const applicantSourceModelConfig: ModelConfig<ApplicantSourceModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};