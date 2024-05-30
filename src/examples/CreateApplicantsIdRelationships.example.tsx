import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateApplicantsIdRelationships } from '@/forms/applicants.generated.tsx'
import { InsertApplicantContactRelationshipModel } from '@/schemas/index.ts'
import { insertApplicantContactRelationshipModelConfig } from '@/config/insertApplicantContactRelationshipModel.example.tsx'

const fieldNames = fieldsConfig<InsertApplicantContactRelationshipModel>({
  associatedId: true,
  associatedType: true,
  isMain: true,
})

export const CreateApplicantsIdRelationshipsForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new insertApplicantContactRelationship" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateApplicantsIdRelationships id={id}>
          <CreateApplicantsIdRelationshipsFields />
        </CreateApplicantsIdRelationships>
      </DialogContent>
    </Drawer>
  )
}

export const CreateApplicantsIdRelationshipsFields = () => {
  const formConfig =
    insertApplicantContactRelationshipModelConfig as ModelConfig<InsertApplicantContactRelationshipModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
