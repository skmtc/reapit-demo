import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateAreas } from '@/forms/areas.generated.tsx'
import { CreateAreaModel } from '@/schemas/index.ts'
import { areaModelConfig } from '@/config/areaModel.example.tsx'

const fieldNames = fieldsConfig<CreateAreaModel>({
  name: true,
  type: true,
  area: true,
  departmentIds: true,
  officeIds: true,
  parentId: true,
})

export const CreateAreasForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new area" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateAreas>
          <CreateAreasFields />
        </CreateAreas>
      </DialogContent>
    </Drawer>
  )
}

export const CreateAreasFields = () => {
  const formConfig = areaModelConfig as ModelConfig<CreateAreaModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
