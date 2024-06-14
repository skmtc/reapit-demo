import { CreateTenanciesIdResponsibilities } from '@/sections/Tenancies/forms/CreateTenanciesIdResponsibilities.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createTenancyResponsibilityModelConfig } from '@/sections/Tenancies/config/createTenancyResponsibilityModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateTenancyResponsibilityModel>({
  typeId: true,
  appliesTo: true,
  agreements: true,
})
export const CreateTenanciesIdResponsibilitiesForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateTenancyResponsibilityModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdResponsibilities id={id}>
          <CreateTenanciesIdResponsibilitiesFields />
        </CreateTenanciesIdResponsibilities>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdResponsibilitiesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent
        key={fieldName}
        fieldName={fieldName}
        fieldConfig={createTenancyResponsibilityModelConfig[fieldName]}
      />
    ))}
  </>
)
