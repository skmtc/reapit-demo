import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateSources } from '@/forms/sources.generated.tsx'
import { CreateSourceModel } from '@/schemas/index.ts'
import { sourceModelConfig } from '@/config/sourceModel.example.tsx'

const fieldNames = fieldsConfig<CreateSourceModel>({
  name: true,
  type: true,
  officeIds: true,
  departmentIds: true,
})

export const CreateSourcesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new source" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateSources>
          <CreateSourcesFields />
        </CreateSources>
      </DialogContent>
    </Drawer>
  )
}

export const CreateSourcesFields = () => {
  const formConfig = sourceModelConfig as ModelConfig<CreateSourceModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
