import { CreateJournalEntries } from '@/forms/JournalEntries.generated.tsx'
import { createJournalEntryModelConfig } from '@/config/createJournalEntryModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateJournalEntryModel>({
          typeId: true,
propertyId: true,
associatedType: true,
associatedId: true,
description: true,
negotiatorId: true
        });
export const CreateJournalEntriesForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateJournalEntryModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateJournalEntries >
              <CreateJournalEntriesFields />
            </CreateJournalEntries>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateJournalEntriesFields = () => {
      const formConfig = createJournalEntryModelConfig as ModelConfig<CreateJournalEntryModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;