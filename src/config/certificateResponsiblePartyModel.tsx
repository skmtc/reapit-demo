import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CertificateResponsiblePartyModel } from '@/schemas/index.ts'

export const certificateResponsiblePartyModelConfig: ModelConfig<CertificateResponsiblePartyModel> = {
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  responsibleParty: {
    key: 'responsibleParty',
    label: 'responsibleParty',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
