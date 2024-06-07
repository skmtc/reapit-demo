import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateDocumentModel } from '@/schemas/createDocumentModel.generated.tsx'

export const createDocumentModelConfig: ModelConfig<CreateDocumentModel> = {associatedType: {
      key: 'associatedType',
      label: 'associatedType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,associatedId: {
      key: 'associatedId',
      label: 'associatedId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
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
,fileData: {
      key: 'fileData',
      label: 'fileData',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fileUrl: {
      key: 'fileUrl',
      label: 'fileUrl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};