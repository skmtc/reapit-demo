import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertLandlordContactRelationshipModel } from '@/schemas/insertLandlordContactRelationshipModel.generated.tsx'

export const insertLandlordContactRelationshipModelConfig: ModelConfig<InsertLandlordContactRelationshipModel> = {
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
