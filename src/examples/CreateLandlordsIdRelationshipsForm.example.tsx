import { CreateLandlordsIdRelationships } from '@/forms/CreateLandlordsIdRelationships.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { insertLandlordContactRelationshipModelConfig } from '@/config/insertLandlordContactRelationshipModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { InsertLandlordContactRelationshipModel } from '@/schemas/insertLandlordContactRelationshipModel.generated.tsx'

export const fieldNames = fieldsConfig<InsertLandlordContactRelationshipModel>({
  associatedId: true,
  associatedType: true,
  isMain: true,
})
export const CreateLandlordsIdRelationshipsForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new InsertLandlordContactRelationshipModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateLandlordsIdRelationships id={id}>
          <CreateLandlordsIdRelationshipsFields />
        </CreateLandlordsIdRelationships>
      </DialogContent>
    </Drawer>
  )
}

export const CreateLandlordsIdRelationshipsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent
        key={fieldName}
        fieldName={fieldName}
        fieldConfig={insertLandlordContactRelationshipModelConfig[fieldName]}
      />
    ))}
  </>
)
