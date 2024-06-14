import { CreateTenanciesIdChecks } from '@/sections/Tenancies/forms/CreateTenanciesIdChecks.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createTenancyCheckModelConfig } from '@/sections/Tenancies/config/createTenancyCheckModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenancyCheckModel } from '@/schemas/createTenancyCheckModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateTenancyCheckModel>({
  description: true,
  type: true,
  status: true,
  checkTypeId: true,
  metadata: true,
})
export const CreateTenanciesIdChecksForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateTenancyCheckModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdChecks id={id}>
          <CreateTenanciesIdChecksFields />
        </CreateTenanciesIdChecks>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdChecksFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createTenancyCheckModelConfig[fieldName]} />
    ))}
  </>
)
