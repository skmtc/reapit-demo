import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'

export const createAppointmentModelConfig: ModelConfig<CreateAppointmentModel> = {
  start: {
    key: 'start',
    label: 'start',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  end: {
    key: 'end',
    label: 'end',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  followUpOn: {
    key: 'followUpOn',
    label: 'followUpOn',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  organiserId: {
    key: 'organiserId',
    label: 'organiserId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorIds: {
    key: 'negotiatorIds',
    label: 'negotiatorIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  attendee: {
    key: 'attendee',
    label: 'attendee',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  otherAgentId: {
    key: 'otherAgentId',
    label: 'otherAgentId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  accompanied: {
    key: 'accompanied',
    label: 'accompanied',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorConfirmed: {
    key: 'negotiatorConfirmed',
    label: 'negotiatorConfirmed',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  attendeeConfirmed: {
    key: 'attendeeConfirmed',
    label: 'attendeeConfirmed',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyConfirmed: {
    key: 'propertyConfirmed',
    label: 'propertyConfirmed',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  virtual: {
    key: 'virtual',
    label: 'virtual',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  isRepeat: {
    key: 'isRepeat',
    label: 'isRepeat',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  attended: {
    key: 'attended',
    label: 'attended',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  recurrence: {
    key: 'recurrence',
    label: 'recurrence',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  documents: {
    key: 'documents',
    label: 'documents',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
