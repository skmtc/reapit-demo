import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentAttendeeModel } from 'schemas/index.ts'

export const AppointmentAttendeeModel = export const appointmentAttendeeModelConfig: ModelConfig<AppointmentAttendeeModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,contacts: {
      key: 'contacts',
      label: 'contacts',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};