import { CreatePropertiesIdKeys } from '@/forms/CreatePropertiesIdKeys.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createKeyModelConfig } from '@/config/createKeyModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateKeyModel } from '@/schemas/createKeyModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateKeyModel>({
  number: true,
  typeId: true,
  officeId: true,
  keysInSet: true,
})
export const CreatePropertiesIdKeysForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateKeyModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdKeys id={id}>
          <CreatePropertiesIdKeysFields />
        </CreatePropertiesIdKeys>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdKeysFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createKeyModelConfig[fieldName]} />
    ))}
  </>
)
