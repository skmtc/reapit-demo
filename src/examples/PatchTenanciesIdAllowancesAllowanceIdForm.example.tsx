import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchTenanciesIdAllowancesAllowanceId } from '@/examples/PatchTenanciesIdAllowancesAllowanceIdForm.example.tsx'
import { UpdateTenancyAllowanceModel } from 'schemas/index.ts'
import { updateTenancyAllowanceModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateTenancyAllowanceModel>({
          state: true,
agreements: true
        });
export const PatchTenanciesIdAllowancesAllowanceIdForm = () => {
      const navigate = useNavigate()
      const { id, allowanceId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(allowanceId, 'Expected allowanceId to be defined')
    
      return (
        <Drawer title="Create new updateTenancyAllowanceModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesIdAllowancesAllowanceId id={id} allowanceId={allowanceId}>
              <PatchTenanciesIdAllowancesAllowanceIdFields />
            </PatchTenanciesIdAllowancesAllowanceId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdAllowancesAllowanceIdFields = () => {
      const formConfig = updateTenancyAllowanceModelConfig as ModelConfig<UpdateTenancyAllowanceModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;