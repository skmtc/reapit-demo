import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchTenanciesId } from '@/examples/PatchTenanciesIdForm.example.tsx'
import { UpdateTenancyModel } from 'schemas/index.ts'
import { updateTenancyModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateTenancyModel>({
          startDate: true,
endDate: true,
status: true,
agentRole: true,
rent: true,
rentFrequency: true,
endDateConfirmed: true,
isPeriodic: true,
typeId: true,
negotiatorId: true,
source: true,
rentInstalmentsFrequency: true,
rentInstalmentsAmount: true,
rentInstalmentsStart: true,
meterReadingGas: true,
meterReadingGasLastRead: true,
meterReadingElectricity: true,
meterReadingElectricityLastRead: true,
meterReadingWater: true,
meterReadingWaterLastRead: true,
feeNotes: true,
legalStatusId: true,
deposit: true,
lettingFee: true,
managementFee: true,
metadata: true
        });
export const PatchTenanciesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateTenancyModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesId id={id}>
              <PatchTenanciesIdFields />
            </PatchTenanciesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdFields = () => {
      const formConfig = updateTenancyModelConfig as ModelConfig<UpdateTenancyModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;