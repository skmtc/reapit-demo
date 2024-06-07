import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { OpenHouseAttendeeModel } from '@/schemas/openHouseAttendeeModel.generated.tsx'

export const openHouseAttendeeModelConfig: ModelConfig<OpenHouseAttendeeModel> = {_links: {
      key: '_links',
      label: '_links',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_embedded: {
      key: '_embedded',
      label: '_embedded',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,openHouseId: {
      key: 'openHouseId',
      label: 'openHouseId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,created: {
      key: 'created',
      label: 'created',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,interestLevel: {
      key: 'interestLevel',
      label: 'interestLevel',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,attendee: {
      key: 'attendee',
      label: 'attendee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};