import { UpdatePropertiesIdKeysKeyIdMovementsMovementId } from '@/forms/UpdatePropertiesIdKeysKeyIdMovementsMovementId.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { checkInKeyModelConfig } from '@/config/checkInKeyModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CheckInKeyModel } from '@/schemas/checkInKeyModel.generated.tsx'

export const fieldNames = fieldsConfig<CheckInKeyModel>({
  checkInNegotiatorId: true,
})
export const UpdatePropertiesIdKeysKeyIdMovementsMovementIdForm = () => {
  const navigate = useNavigate()

  const { id, keyId, movementId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(keyId, 'Expected keyId to be defined')
  invariant(movementId, 'Expected movementId to be defined')

  return (
    <Drawer title="Create new CheckInKeyModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <UpdatePropertiesIdKeysKeyIdMovementsMovementId id={id} keyId={keyId} movementId={movementId}>
          <UpdatePropertiesIdKeysKeyIdMovementsMovementIdFields />
        </UpdatePropertiesIdKeysKeyIdMovementsMovementId>
      </DialogContent>
    </Drawer>
  )
}

export const UpdatePropertiesIdKeysKeyIdMovementsMovementIdFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={checkInKeyModelConfig[fieldName]} />
    ))}
  </>
)
