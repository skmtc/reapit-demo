import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchWorksOrdersId } from '@/examples/PatchWorksOrdersIdForm.example.tsx'
import { UpdateWorksOrderModel } from 'schemas/index.ts'
import { updateWorksOrderModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateWorksOrderModel>({
          companyId: true,
propertyId: true,
tenancyId: true,
negotiatorId: true,
typeId: true,
status: true,
description: true,
reporter: true,
priority: true,
booked: true,
required: true,
completed: true,
metadata: true
        });
export const PatchWorksOrdersIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateWorksOrderModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchWorksOrdersId id={id}>
              <PatchWorksOrdersIdFields />
            </PatchWorksOrdersId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchWorksOrdersIdFields = () => {
      const formConfig = updateWorksOrderModelConfig as ModelConfig<UpdateWorksOrderModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;