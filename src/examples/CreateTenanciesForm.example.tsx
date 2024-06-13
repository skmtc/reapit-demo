import { CreateTenancies } from '@/forms/CreateTenancies.generated.tsx'
import { createTenancyModelConfig } from '@/config/createTenancyModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateTenancyModel>({
  startDate: true,
  endDate: true,
  status: true,
  agentRole: true,
  rent: true,
  rentFrequency: true,
  rentInstalmentsFrequency: true,
  rentInstalmentsAmount: true,
  rentInstalmentsStart: true,
  meterReadingGas: true,
  meterReadingGasLastRead: true,
  meterReadingElectricity: true,
  meterReadingElectricityLastRead: true,
  meterReadingWater: true,
  meterReadingWaterLastRead: true,
  isPeriodic: true,
  typeId: true,
  negotiatorId: true,
  propertyId: true,
  applicantId: true,
  feeNotes: true,
  lettingFee: true,
  managementFee: true,
  deposit: true,
  source: true,
  metadata: true,
})
export const CreateTenanciesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateTenancyModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenancies>
          <CreateTenanciesFields />
        </CreateTenancies>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createTenancyModelConfig[fieldName]} />
    ))}
  </>
)
