import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateCertificateResponsibilitiesModel } from '@/schemas/updateCertificateResponsibilitiesModel.generated.tsx'

export const updateCertificateResponsibilitiesModelConfig: ModelConfig<UpdateCertificateResponsibilitiesModel> = {responsibleParties: {
      key: 'responsibleParties',
      label: 'responsibleParties',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};