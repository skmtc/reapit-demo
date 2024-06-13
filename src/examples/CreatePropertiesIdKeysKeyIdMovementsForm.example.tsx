import { CreatePropertiesIdKeysKeyIdMovements } from '@/forms/CreatePropertiesIdKeysKeyIdMovements.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createKeyMovementModelConfig } from '@/config/createKeyMovementModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateKeyMovementModel } from '@/schemas/createKeyMovementModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateKeyMovementModel>({
  checkInRequired: true,
  checkOutToId: true,
  checkOutToType: true,
  checkOutNegotiatorId: true,
})
export const CreatePropertiesIdKeysKeyIdMovementsForm = () => {
  const navigate = useNavigate()

  const { id, keyId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(keyId, 'Expected keyId to be defined')

  return (
    <Drawer title="Create new CreateKeyMovementModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdKeysKeyIdMovements id={id} keyId={keyId}>
          <CreatePropertiesIdKeysKeyIdMovementsFields />
        </CreatePropertiesIdKeysKeyIdMovements>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdKeysKeyIdMovementsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createKeyMovementModelConfig[fieldName]} />
    ))}
  </>
)
