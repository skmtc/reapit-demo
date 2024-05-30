import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CertificateResponsiblePartyModel } from '@/schemas/index.ts'

export const certificateResponsiblePartyModelConfig: ModelConfig<CertificateResponsiblePartyModel> = {
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  responsibleParty: {
    key: 'responsibleParty',
    label: 'responsibleParty',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
