import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchTenanciesIdResponsibilitiesResponsibilityId } from '@/examples/PatchTenanciesIdResponsibilitiesResponsibilityIdForm.example.tsx'
import { UpdateTenancyResponsibilityModel } from 'schemas/index.ts'
import { updateTenancyResponsibilityModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateTenancyResponsibilityModel>({
          appliesTo: true,
agreements: true
        });
export const PatchTenanciesIdResponsibilitiesResponsibilityIdForm = () => {
      const navigate = useNavigate()
      const { id, responsibilityId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(responsibilityId, 'Expected responsibilityId to be defined')
    
      return (
        <Drawer title="Create new updateTenancyResponsibilityModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesIdResponsibilitiesResponsibilityId id={id} responsibilityId={responsibilityId}>
              <PatchTenanciesIdResponsibilitiesResponsibilityIdFields />
            </PatchTenanciesIdResponsibilitiesResponsibilityId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdResponsibilitiesResponsibilityIdFields = () => {
      const formConfig = updateTenancyResponsibilityModelConfig as ModelConfig<UpdateTenancyResponsibilityModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;