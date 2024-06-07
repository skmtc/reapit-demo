import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentModel } from '@/schemas/appointmentModel.generated.tsx'

export const appointmentModelConfig: ModelConfig<AppointmentModel> = {_links: {
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
,start: {
      key: 'start',
      label: 'start',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,end: {
      key: 'end',
      label: 'end',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,recurring: {
      key: 'recurring',
      label: 'recurring',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,recurrence: {
      key: 'recurrence',
      label: 'recurrence',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,cancelled: {
      key: 'cancelled',
      label: 'cancelled',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,followUp: {
      key: 'followUp',
      label: 'followUp',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,organiserId: {
      key: 'organiserId',
      label: 'organiserId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorIds: {
      key: 'negotiatorIds',
      label: 'negotiatorIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeIds: {
      key: 'officeIds',
      label: 'officeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,attendee: {
      key: 'attendee',
      label: 'attendee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,attended: {
      key: 'attended',
      label: 'attended',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,accompanied: {
      key: 'accompanied',
      label: 'accompanied',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isRepeat: {
      key: 'isRepeat',
      label: 'isRepeat',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,virtual: {
      key: 'virtual',
      label: 'virtual',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorConfirmed: {
      key: 'negotiatorConfirmed',
      label: 'negotiatorConfirmed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,attendeeConfirmed: {
      key: 'attendeeConfirmed',
      label: 'attendeeConfirmed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyConfirmed: {
      key: 'propertyConfirmed',
      label: 'propertyConfirmed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fromArchive: {
      key: 'fromArchive',
      label: 'fromArchive',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,otherAgentId: {
      key: 'otherAgentId',
      label: 'otherAgentId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,documents: {
      key: 'documents',
      label: 'documents',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,extrasField: {
      key: 'extrasField',
      label: 'extrasField',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};