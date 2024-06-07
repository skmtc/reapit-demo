import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateDocumentModel } from '@/schemas/updateDocumentModel.generated.tsx'

export const updateDocumentModelConfig: ModelConfig<UpdateDocumentModel> = {typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isPrivate: {
      key: 'isPrivate',
      label: 'isPrivate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};