import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantCommercialModel } from 'schemas/index.ts'

export const ApplicantCommercialModel = export const applicantCommercialModelConfig: ModelConfig<ApplicantCommercialModel> = {useClass: {
      key: 'useClass',
      label: 'useClass',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,floorLevel: {
      key: 'floorLevel',
      label: 'floorLevel',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};