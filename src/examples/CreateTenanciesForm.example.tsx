import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateTenancies } from '@/examples/CreateTenanciesForm.example.tsx'
import { CreateTenancyModel } from 'schemas/index.ts'
import { createTenancyModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateTenancyModel>({
          startDate: true,
endDate: true,
status: true,
agentRole: true,
rent: true,
rentFrequency: true,
rentInstalmentsFrequency: true,
rentInstalmentsAmount: true,
rentInstalmentsStart: true,
meterReadingGas: true,
meterReadingGasLastRead: true,
meterReadingElectricity: true,
meterReadingElectricityLastRead: true,
meterReadingWater: true,
meterReadingWaterLastRead: true,
isPeriodic: true,
typeId: true,
negotiatorId: true,
propertyId: true,
applicantId: true,
feeNotes: true,
lettingFee: true,
managementFee: true,
deposit: true,
source: true,
metadata: true
        });
export const CreateTenanciesForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createTenancyModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateTenancies >
              <CreateTenanciesFields />
            </CreateTenancies>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateTenanciesFields = () => {
      const formConfig = createTenancyModelConfig as ModelConfig<CreateTenancyModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;