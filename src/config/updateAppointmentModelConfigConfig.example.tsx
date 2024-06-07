import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateAppointmentModel } from '@/schemas/updateAppointmentModel.generated.tsx'

export const updateAppointmentModelConfig: ModelConfig<UpdateAppointmentModel> = {start: {
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
,followUpOn: {
      key: 'followUpOn',
      label: 'followUpOn',
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
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,otherAgentId: {
      key: 'otherAgentId',
      label: 'otherAgentId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,organiserId: {
      key: 'organiserId',
      label: 'organiserId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,cancelled: {
      key: 'cancelled',
      label: 'cancelled',
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
,accompanied: {
      key: 'accompanied',
      label: 'accompanied',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,virtual: {
      key: 'virtual',
      label: 'virtual',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isRepeat: {
      key: 'isRepeat',
      label: 'isRepeat',
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
,attended: {
      key: 'attended',
      label: 'attended',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,followUp: {
      key: 'followUp',
      label: 'followUp',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,recurrence: {
      key: 'recurrence',
      label: 'recurrence',
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
    }};