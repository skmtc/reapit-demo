import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { ApplicantCommercialModel } from '@/schemas/index.ts'

export const applicantCommercialModelConfig: ModelConfig2<ApplicantCommercialModel> = {
  useClass: {
    key: 'useClass',
    label: 'useClass',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
