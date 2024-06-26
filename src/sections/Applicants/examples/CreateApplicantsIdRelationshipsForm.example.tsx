import { CreateApplicantsIdRelationships } from '@/sections/Applicants/forms/CreateApplicantsIdRelationships.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { insertApplicantContactRelationshipModelConfig } from '@/sections/Applicants/config/insertApplicantContactRelationshipModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { InsertApplicantContactRelationshipModel } from '@/schemas/insertApplicantContactRelationshipModel.generated.tsx'

export const fieldNames = fieldsConfig<InsertApplicantContactRelationshipModel>({
  associatedId: true,
  associatedType: true,
  isMain: true,
})
export const CreateApplicantsIdRelationshipsForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new InsertApplicantContactRelationshipModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateApplicantsIdRelationships id={id}>
          <CreateApplicantsIdRelationshipsFields />
        </CreateApplicantsIdRelationships>
      </DialogContent>
    </Drawer>
  )
}

export const CreateApplicantsIdRelationshipsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent
        key={fieldName}
        fieldName={fieldName}
        fieldConfig={insertApplicantContactRelationshipModelConfig[fieldName]}
      />
    ))}
  </>
)
