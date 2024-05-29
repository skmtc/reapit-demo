import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { InsertLandlordContactRelationshipModel } from '@/schemas/index.ts'

export const insertLandlordContactRelationshipModelConfig: ModelConfig2<InsertLandlordContactRelationshipModel> = {
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
