import { PatchVendorsId } from '@/forms/Vendors.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateVendorModelConfig } from '@/config/updateVendorModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateVendorModel>({
          lastCall: true,
nextCall: true,
typeId: true,
sellingReasonId: true,
solicitorId: true,
correspondenceAddressType: true,
source: true,
metadata: true
        });
export const PatchVendorsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateVendorModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchVendorsId id={id}>
              <PatchVendorsIdFields />
            </PatchVendorsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchVendorsIdFields = () => {
      const formConfig = updateVendorModelConfig as ModelConfig<UpdateVendorModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;