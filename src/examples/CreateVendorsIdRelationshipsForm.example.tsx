import { CreateVendorsIdRelationships } from '@/forms/CreateVendorsIdRelationships.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { insertVendorContactRelationshipModelConfig } from '@/config/insertVendorContactRelationshipModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { InsertVendorContactRelationshipModel } from '@/schemas/insertVendorContactRelationshipModel.generated.tsx'

export const fieldNames = fieldsConfig<InsertVendorContactRelationshipModel>({
  associatedId: true,
  associatedType: true,
  isMain: true,
})
export const CreateVendorsIdRelationshipsForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new InsertVendorContactRelationshipModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateVendorsIdRelationships id={id}>
          <CreateVendorsIdRelationshipsFields />
        </CreateVendorsIdRelationships>
      </DialogContent>
    </Drawer>
  )
}

export const CreateVendorsIdRelationshipsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent
        key={fieldName}
        fieldName={fieldName}
        fieldConfig={insertVendorContactRelationshipModelConfig[fieldName]}
      />
    ))}
  </>
)
