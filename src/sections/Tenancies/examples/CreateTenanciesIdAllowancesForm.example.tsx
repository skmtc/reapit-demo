import { CreateTenanciesIdAllowances } from '@/sections/Tenancies/forms/CreateTenanciesIdAllowances.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createTenancyAllowanceModelConfig } from '@/sections/Tenancies/config/createTenancyAllowanceModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenancyAllowanceModel } from '@/schemas/createTenancyAllowanceModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateTenancyAllowanceModel>({
  typeId: true,
  state: true,
  agreements: true,
})
export const CreateTenanciesIdAllowancesForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateTenancyAllowanceModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdAllowances id={id}>
          <CreateTenanciesIdAllowancesFields />
        </CreateTenanciesIdAllowances>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdAllowancesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createTenancyAllowanceModelConfig[fieldName]} />
    ))}
  </>
)
