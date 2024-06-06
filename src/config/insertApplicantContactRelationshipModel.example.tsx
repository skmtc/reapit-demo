import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertApplicantContactRelationshipModel } from 'schemas/index.ts'

export const InsertApplicantContactRelationshipModel = export const insertApplicantContactRelationshipModelConfig: ModelConfig<InsertApplicantContactRelationshipModel> = {associatedId: {
      key: 'associatedId',
      label: 'associatedId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,associatedType: {
      key: 'associatedType',
      label: 'associatedType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isMain: {
      key: 'isMain',
      label: 'isMain',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};