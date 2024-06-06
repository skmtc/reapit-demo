import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchWorksOrdersIdItemsItemId } from '@/examples/PatchWorksOrdersIdItemsItemIdForm.example.tsx'
import { UpdateWorksOrderItemModel } from 'schemas/index.ts'
import { updateWorksOrderItemModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateWorksOrderItemModel>({
          notes: true,
chargeTo: true,
estimate: true,
estimateType: true,
netAmount: true,
vatAmount: true,
reserveAmount: true
        });
export const PatchWorksOrdersIdItemsItemIdForm = () => {
      const navigate = useNavigate()
      const { id, itemId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(itemId, 'Expected itemId to be defined')
    
      return (
        <Drawer title="Create new updateWorksOrderItemModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchWorksOrdersIdItemsItemId id={id} itemId={itemId}>
              <PatchWorksOrdersIdItemsItemIdFields />
            </PatchWorksOrdersIdItemsItemId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchWorksOrdersIdItemsItemIdFields = () => {
      const formConfig = updateWorksOrderItemModelConfig as ModelConfig<UpdateWorksOrderItemModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;