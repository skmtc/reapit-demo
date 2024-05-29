import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentDocumentModel } from '@/schemas/index.ts'

export const appointmentDocumentModelConfig: ModelConfig<AppointmentDocumentModel> = {
  draftPropertyInspectionReportId: {
    key: 'draftPropertyInspectionReportId',
    label: 'draftPropertyInspectionReportId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  finalPropertyInspectionReportId: {
    key: 'finalPropertyInspectionReportId',
    label: 'finalPropertyInspectionReportId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
