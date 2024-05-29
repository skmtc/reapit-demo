import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { IdentityDocumentModel } from '@/schemas/index.ts'

export const identityDocumentModelConfig: ModelConfig<IdentityDocumentModel> = {
  documentId: {
    key: 'documentId',
    label: 'documentId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  details: {
    key: 'details',
    label: 'details',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
