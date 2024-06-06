import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertiesIdKeysKeyIdMovements } from '@/examples/CreatePropertiesIdKeysKeyIdMovementsForm.example.tsx'
import { CreateKeyMovementModel } from 'schemas/index.ts'
import { createKeyMovementModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateKeyMovementModel>({
          checkInRequired: true,
checkOutToId: true,
checkOutToType: true,
checkOutNegotiatorId: true
        });
export const CreatePropertiesIdKeysKeyIdMovementsForm = () => {
      const navigate = useNavigate()
      const { id, keyId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(keyId, 'Expected keyId to be defined')
    
      return (
        <Drawer title="Create new createKeyMovementModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreatePropertiesIdKeysKeyIdMovements id={id} keyId={keyId}>
              <CreatePropertiesIdKeysKeyIdMovementsFields />
            </CreatePropertiesIdKeysKeyIdMovements>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreatePropertiesIdKeysKeyIdMovementsFields = () => {
      const formConfig = createKeyMovementModelConfig as ModelConfig<CreateKeyMovementModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;