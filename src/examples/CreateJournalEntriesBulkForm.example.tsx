import { CreateJournalEntriesBulk } from '@/forms/CreateJournalEntriesBulk.generated.tsx'
import { createBulkJournalEntryModelConfig } from '@/config/createBulkJournalEntryModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateBulkJournalEntryModel } from '@/schemas/createBulkJournalEntryModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateBulkJournalEntryModel>({
  createJournalEntry: true,
})
export const CreateJournalEntriesBulkForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateBulkJournalEntryModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateJournalEntriesBulk>
          <CreateJournalEntriesBulkFields />
        </CreateJournalEntriesBulk>
      </DialogContent>
    </Drawer>
  )
}

export const CreateJournalEntriesBulkFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createBulkJournalEntryModelConfig[fieldName]} />
    ))}
  </>
)
