import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenanciesIdAllowances } from '@/forms/tenancies.generated.tsx'
import { CreateTenancyAllowanceModel } from '@/schemas/index.ts'
import { tenancyAllowanceModelConfig } from '@/config/tenancyAllowanceModel.example.tsx'

const fieldNames = fieldsConfig<CreateTenancyAllowanceModel>({
  typeId: true,
  state: true,
  agreements: true,
})

export const CreateTenanciesIdAllowancesForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new tenancyAllowance" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdAllowances id={id}>
          <CreateTenanciesIdAllowancesFields />
        </CreateTenanciesIdAllowances>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdAllowancesFields = () => {
  const formConfig = tenancyAllowanceModelConfig as ModelConfig<CreateTenancyAllowanceModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
