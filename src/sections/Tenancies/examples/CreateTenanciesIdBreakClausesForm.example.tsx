import { CreateTenanciesIdBreakClauses } from '@/sections/Tenancies/forms/CreateTenanciesIdBreakClauses.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createTenancyBreakClauseModelConfig } from '@/sections/Tenancies/config/createTenancyBreakClauseModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateTenancyBreakClauseModel>({
  typeId: true,
  active: true,
  appliesTo: true,
  agreements: true,
  breakFrom: true,
  noticeRequired: true,
})
export const CreateTenanciesIdBreakClausesForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateTenancyBreakClauseModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdBreakClauses id={id}>
          <CreateTenanciesIdBreakClausesFields />
        </CreateTenanciesIdBreakClauses>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdBreakClausesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createTenancyBreakClauseModelConfig[fieldName]} />
    ))}
  </>
)
