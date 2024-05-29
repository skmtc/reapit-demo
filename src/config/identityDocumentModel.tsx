import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { IdentityDocumentModel } from '@/schemas/index.ts'

export const identityDocumentModelConfig: ModelConfig2<IdentityDocumentModel> = {
  documentId: {
    key: 'documentId',
    label: 'documentId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  details: {
    key: 'details',
    label: 'details',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
