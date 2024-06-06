import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyEpcModel } from 'schemas/index.ts'

export const PropertyEpcModel = export const propertyEpcModelConfig: ModelConfig<PropertyEpcModel> = {exempt: {
      key: 'exempt',
      label: 'exempt',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eer: {
      key: 'eer',
      label: 'eer',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eerRating: {
      key: 'eerRating',
      label: 'eerRating',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eerPotential: {
      key: 'eerPotential',
      label: 'eerPotential',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eerPotentialRating: {
      key: 'eerPotentialRating',
      label: 'eerPotentialRating',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eir: {
      key: 'eir',
      label: 'eir',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eirRating: {
      key: 'eirRating',
      label: 'eirRating',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eirPotential: {
      key: 'eirPotential',
      label: 'eirPotential',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,eirPotentialRating: {
      key: 'eirPotentialRating',
      label: 'eirPotentialRating',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fullDocumentUrl: {
      key: 'fullDocumentUrl',
      label: 'fullDocumentUrl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,firstPageDocumentUrl: {
      key: 'firstPageDocumentUrl',
      label: 'firstPageDocumentUrl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};