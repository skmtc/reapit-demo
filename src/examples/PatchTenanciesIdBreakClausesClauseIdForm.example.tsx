import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchTenanciesIdBreakClausesClauseId } from '@/examples/PatchTenanciesIdBreakClausesClauseIdForm.example.tsx'
import { UpdateTenancyBreakClauseModel } from 'schemas/index.ts'
import { updateTenancyBreakClauseModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateTenancyBreakClauseModel>({
          active: true,
appliesTo: true,
agreements: true,
breakFrom: true,
noticeRequired: true
        });
export const PatchTenanciesIdBreakClausesClauseIdForm = () => {
      const navigate = useNavigate()
      const { id, clauseId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(clauseId, 'Expected clauseId to be defined')
    
      return (
        <Drawer title="Create new updateTenancyBreakClauseModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesIdBreakClausesClauseId id={id} clauseId={clauseId}>
              <PatchTenanciesIdBreakClausesClauseIdFields />
            </PatchTenanciesIdBreakClausesClauseId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdBreakClausesClauseIdFields = () => {
      const formConfig = updateTenancyBreakClauseModelConfig as ModelConfig<UpdateTenancyBreakClauseModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;