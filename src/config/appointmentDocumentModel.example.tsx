import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentDocumentModel } from '@/schemas/index.ts'

export const appointmentDocumentModelConfig: ModelConfig<AppointmentDocumentModel> = {
  draftPropertyInspectionReportId: {
    key: 'draftPropertyInspectionReportId',
    label: 'draftPropertyInspectionReportId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  finalPropertyInspectionReportId: {
    key: 'finalPropertyInspectionReportId',
    label: 'finalPropertyInspectionReportId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
