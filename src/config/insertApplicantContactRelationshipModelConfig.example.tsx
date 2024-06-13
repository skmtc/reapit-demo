import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertApplicantContactRelationshipModel } from '@/schemas/insertApplicantContactRelationshipModel.generated.tsx'

export const insertApplicantContactRelationshipModelConfig: ModelConfig<InsertApplicantContactRelationshipModel> = {
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
