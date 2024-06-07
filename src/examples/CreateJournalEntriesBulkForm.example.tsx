import { CreateJournalEntriesBulk } from '@/forms/JournalEntries.generated.tsx'
import { createBulkJournalEntryModelConfig } from '@/config/createBulkJournalEntryModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateBulkJournalEntryModel>({
          createJournalEntry: true
        });
export const CreateJournalEntriesBulkForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateBulkJournalEntryModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateJournalEntriesBulk >
              <CreateJournalEntriesBulkFields />
            </CreateJournalEntriesBulk>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateJournalEntriesBulkFields = () => {
      const formConfig = createBulkJournalEntryModelConfig as ModelConfig<CreateBulkJournalEntryModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;