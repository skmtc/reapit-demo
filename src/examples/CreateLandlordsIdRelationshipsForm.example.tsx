import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateLandlordsIdRelationships } from '@/examples/CreateLandlordsIdRelationshipsForm.example.tsx'
import { InsertLandlordContactRelationshipModel } from 'schemas/index.ts'
import { insertLandlordContactRelationshipModelConfig } from 'config/insertLandlordContactRelationshipModel.example.tsx'

export const fieldNames = fieldsConfig<InsertLandlordContactRelationshipModel>({
          associatedId: true,
associatedType: true,
isMain: true
        });
export const CreateLandlordsIdRelationshipsForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new insertLandlordContactRelationshipModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateLandlordsIdRelationships id={id}>
              <CreateLandlordsIdRelationshipsFields />
            </CreateLandlordsIdRelationships>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateLandlordsIdRelationshipsFields = () => {
      const formConfig = insertLandlordContactRelationshipModelConfig as ModelConfig<InsertLandlordContactRelationshipModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;