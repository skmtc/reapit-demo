import { CreateVendorsIdRelationships } from '@/forms/Vendors.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { insertVendorContactRelationshipModelConfig } from '@/config/insertVendorContactRelationshipModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<InsertVendorContactRelationshipModel>({
          associatedId: true,
associatedType: true,
isMain: true
        });
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
    
    export const CreateVendorsIdRelationshipsFields = () => {
      const formConfig = insertVendorContactRelationshipModelConfig as ModelConfig<InsertVendorContactRelationshipModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;