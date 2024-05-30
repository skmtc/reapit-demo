import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateJournalEntriesBulk } from '@/forms/journalentries.generated.tsx'
import { CreateBulkJournalEntryModel } from '@/schemas/index.ts'
import { bulkJournalEntryModelConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<CreateBulkJournalEntryModel>({
  createJournalEntry: true,
})

export const CreateJournalEntriesBulkForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new bulkJournalEntry" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateJournalEntriesBulk>
          <CreateJournalEntriesBulkFields />
        </CreateJournalEntriesBulk>
      </DialogContent>
    </Drawer>
  )
}

export const CreateJournalEntriesBulkFields = () => {
  const formConfig = bulkJournalEntryModelConfig as ModelConfig<CreateBulkJournalEntryModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
